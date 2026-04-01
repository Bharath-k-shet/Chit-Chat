// import React, { useContext, useEffect, useState } from 'react'
// import assets from '../assets/assets'
// import { useNavigate } from 'react-router-dom'
// import { AuthContext } from '../../context/AuthContext'
// import { ChatContext } from '../../context/ChatContext'

// const Sidebar = () => {
//     const { getUsers, users, selectedUser, setSelectedUser, unseenMessages,
//         setUnseenMessages } = useContext(ChatContext);

//     const { logout, onlineUsers } = useContext(AuthContext)
//     const [input, setInput] = useState("")

//     const navigate = useNavigate();

//     const filteredUsers = input ? users.filter((user) => user.fullName.toLowerCase().
//         includes(input.toLowerCase())) : users;

//     useEffect(() => {
//         getUsers();
//     }, [onlineUsers])

//     return (
//         <div className={`bg-[#818582]/10 h-full p-5 rounded-r-xl overflow-y-scroll
//         text-white ${selectedUser ? "max-md:hidden" : ""}`}>
//             <div className='pb-5'>
//                 <div className='flex justify-between items-center'>
//                     <img src={assets.logo} alt='logo' className='max-w-40' />
//                     <div className='relative py-2 group'>
//                         <img src={assets.menu_icon} alt='Menu' className='max-h-5 cursor-pointer' />
//                         <div className='absolute top-full right-0 z-20 w-32 p-5 rounded-md
//                     bg-[#282142] border border-gray-600 text-gray-100 hidden
//                     group-hover:block'>
//                             <p onClick={() => navigate('/profile')} className='cursor-pointer text-sm'>Edit Profile</p>
//                             <hr className='my-2 border-t border-gray-500' />
//                             <p onClick={() => logout()} className='cursor-pointer text-sm'>Logout</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='bg-[#282142] rounded-full flex items-center gap-2 py-3 px-4
//             mt-5'>
//                     <img src={assets.search_icon} alt="Search" className='w-3' />
//                     <input onChange={(e) => setInput(e.target.value)}
//                         type="text"
//                         className='bg-transparent border-none outline-none 
//                 text-white text-xs placeholder-[#c8c8c8] flex-1'
//                         placeholder='Search User...' />
//                 </div>
//             </div>
//             <div className='flex flex-col'>
//                 {filteredUsers.map((user, index) => (
//                     <div onClick={() => {
//                         setSelectedUser(user); setUnseenMessages(prev =>
//                             ({ ...prev, [user._id]: 0 })
//                         )
//                     }}
//                         key={index} className={`relative flex items-center gap-2 p-2 pl-4 rounded
//                 cursor-pointer max-sm:text-sm ${selectedUser?._id == user._id && 'bg-[#282142]/50'}`}>
//                         <img src={user?.profilePic || assets.avatar_icon} alt=""
//                             className='w-[35px] aspect-[1/1] rounded-full' />
//                         <div className='flex flex-col leadings-5'>
//                             <p>{user.fullName}</p>
//                             {
//                                 onlineUsers.includes(user._id)
//                                     ? <span className='text-green-400 text-xs'>Online</span>
//                                     : <span className='text-neutral-400 text-xs'>Offline</span>
//                             }
//                         </div>
//                         {unseenMessages[user._id] > 0 && <p className='absolute top-4 right-4 text-xs h-5 w-5
//                     flex justify-center rounded-full bg-violet-500/50'>
//                             {unseenMessages[user._id]}</p>}
//                     </div>

//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Sidebar


import React, { useContext, useEffect, useState } from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext'

const Sidebar = () => {
  const {
    getUsers,
    users,
    selectedUser,
    setSelectedUser,
    unseenMessages,
    setUnseenMessages
  } = useContext(ChatContext)

  const { logout, onlineUsers } = useContext(AuthContext)

  const [input, setInput] = useState("")
  const navigate = useNavigate()

  const filteredUsers = input
    ? users.filter(user =>
        user.fullName.toLowerCase().includes(input.toLowerCase()))
    : users

  useEffect(() => {
    getUsers()
  }, [onlineUsers])

  return (
    <div className={`h-full flex flex-col bg-[#f4f6fb]
    ${selectedUser ? "max-md:hidden" : ""}`}>

      {/* ===== HEADER ===== */}
      <div className="bg-gradient-to-r from-[#6D5DF6] to-[#8A7BFF] 
      p-5 rounded-b-[30px] text-white">

        <div className="flex justify-between items-center">
          <img src={assets.logo} className="h-8" />

          <div className="relative group">
            <img src={assets.menu_icon} className="w-5 cursor-pointer" />

            {/* DROPDOWN */}
            <div className="absolute right-0 top-8 hidden group-hover:block bg-white text-black rounded-lg shadow-md p-3 w-32 z-50">
              <p
                onClick={() => navigate('/profile')}
                className="cursor-pointer text-sm hover:bg-gray-100 px-2 py-1 rounded"
              >
                Edit Profile
              </p>
              <hr className="my-2" />
              <p
                onClick={() => logout()}
                className="cursor-pointer text-sm hover:bg-gray-100 px-2 py-1 rounded"
              >
                Logout
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm opacity-80">You Received</p>
          <h2 className="text-2xl font-bold">Messages</h2>
        </div>

        {/* AVATAR STRIP */}
        <div className="flex gap-3 mt-4 overflow-x-auto">
          {users.slice(0, 6).map((user, i) => (
            <div key={i} className="relative">
              <img
                src={user.profilePic || assets.avatar_icon}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ===== SEARCH ===== */}
      <div className="p-4">
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow">
          <img src={assets.search_icon} className="w-4 mr-2" />
          <input
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search..."
            className="outline-none text-sm flex-1"
          />
        </div>
      </div>

      {/* ===== USER LIST ===== */}
      <div className="flex-1 overflow-y-auto px-3 pb-3 space-y-2">

        {filteredUsers.map((user, index) => {
          const isOnline = onlineUsers.includes(user._id)

          return (
            <div
              key={index}
              onClick={() => {
                setSelectedUser(user)
                setUnseenMessages(prev => ({
                  ...prev,
                  [user._id]: 0
                }))
              }}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer 
              bg-white shadow-sm hover:shadow-md transition
              ${selectedUser?._id === user._id && 'border-2 border-[#6D5DF6]'}`}
            >

              {/* AVATAR */}
              <div className="relative">
                <img
                  src={user.profilePic || assets.avatar_icon}
                  className="w-10 h-10 rounded-full"
                />

                {isOnline && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 
                  bg-green-500 rounded-full border-2 border-white"></span>
                )}
              </div>

              {/* USER INFO */}
              <div className="flex-1">

                <p className="text-sm font-semibold text-gray-800">
                  {user.fullName}
                </p>

                {/* ✅ STATUS */}
                <p className={`text-xs font-medium flex items-center gap-1
                  ${isOnline ? "text-green-500" : "text-gray-400"}`}>

                  {isOnline ? (
                    <>
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Online
                    </>
                  ) : (
                    "Last seen recently"
                  )}
                </p>

              </div>

              {/* 🔴 UNREAD */}
              {unseenMessages[user._id] > 0 && (
                <span className="bg-[#6D5DF6] text-white text-xs px-2 py-1 rounded-full">
                  {unseenMessages[user._id]}
                </span>
              )}
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Sidebar