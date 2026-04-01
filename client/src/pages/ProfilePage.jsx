// import React, { useContext, useState } from 'react';
// import assets from '../assets/assets';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';

// const ProfilePage = () => {
//   const { authUser, updateProfile } = useContext(AuthContext);
//   const [selectedImg, setSelectedImg] = useState(null);
//   const [name, setName] = useState(authUser?.fullName || '');
//   const [bio, setBio] = useState(authUser?.bio || '');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // If no new image selected
//       if (!selectedImg) {
//         await updateProfile({ fullName: name, bio });
//         navigate('/');
//         return;
//       }

//       // Convert selected image to base64
//       const reader = new FileReader();
//       reader.readAsDataURL(selectedImg);
//       reader.onload = async () => {
//         const base64Image = reader.result;
//         await updateProfile({ profilePic: base64Image, fullName: name, bio });
//         navigate('/');
//       };
//     } catch (error) {
//       console.error('Profile update failed:', error);
//     }
//   };

//   return (
//     <div className='min-h-screen bg-cover bg-no-repeat flex items-center justify-center'>
//       <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg'>
        
//         {/* Left Form Section */}
//         <form onSubmit={handleSubmit} className='flex flex-col gap-5 p-10 flex-1'>
//           <h3 className='text-lg font-semibold'>Profile Details</h3>

//           {/* Image Upload */}
//           <label htmlFor='avatar' className='flex items-center gap-3 cursor-pointer'>
//             <input
//               type='file'
//               id='avatar'
//               accept='.png, .jpg, .jpeg'
//               hidden
//               onChange={(e) => setSelectedImg(e.target.files[0])}
//             />
//             <img
//               src={selectedImg ? URL.createObjectURL(selectedImg) : authUser?.profilePic || assets.avatar_icon}
//               alt='Avatar'
//               className='w-12 h-12 rounded-full object-cover'
//             />
//             <span>Upload Profile Image</span>
//           </label>

//           {/* Name */}
//           <input
//             type='text'
//             required
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder='Your Name'
//             className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500'
//           />

//           {/* Bio */}
//           <textarea
//             required
//             rows={4}
//             value={bio}
//             onChange={(e) => setBio(e.target.value)}
//             placeholder='Write profile bio'
//             className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500'
//           />

//           {/* Submit Button */}
//           <button
//             type='submit'
//             className='bg-gradient-to-r from-purple-400 to-violet-600 text-white p-2 rounded-full text-lg cursor-pointer'
//           >
//             Save
//           </button>
//         </form>

//         {/* Right Preview Section */}
//         <div className='mx-10 max-sm:mt-10'>
//           <img
//             src={selectedImg ? URL.createObjectURL(selectedImg) : authUser?.profilePic || assets.logo_icon}
//             alt='Profile Preview'
//             className='max-w-44 aspect-square rounded-full object-cover border border-gray-400'
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


import React, { useContext, useState } from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const ProfilePage = () => {
  const { authUser, updateProfile } = useContext(AuthContext)

  const [selectedImg, setSelectedImg] = useState(null)
  const [name, setName] = useState(authUser?.fullName || '')
  const [bio, setBio] = useState(authUser?.bio || '')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (!selectedImg) {
        await updateProfile({ fullName: name, bio })
        navigate('/')
        return
      }

      const reader = new FileReader()
      reader.readAsDataURL(selectedImg)

      reader.onload = async () => {
        await updateProfile({
          profilePic: reader.result,
          fullName: name,
          bio
        })
        navigate('/')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eef1f7]">

      {/* CARD */}
      <div className="w-[420px] rounded-2xl overflow-hidden shadow-lg bg-white">

        {/* TOP GRADIENT HEADER */}
        <div className="bg-gradient-to-r from-[#6D5DF6] to-[#8A7BFF] 
        h-32 flex items-center justify-center relative">

          {/* PROFILE IMAGE */}
          <label className="absolute -bottom-12 cursor-pointer group">
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => setSelectedImg(e.target.files[0])}
            />

            <img
              src={
                selectedImg
                  ? URL.createObjectURL(selectedImg)
                  : authUser?.profilePic || assets.avatar_icon
              }
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />

            {/* EDIT HOVER */}
            <div className="absolute inset-0 bg-black/40 rounded-full 
            flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-sm">Edit</span>
            </div>
          </label>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-16 px-6 pb-6 space-y-4">

          <h2 className="text-center text-xl font-semibold text-gray-700">
            Edit Profile
          </h2>

          {/* NAME */}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-lg border 
            focus:ring-2 focus:ring-[#6D5DF6] outline-none"
          />

          {/* BIO */}
          <textarea
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
            placeholder="Your bio..."
            className="w-full px-4 py-2 rounded-lg border 
            focus:ring-2 focus:ring-[#6D5DF6] outline-none"
          />

          {/* BUTTONS */}
          <div className="flex gap-3 mt-4">

            <button
              type="submit"
              className="flex-1 py-2 rounded-lg text-white 
              bg-gradient-to-r from-[#6D5DF6] to-[#8A7BFF] 
              hover:scale-105 transition"
            >
              Save
            </button>

            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfilePage


