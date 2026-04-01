// import React, { useContext, useState } from 'react'
// import Sidebar from '../components/Sidebar'
// import ChatContainer from '../components/ChatContainer'
// import RightSidebar from '../components/RightSidebar'
// import { ChatContext } from '../../context/ChatContext'

// const HomePage = () => {
//   const { selectedUser } = useContext(ChatContext)
//   return (
//     <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
//       <div className={` backdrop-blur-xl border-2 border-gray-600 rounded-2xl 
//       overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUser ?
//           'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
//         <Sidebar />
//         <ChatContainer />
//         <RightSidebar />
//       </div>
//     </div>

//   )
// }

// export default HomePage


// import React, { useContext } from 'react'
// import Sidebar from '../components/Sidebar'
// import ChatContainer from '../components/ChatContainer'
// import RightSidebar from '../components/RightSidebar'
// import { ChatContext } from '../../context/ChatContext'

// const HomePage = () => {
//   const { selectedUser } = useContext(ChatContext)

//   return (
//     <div className="h-screen w-full flex items-center justify-center bg-[#0f172a]">

//       {/* MAIN CONTAINER */}
//       <div className={`w-[95%] h-[95vh] rounded-xl overflow-hidden shadow-lg 
//       border border-gray-700 bg-[#111827]
//       grid

//       ${selectedUser
//           ? 'grid-cols-1 md:grid-cols-[280px_1fr_300px]'
//           : 'grid-cols-1 md:grid-cols-[280px_1fr]'
//         }`}>

//         {/* SIDEBAR */}
//         <div className="border-r border-gray-700 h-full overflow-hidden">
//           <Sidebar />
//         </div>

//         {/* CHAT */}
//         <div className="h-full overflow-hidden">
//           <ChatContainer />
//         </div>

//         {/* RIGHT SIDEBAR */}
//         <div className={`border-l border-gray-700 h-full overflow-hidden 
//         ${selectedUser ? 'block' : 'hidden md:block'}`}>
//           <RightSidebar />
//         </div>

//       </div>
//     </div>
//   )
// }

// export default HomePage

// import React, { useContext } from 'react'
// import Sidebar from '../components/Sidebar'
// import ChatContainer from '../components/ChatContainer'
// import RightSidebar from '../components/RightSidebar'
// import { ChatContext } from '../../context/ChatContext'

// const HomePage = () => {
//   const { selectedUser } = useContext(ChatContext)

//   return (
//     <div className="h-screen w-full flex bg-[#f4f6fb]">

//       {/* ===== SIDEBAR ===== */}
//       <div className={`w-[280px] h-full bg-white shadow-sm 
//       ${selectedUser ? 'max-md:hidden' : ''}`}>
//         <Sidebar />
//       </div>

//       {/* ===== CHAT AREA ===== */}
//       <div className="flex-1 h-full flex flex-col">
//         <ChatContainer />
//       </div>

//       {/* ===== RIGHT SIDEBAR ===== */}
//       <div className={`w-[300px] h-full bg-white border-l
//       ${selectedUser ? 'block' : 'hidden md:block'}`}>
//         <RightSidebar />
//       </div>

//     </div>
//   )
// }

// export default HomePage


import React, { useContext } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'
import { ChatContext } from '../../context/ChatContext'

const HomePage = () => {
  const { selectedUser } = useContext(ChatContext)

  return (
    <div className="h-screen w-full flex bg-[#eef1f7]">

      {/* SIDEBAR */}
      <div className="w-[280px] h-full">
        <Sidebar />
      </div>

      {/* CHAT */}
      <div className="flex-1 h-full flex flex-col">
        <ChatContainer />
      </div>

      {/* RIGHT PANEL */}
      {selectedUser && (
        <div className="w-[300px] h-full bg-white border-l shadow-sm">
          <RightSidebar />
        </div>
      )}

    </div>
  )
}

export default HomePage