// import { createContext, useContext, useEffect, useState } from "react";
// import { AuthContext } from "./AuthContext";
// import toast from "react-hot-toast";

// export const ChatContext = createContext();

// export const ChatProvider = ({ children }) => {
//   const [messages, setMessages] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [unseenMessages, setUnseenMessages] = useState({});

//   const { socket, axios } = useContext(AuthContext);

//   // Get all users for sidebar
//   const getUsers = async () => {
//     try {
//       const { data } = await axios.get("/api/messages/users");
//       if (data.success) {
//         setUsers(data.users);
//         setUnseenMessages(data.unseenMessages);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   // Get messages for selected user
//   const getMessages = async (userId) => {
//     try {
//       const { data } = await axios.get(`/api/messages/${userId}`);
//       if (data.success) {
//         setMessages(data.messages);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   //  Send message to selected user
//   const sendMessage = async (messageData) => {
//     try {
//       if (!selectedUser?._id) {
//         toast.error("No user selected");
//         return;
//       }

//       const { data } = await axios.post(`/api/messages/send/${selectedUser._id}`, messageData);

//       if (data.success) {
//         setMessages((prevMessages) => [...prevMessages, data.newMessage]);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   // Subscribe to new incoming messages
//   const subscribeToMessages = () => {
//     if (!socket) return;

//     socket.on("newMessage", (newMessage) => {
//       if (selectedUser && newMessage.senderId === selectedUser._id) {
//         newMessage.seen = true;
//         setMessages((prev) => [...prev, newMessage]);

//         // Mark message as seen
//         axios.put(`/api/messages/mark/${newMessage._id}`);
//       } else {
//         setUnseenMessages((prev) => ({
//           ...prev,
//           [newMessage.senderId]: prev[newMessage.senderId]
//             ? prev[newMessage.senderId] + 1
//             : 1,
//         }));
//       }
//     });
//   };

//   //  Unsubscribe from socket on cleanup
//   const unsubscribeFromMessages = () => {
//     if (socket) {
//       socket.off("newMessage");
//     }
//   };

//   // Listen for changes in socket or selected user
//   useEffect(() => {
//     subscribeToMessages();
//     return () => unsubscribeFromMessages();
//   }, [socket, selectedUser]);

//   //Final value to export
//   const value = {
//     messages,
//     users,
//     selectedUser,
//     setSelectedUser,
//     setMessages,
//     getUsers,
//     getMessages,
//     sendMessage,
//     unseenMessages,
//     setUnseenMessages,
//   };

//   return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
// };


import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [unseenMessages, setUnseenMessages] = useState({});

  const { socket, axios } = useContext(AuthContext);

  // ================= GET USERS =================
  const getUsers = async () => {
    try {
      const { data } = await axios.get("/api/messages/users");
      if (data.success) {
        setUsers(data.users);
        setUnseenMessages(data.unseenMessages);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ================= GET MESSAGES =================
  const getMessages = async (userId) => {
    try {
      const { data } = await axios.get(`/api/messages/${userId}`);
      if (data.success) {
        setMessages(data.messages);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ================= SEND MESSAGE =================
  const sendMessage = async (messageData) => {
    try {
      if (!selectedUser?._id) {
        toast.error("No user selected");
        return;
      }

      const { data } = await axios.post(
        `/api/messages/send/${selectedUser._id}`,
        messageData
      );

      if (data.success) {
        setMessages((prev) => [...prev, data.newMessage]);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ================= REAL-TIME SOCKET FIX =================
  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage) => {
      const senderId = newMessage.senderId;

      // ✅ If chat is OPEN → add message directly
      if (selectedUser && senderId === selectedUser._id) {
        newMessage.seen = true;

        setMessages((prev) => [...prev, newMessage]);

        // mark as seen
        axios.put(`/api/messages/mark/${newMessage._id}`);
      }
      // ❌ If chat is NOT open → increase unseen count
      else {
        setUnseenMessages((prev) => ({
          ...prev,
          [senderId]: (prev[senderId] || 0) + 1,
        }));
      }
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket, selectedUser]);

  // ================= EXPORT VALUE =================
  const value = {
    messages,
    users,
    selectedUser,
    setSelectedUser,
    setMessages,
    getUsers,
    getMessages,
    sendMessage,
    unseenMessages,
    setUnseenMessages,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};