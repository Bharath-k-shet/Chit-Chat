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
  const [openMenu, setOpenMenu] = useState(false)

  const navigate = useNavigate()

  // ✅ TOTAL UNSEEN COUNT
  const totalUnseen = Object.values(unseenMessages || {}).reduce(
    (acc, val) => acc + val,
    0
  )

  // ✅ OPTIONAL: browser title update
  useEffect(() => {
    document.title = totalUnseen > 0
      ? `(${totalUnseen}) Chat App`
      : "Chat App"
  }, [totalUnseen])

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

          {/* DROPDOWN */}
          <div className="relative">
            <img
              src={assets.menu_icon}
              className="w-5 cursor-pointer"
              onClick={() => setOpenMenu(prev => !prev)}
            />

            {openMenu && (
              <div className="absolute right-0 top-8 bg-white text-black rounded-lg shadow-md p-3 w-32 z-50">
                <p
                  onClick={() => {
                    navigate('/profile')
                    setOpenMenu(false)
                  }}
                  className="cursor-pointer text-sm hover:bg-gray-100 px-2 py-1 rounded"
                >
                  Edit Profile
                </p>

                <hr className="my-2" />

                <p
                  onClick={() => {
                    logout()
                    setOpenMenu(false)
                  }}
                  className="cursor-pointer text-sm hover:bg-gray-100 px-2 py-1 rounded"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>

        {/* HEADER TEXT */}
        <div className="mt-4">
          <p className="text-sm opacity-80">You Received</p>

          {/* ✅ UPDATED TITLE WITH COUNT */}
          <h2 className="text-2xl font-bold flex items-center gap-2">
            Messages
            {totalUnseen > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {totalUnseen}
              </span>
            )}
          </h2>
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

      {/* SEARCH */}
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

      {/* USER LIST */}
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

              {/* UNREAD COUNT PER USER */}
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