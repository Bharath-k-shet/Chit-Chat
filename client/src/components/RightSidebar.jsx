// import React, { useContext, useEffect, useState } from 'react'
// import assets from '../assets/assets'
// import { ChatContext } from '../../context/ChatContext'
// import { AuthContext } from '../../context/AuthContext'

// const RightSidebar = () => {
//   const { selectedUser, messages } = useContext(ChatContext)
//   const { logout, onlineUsers } = useContext(AuthContext)
//   const [msgImages, setMsgImages] = useState([])

//   // Get all images from messages and set them to state
//   useEffect(() => {
//     if (!Array.isArray(messages)) return;

//     const images = messages
//       .filter((msg) => msg.image)
//       .map((msg) => msg.image);

//     setMsgImages(images);
//   }, [messages])

//   return selectedUser && (
//     <div className={`bg-[#818582]/10 text-white w-full relative overflow-y-scroll
//     ${selectedUser ? "max-md:hidden" : ""}`}>
//       <div className='pt-16 flex flex-col items-center gap-2 text-us font-light mx-auto'>
//         <img src={selectedUser?.profilePic || assets.avatar_icon} alt=""
//           className='w-20 aspect-[1/1] rounded-full' />
//         <h1 className='px-10 text-xl font-medium mx-auto flex items-center gap-2'>
//           {onlineUsers.includes(selectedUser._id) && <p className='w-2 h-2 rounded-full bg-green-500'></p>}
//           {selectedUser.fullName}
//         </h1>
//         <p className='px-10 mx-auto'>{selectedUser.bio}</p>
//       </div>

//       <hr className='border-[#ffffff50] my-4' />

//       <div className='px-5 text-xs'>
//         <p>Media</p>
//         <div className='mt-2 max-h-[200px] overflow-y-scroll grid grid-cols-2 gap-4 opacity-80'>
//           {msgImages.map((url, index) => (
//             <div key={index} onClick={() => window.open(url)} className='cursor-pointer rounded'>
//               <img src={url} alt="" className='h-full rounded-md' />
//             </div>
//           ))}
//         </div>
//       </div>

//       <button onClick={() => logout()} className='absolute bottom-5 left-1/2 transform -translate-x-1/2
//       bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none
//       text-sm font-light py-2 px-20 rounded-full cursor-pointer'>
//         Logout
//       </button>
//     </div>
//   )
// }

// export default RightSidebar

// import React, { useContext, useEffect, useState } from 'react'
// import assets from '../assets/assets'
// import { ChatContext } from '../../context/ChatContext'
// import { AuthContext } from '../../context/AuthContext'

// const RightSidebar = () => {
//   const { selectedUser, messages } = useContext(ChatContext)
//   const { logout, onlineUsers } = useContext(AuthContext)
//   const [msgImages, setMsgImages] = useState([])

//   useEffect(() => {
//     if (!Array.isArray(messages)) return;

//     const images = messages
//       .filter((msg) => msg.image)
//       .map((msg) => msg.image);

//     setMsgImages(images);
//   }, [messages])

//   return selectedUser && (
//     <div className={`h-full flex flex-col bg-[#111827] text-white
//     ${selectedUser ? "max-md:hidden" : ""}`}>

//       {/* PROFILE */}
//       <div className="flex flex-col items-center text-center p-6 border-b border-gray-700">

//         <div className="relative">
//           <img
//             src={selectedUser?.profilePic || assets.avatar_icon}
//             className="w-20 h-20 rounded-full border border-gray-600"
//           />
//           {onlineUsers.includes(selectedUser._id) && (
//             <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></span>
//           )}
//         </div>

//         <h1 className="mt-3 text-lg font-semibold">
//           {selectedUser.fullName}
//         </h1>

//         <p className="text-sm text-gray-400 mt-1 px-4">
//           {selectedUser.bio || "No bio available"}
//         </p>
//       </div>

//       {/* MEDIA */}
//       <div className="flex-1 p-4 overflow-y-auto">
//         <p className="text-sm text-gray-400 mb-3">Media</p>

//         <div className="grid grid-cols-2 gap-3">
//           {msgImages.map((url, index) => (
//             <div
//               key={index}
//               onClick={() => window.open(url)}
//               className="cursor-pointer overflow-hidden rounded-lg group"
//             >
//               <img
//                 src={url}
//                 alt=""
//                 className="w-full h-24 object-cover rounded-lg 
//                 group-hover:scale-105 transition duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* LOGOUT BUTTON */}
//       <div className="p-4 border-t border-gray-700">
//         <button
//           onClick={() => logout()}
//           className="w-full py-2 rounded-lg 
//           bg-gradient-to-r from-purple-500 to-indigo-500
//           hover:scale-105 transition duration-300"
//         >
//           Logout
//         </button>
//       </div>

//     </div>
//   )
// }

// export default RightSidebar



import React, { useContext, useEffect, useState } from 'react'
import assets from '../assets/assets'
import { ChatContext } from '../../context/ChatContext'
import { AuthContext } from '../../context/AuthContext'

const RightSidebar = () => {
  const { selectedUser, messages } = useContext(ChatContext)
  const { logout, onlineUsers } = useContext(AuthContext)
  const [msgImages, setMsgImages] = useState([])

  useEffect(() => {
    const imgs = messages?.filter(m => m.image).map(m => m.image)
    setMsgImages(imgs || [])
  }, [messages])

  return selectedUser && (
    <div className="h-full flex flex-col bg-white">

      {/* PROFILE */}
      <div className="bg-gradient-to-r from-[#6D5DF6] to-[#8A7BFF] 
      text-white p-6 text-center">

        <img src={selectedUser.profilePic || assets.avatar_icon}
          className="w-20 h-20 rounded-full mx-auto border-2" />

        <h2 className="mt-3 font-semibold">{selectedUser.fullName}</h2>
        <p className="text-sm opacity-80">{selectedUser.bio}</p>

      </div>

      {/* MEDIA */}
      <div className="flex-1 p-4 overflow-y-auto">
        <p className="text-sm text-gray-500 mb-2">Media</p>

        <div className="grid grid-cols-3 gap-2">
          {msgImages.map((img, i) => (
            <img key={i} src={img}
              className="rounded-lg cursor-pointer"
              onClick={() => window.open(img)} />
          ))}
        </div>
      </div>

      {/* LOGOUT */}
      <div className="p-4 border-t">
        <button onClick={logout}
          className="w-full py-2 bg-[#6D5DF6] text-white rounded-lg">
          Logout
        </button>
      </div>

    </div>
  )
}

export default RightSidebar