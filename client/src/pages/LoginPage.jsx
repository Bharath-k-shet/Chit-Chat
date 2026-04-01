// // import React, { useContext, useState } from 'react'
// // import assets from '../assets/assets'
// // import { AuthContext } from '../../context/AuthContext'

// // const LoginPage = () => {
// //   const [currState, setCurrState] = useState("sign up")
// //   const [fullName, setFullName] = useState("")
// //   const [email, setEmail] = useState("")
// //   const [password, setPassword] = useState("")
// //   const [bio, setBio] = useState("")
// //   const [isDataSubmitted, setIsDataSubmitted] = useState(false);

// //   const { login } = useContext(AuthContext)



// //   const onSubmitHandler = (event) => {
// //     event.preventDefault();
// //     if (currState === "sign up" && !isDataSubmitted) {
// //       setIsDataSubmitted(true)
// //       return;
// //     }
// //     login(currState === "sign up" ? "signup" : "login", {
// //       fullName, email, password,
// //       bio
// //     })
// //   }

// //   return (
// //     <div className='min-h-screen bg-cover bg-center flex items-center
// //     justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
// //       {/* --------left-------- */}

// //       <img src={assets.logo_big} alt="" className='w-[min(30vw,250px)]' />

// //       {/* --------right-------- */}

// //       <form onSubmit={onSubmitHandler} className='border-2 bg-white/8 text-white border-gray-500 p-6 flex
// //       flex-col gap-6 rounded-lg shadow-lg'>
// //         <h2 className='font-medium text-2xl flex justify-between items-center'>
// //           {currState}
// //           {isDataSubmitted &&
// //             <img onClick={() => setIsDataSubmitted(false)} src={assets.arrow_icon} alt="" className='w-5 cursor-pointer' />
// //           }
// //         </h2>

// //         {currState === "sign up" && !isDataSubmitted && (
// //           <input onChange={(e) => setFullName(e.target.value)} value={fullName}
// //             type="text" className='p-2 border border-gray-500 rounded-md
// //         focus:outline-none'placeholder=' Full Name' required />
// //         )}

// //         {!isDataSubmitted && (
// //           <>
// //             <input onChange={(e) => setEmail(e.target.value)} value={email}
// //               type="email" placeholder='Email Address' required className='p-2
// //               border border-grey-500 rounded-md focus:outline-none focus:ring-2
// //               focus:ring-indigo-500' />

// //             <input onChange={(e) => setPassword(e.target.value)} value={password}
// //               type="password" placeholder='Password' required className='p-2
// //               border border-grey-500 rounded-md focus:outline-none focus:ring-2
// //               focus:ring-indigo-500' />
// //           </>
// //         )}
// //         {currState === 'sign up' && isDataSubmitted && (
// //           <textarea onChange={(e) => setBio(e.target.value)} value={bio}
// //             rows={4} className='p-2 border border-grey-500 rounded-md 
// //             focus:outline-none focus:ring-2 focus:ring-indigo-500'
// //             placeholder='Provide a short bio...' required></textarea>
// //         )
// //         }
// //         <button type='submit' className='py-3 bg-gradient-to-r from-purple-400 to-violet-600
// //         text-white rounded-md cursor-pointer'>
// //           {currState === "sign up" ? "create Account" : "Login Now"}
// //         </button>


// //         <div className='flex items-center gap-2 text-sm text-grey-500'>
// //           <input type="checkbox" />
// //           <p>Agree to the terms of use & privacy policy.</p>
// //         </div>
// //         <div className='flex flex-col gap-2'>
// //           {currState === "sign up" ? (
// //             <p className='text-sm text-gray-600'>Already have an Account ?<span onClick={() => { setCurrState("Login"); setIsDataSubmitted(false) }}
// //               className='font-medium text-violet-500 cursor-pointer'>Login here</span></p>
// //           ) : (
// //             <p className='text-sm text-gray-600'>Create an Account <span
// //               onClick={() => setCurrState("sign up")}
// //               className='font-medium text-violet-500 cursor-pointer'>Click here</span></p>
// //           )}
// //         </div>
// //       </form>

// //     </div>
// //   )
// // }

// // export default LoginPage
// import React, { useContext, useState } from 'react'
// import assets from '../assets/assets'
// import { AuthContext } from '../../context/AuthContext'

// const LoginPage = () => {
//   const [currState, setCurrState] = useState("sign up")
//   const [fullName, setFullName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [bio, setBio] = useState("")
//   const [isDataSubmitted, setIsDataSubmitted] = useState(false);

//   const { login } = useContext(AuthContext)

//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//     if (currState === "sign up" && !isDataSubmitted) {
//       setIsDataSubmitted(true)
//       return;
//     }
//     login(currState === "sign up" ? "signup" : "login", {
//       fullName, email, password,
//       bio
//     })
//   }

//   return (
//     <div className='min-h-screen flex items-center justify-center gap-10 
//     bg-gradient-to-br from-black via-purple-900 to-gray-900 px-4'>

//       {/* LEFT */}
//       <div className='flex flex-col items-center text-center'>
//         <img src={assets.logo_big} alt="" className='w-[min(30vw,220px)] mb-4' />
//         <h1 className='text-4xl font-bold text-white'>QuickChat</h1>
//         <p className='text-gray-400 mt-2 text-sm'>
//           Connect instantly. Chat smarter 🚀
//         </p>
//       </div>

//       {/* RIGHT FORM */}
//       <form 
//         onSubmit={onSubmitHandler} 
//         className='w-[350px] p-8 rounded-2xl 
//         bg-white/10 backdrop-blur-xl border border-white/20 
//         shadow-2xl text-white flex flex-col gap-5'
//       >
//         {/* HEADER */}
//         <h2 className='text-2xl font-semibold flex justify-between items-center'>
//           {currState}
//           {isDataSubmitted && (
//             <img 
//               onClick={() => setIsDataSubmitted(false)} 
//               src={assets.arrow_icon} 
//               alt="" 
//               className='w-5 cursor-pointer opacity-70 hover:opacity-100' 
//             />
//           )}
//         </h2>

//         {/* FULL NAME */}
//         {currState === "sign up" && !isDataSubmitted && (
//           <input
//             onChange={(e) => setFullName(e.target.value)}
//             value={fullName}
//             type="text"
//             placeholder='Full Name'
//             required
//             className='bg-transparent border border-white/30 
//             p-3 rounded-lg focus:outline-none focus:border-purple-400'
//           />
//         )}

//         {/* EMAIL + PASSWORD */}
//         {!isDataSubmitted && (
//           <>
//             <input
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               type="email"
//               placeholder='Email Address'
//               required
//               className='bg-transparent border border-white/30 
//               p-3 rounded-lg focus:outline-none focus:border-purple-400'
//             />

//             <input
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//               type="password"
//               placeholder='Password'
//               required
//               className='bg-transparent border border-white/30 
//               p-3 rounded-lg focus:outline-none focus:border-purple-400'
//             />
//           </>
//         )}

//         {/* BIO */}
//         {currState === 'sign up' && isDataSubmitted && (
//           <textarea
//             onChange={(e) => setBio(e.target.value)}
//             value={bio}
//             rows={4}
//             placeholder='Provide a short bio...'
//             required
//             className='bg-transparent border border-white/30 
//             p-3 rounded-lg focus:outline-none focus:border-purple-400'
//           />
//         )}

//         {/* BUTTON */}
//         <button
//           type='submit'
//           className='py-3 rounded-lg font-semibold 
//           bg-gradient-to-r from-purple-500 to-indigo-500 
//           hover:scale-105 transition-all duration-300'
//         >
//           {currState === "sign up" ? "Create Account" : "Login Now"}
//         </button>

//         {/* TERMS */}
//         <div className='flex items-center gap-2 text-sm text-gray-300'>
//           <input type="checkbox" className='accent-purple-500' />
//           <p>Agree to terms & privacy policy</p>
//         </div>

//         {/* SWITCH */}
//         <div className='text-sm text-gray-300'>
//           {currState === "sign up" ? (
//             <p>
//               Already have an account?{" "}
//               <span
//                 onClick={() => {
//                   setCurrState("Login");
//                   setIsDataSubmitted(false)
//                 }}
//                 className='text-purple-400 font-medium cursor-pointer hover:underline'
//               >
//                 Login
//               </span>
//             </p>
//           ) : (
//             <p>
//               Create a new account{" "}
//               <span
//                 onClick={() => setCurrState("sign up")}
//                 className='text-purple-400 font-medium cursor-pointer hover:underline'
//               >
//                 Sign Up
//               </span>
//             </p>
//           )}
//         </div>

//       </form>
//     </div>
//   )
// }

// export default LoginPage


import React, { useContext, useState } from 'react'
import assets from '../assets/assets'
import { AuthContext } from '../../context/AuthContext'

const LoginPage = () => {
  const [currState, setCurrState] = useState("sign up")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [bio, setBio] = useState("")
  const [isDataSubmitted, setIsDataSubmitted] = useState(false)

  const { login } = useContext(AuthContext)

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (currState === "sign up" && !isDataSubmitted) {
      setIsDataSubmitted(true)
      return
    }
    login(currState === "sign up" ? "signup" : "login", {
      fullName, email, password, bio
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-black relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-indigo-600/30 blur-[120px] rounded-full bottom-10 right-10"></div>

      <div className="flex w-full max-w-5xl items-center justify-between px-6">

        {/* LEFT SIDE */}
        <div className="text-white space-y-6 max-md:hidden">

          <img src={assets.logo_big} className="w-40" />

          <h1 className="text-5xl font-bold leading-tight">
            Welcome to <br />
            <span className="text-purple-400">QuickChat</span>
          </h1>

          <p className="text-gray-400 max-w-sm">
            Chat instantly with your friends, share images, and stay connected anytime.
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={onSubmitHandler}
          className="w-[380px] p-8 rounded-2xl 
          bg-white/5 backdrop-blur-2xl border border-white/10 
          shadow-[0_0_40px_rgba(139,92,246,0.3)]
          text-white flex flex-col gap-5"
        >

          <h2 className="text-2xl font-semibold flex justify-between">
            {currState}
            {isDataSubmitted && (
              <img
                onClick={() => setIsDataSubmitted(false)}
                src={assets.arrow_icon}
                className="w-5 cursor-pointer opacity-70"
              />
            )}
          </h2>

          {/* FULL NAME */}
          {currState === "sign up" && !isDataSubmitted && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              required
              className="p-3 rounded-lg bg-black/40 border border-white/10 
              focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          )}

          {/* EMAIL + PASSWORD */}
          {!isDataSubmitted && (
            <>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                required
                className="p-3 rounded-lg bg-black/40 border border-white/10 
                focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
              />

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
                className="p-3 rounded-lg bg-black/40 border border-white/10 
                focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </>
          )}

          {/* BIO */}
          {currState === "sign up" && isDataSubmitted && (
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Your bio..."
              required
              className="p-3 rounded-lg bg-black/40 border border-white/10 
              focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          )}

          {/* BUTTON */}
          <button className="py-3 rounded-lg font-semibold 
          bg-gradient-to-r from-purple-500 to-indigo-500 
          hover:scale-105 transition">
            {currState === "sign up" ? "Create Account" : "Login"}
          </button>

          {/* SWITCH */}
          <p className="text-sm text-gray-400">
            {currState === "sign up" ? (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setCurrState("Login")
                    setIsDataSubmitted(false)
                  }}
                  className="text-purple-400 cursor-pointer"
                >
                  Login
                </span>
              </>
            ) : (
              <>
                Create account{" "}
                <span
                  onClick={() => setCurrState("sign up")}
                  className="text-purple-400 cursor-pointer"
                >
                  Sign Up
                </span>
              </>
            )}
          </p>

        </form>
      </div>
    </div>
  )
}

export default LoginPage