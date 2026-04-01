
import React, { useContext, useEffect, useRef, useState } from 'react'
import assets from '../assets/assets'
import { formatMessageTime } from '../lib/utils'
import { ChatContext } from '../../context/ChatContext'
import { AuthContext } from '../../context/AuthContext'
import EmojiPicker from 'emoji-picker-react'
import { motion } from "framer-motion"

const ChatContainer = () => {
  const { messages, selectedUser, setSelectedUser, sendMessage, getMessages } = useContext(ChatContext)
  const { authUser, onlineUsers } = useContext(AuthContext)

  const scrollEnd = useRef()

  const [input, setInput] = useState('')
  const [typingUser, setTypingUser] = useState(null)
  const [showEmoji, setShowEmoji] = useState(false)

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (input.trim() === "") return
    await sendMessage({ text: input.trim() })
    setInput("")
  }

  // ✅ FIXED IMAGE SEND
  const handleSendImage = async (e) => {
    const file = e.target.files[0]
    if (!file || !file.type.startsWith("image/")) return

    const reader = new FileReader()
    reader.onloadend = async () => {
      await sendMessage({ image: reader.result })
      e.target.value = ""
    }
    reader.readAsDataURL(file)
  }

  useEffect(() => {
    if (selectedUser) {
      getMessages(selectedUser._id)
    }
  }, [selectedUser])

  useEffect(() => {
    scrollEnd.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return selectedUser ? (
    <div className='h-full flex flex-col' style={{ background: "var(--bg-main)" }}>

      {/* ===== HEADER ===== */}
      <div className='flex items-center gap-3 py-3 px-4 border-b'
        style={{ background: "#6D5DF6", color: "white" }}>

        <img src={selectedUser.profilePic || assets.avatar_icon}
          className='w-8 rounded-full' />

        <p className='flex-1 text-lg flex items-center gap-2'>
          {selectedUser.fullName}
          {onlineUsers.includes(selectedUser._id) &&
            <span className='w-2 h-2 rounded-full bg-green-400'></span>}
        </p>

        <img onClick={() => setSelectedUser(null)}
          src={assets.arrow_icon}
          className='w-5 cursor-pointer' />
      </div>

      {/* ===== CHAT AREA ===== */}
      <div className='flex-1 overflow-y-auto p-4 space-y-3'>

        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.senderId === authUser._id ? 'justify-end' : 'justify-start'}`}
          >

            <div className='max-w-[65%]'>

              {msg.image ? (
                <img src={msg.image}
                  className='max-w-[250px] rounded-xl shadow' />
              ) : (
                <div className={`px-4 py-2 rounded-2xl text-sm shadow
                ${msg.senderId === authUser._id
                    ? 'bg-[#6D5DF6] text-white rounded-br-sm'
                    : 'bg-white text-gray-800 rounded-bl-sm'}`}>
                  {msg.text}
                </div>
              )}

              {/* TIME + TICKS */}
              <p className='text-[10px] text-gray-400 mt-1 flex items-center gap-1'>
                {formatMessageTime(msg.createdAt)}
                {msg.senderId === authUser._id && <span>✔✔</span>}
              </p>

            </div>
          </motion.div>
        ))}

        <div ref={scrollEnd}></div>
      </div>

      {/* ===== TYPING ===== */}
      {typingUser && (
        <p className='text-xs text-gray-400 px-4'>
          {selectedUser.fullName} is typing...
        </p>
      )}

      {/* ===== INPUT ===== */}
      <div className='border-t p-3 bg-white relative'>

        <div className='flex items-center gap-3'>

          {/* EMOJI */}
          <button onClick={() => setShowEmoji(prev => !prev)}>😊</button>

          {/* INPUT */}
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              setTypingUser("typing...")
              setTimeout(() => setTypingUser(null), 1500)
            }}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage(e)}
            placeholder='Type a message'
            className='flex-1 px-4 py-2 rounded-full border outline-none'
          />

          {/* 📎 FIXED IMAGE BUTTON */}
          <input type="file" id='image' hidden onChange={handleSendImage} />
          <label htmlFor="image"
            className='bg-gray-200 px-3 py-2 rounded-full cursor-pointer'>
            📎
          </label>

          {/* SEND */}
          <button onClick={handleSendMessage}
            className='bg-[#6D5DF6] px-3 py-2 rounded-full text-white'>
            ➤
          </button>

        </div>

        {/* EMOJI PICKER */}
        {showEmoji && (
          <div className='absolute bottom-16 right-4'>
            <EmojiPicker onEmojiClick={(e) =>
              setInput(prev => prev + e.emoji)
            } />
          </div>
        )}

      </div>
    </div>

  ) : (
    <div className='flex flex-col items-center justify-center h-full text-gray-500'>
      <div className='text-center'>
        <div className='w-16 h-16 bg-[#6D5DF6] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4'>
          💬
        </div>
        <h2 className='font-semibold'>Welcome to QuickChat</h2>
        <p className='text-sm mt-2'>Select a chat to start messaging</p>
      </div>
    </div>
  )
}

export default ChatContainer