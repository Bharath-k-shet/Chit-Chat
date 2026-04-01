# 💬 MERN Real-Time Chat App

🚀 **Live Demo:**
https://chit-chat-two-gamma.vercel.app

---

## 📌 Project Overview

This is a **full-stack real-time chat application** built using the **MERN stack (MongoDB, Express, React, Node.js)** with **Socket.IO** for real-time communication.

Users can register, login, send messages, share images, and see online users instantly — similar to WhatsApp or Instagram DM.

---

## ✨ Features

### 🔐 Authentication

* User Signup & Login
* JWT-based authentication
* Secure protected routes

### 💬 Real-Time Chat

* Instant messaging using Socket.IO
* Real-time message updates
* No page refresh required

### 🟢 Online Status

* Shows online/offline users
* Live user presence tracking

### 🔔 Unseen Messages

* Per-user unread message count
* Total unread messages badge
* Updates instantly without refresh

### 🖼️ Media Sharing

* Send images in chat
* Cloudinary integration

### 👤 Profile Management

* Update profile details
* Upload profile picture

### 🎯 UI/UX

* Modern responsive design
* Emoji picker support 😊
* Smooth animations (Framer Motion)
* Clean chat interface

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router DOM
* Socket.IO Client
* Framer Motion
* Emoji Picker

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* Socket.IO
* Cloudinary

### Deployment

* Frontend: Vercel
* Backend: Render

---

## 📂 Project Structure

```bash
Chat-App/
│
├── client/        # React frontend
│   ├── src/
│   └── ...
│
├── server/        # Node.js backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── ...
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_url
JWT_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=your_cloud
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
CLIENT_URL=your link
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
```

Create `.env`:

```env
VITE_BACKEND_URL=your link
```

Run frontend:

```bash
npm run dev
```

---

## 🌐 Deployment

### Frontend (Vercel)

* Connected GitHub repo
* Auto deployment enabled

### Backend (Render)

* Environment variables configured
* CORS handled properly

---

## 🧠 Key Concepts Used

* REST API development
* Real-time communication with WebSockets
* State management using Context API
* Secure authentication (JWT)
* File upload handling
* Deployment and environment configuration

---

## 🚀 Future Improvements

* ✔ Typing indicator
* ✔ Message seen/delivered status
* ✔ Chat search
* ✔ Push notifications
* ✔ Group chat feature

---

## 👨‍💻 Author

**Bharath K Shet**

* GitHub: https://github.com/Bharath-k-shet
* Project: MERN Real-Time Chat App

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share with others!
