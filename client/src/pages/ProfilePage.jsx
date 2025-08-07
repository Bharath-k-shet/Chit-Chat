import React, { useContext, useState } from 'react';
import assets from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const ProfilePage = () => {
  const { authUser, updateProfile } = useContext(AuthContext);
  const [selectedImg, setSelectedImg] = useState(null);
  const [name, setName] = useState(authUser?.fullName || '');
  const [bio, setBio] = useState(authUser?.bio || '');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // If no new image selected
      if (!selectedImg) {
        await updateProfile({ fullName: name, bio });
        navigate('/');
        return;
      }

      // Convert selected image to base64
      const reader = new FileReader();
      reader.readAsDataURL(selectedImg);
      reader.onload = async () => {
        const base64Image = reader.result;
        await updateProfile({ profilePic: base64Image, fullName: name, bio });
        navigate('/');
      };
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  return (
    <div className='min-h-screen bg-cover bg-no-repeat flex items-center justify-center'>
      <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg'>
        
        {/* Left Form Section */}
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 p-10 flex-1'>
          <h3 className='text-lg font-semibold'>Profile Details</h3>

          {/* Image Upload */}
          <label htmlFor='avatar' className='flex items-center gap-3 cursor-pointer'>
            <input
              type='file'
              id='avatar'
              accept='.png, .jpg, .jpeg'
              hidden
              onChange={(e) => setSelectedImg(e.target.files[0])}
            />
            <img
              src={selectedImg ? URL.createObjectURL(selectedImg) : authUser?.profilePic || assets.avatar_icon}
              alt='Avatar'
              className='w-12 h-12 rounded-full object-cover'
            />
            <span>Upload Profile Image</span>
          </label>

          {/* Name */}
          <input
            type='text'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Your Name'
            className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500'
          />

          {/* Bio */}
          <textarea
            required
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder='Write profile bio'
            className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500'
          />

          {/* Submit Button */}
          <button
            type='submit'
            className='bg-gradient-to-r from-purple-400 to-violet-600 text-white p-2 rounded-full text-lg cursor-pointer'
          >
            Save
          </button>
        </form>

        {/* Right Preview Section */}
        <div className='mx-10 max-sm:mt-10'>
          <img
            src={selectedImg ? URL.createObjectURL(selectedImg) : authUser?.profilePic || assets.logo_icon}
            alt='Profile Preview'
            className='max-w-44 aspect-square rounded-full object-cover border border-gray-400'
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;





// import React, { useContext, useState } from 'react';
// import assets from '../assets/assets';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';

// const ProfilePage = () => {
//   const { authUser, updateProfile } = useContext(AuthContext);
//   const [selectedImg, setSelectedImg] = useState(null);
//   const [Name, setName] = useState(authUser.fullName || '');
//   const [bio, setBio] = useState(authUser.bio || '');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // If no new image is selected
//     if (!selectedImg) {
//       await updateProfile({ fullName: Name, bio });
//       navigate('/');
//       return;
//     }

//     // If image is selected, convert to base64
//     const reader = new FileReader();
//     reader.readAsDataURL(selectedImg);
//     reader.onload = async () => {
//       const base64Image = reader.result;
//       await updateProfile({ profilePic: base64Image, fullName: Name, bio });
//       navigate('/');
//     };
//   };

//   return (
//     <div className='min-h-screen bg-cover bg-no-repeat flex items-center justify-center'>
//       <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg'>
        
//         {/* Form section */}
//         <form onSubmit={handleSubmit} className='flex flex-col gap-5 p-10 flex-1'>
//           <h3 className='text-lg'>Profile details</h3>
          
//           {/* Image upload */}
//           <label htmlFor='avatar' className='flex items-center gap-3 cursor-pointer'>
//             <input
//               onChange={(e) => setSelectedImg(e.target.files[0])}
//               type='file'
//               id='avatar'
//               accept='.png, .jpg, .jpeg'
//               hidden
//             />
//             <img
//               src={selectedImg ? URL.createObjectURL(selectedImg) : authUser.profilePic || assets.avatar_icon}
//               className={`w-12 h-12 ${selectedImg || authUser.profilePic ? 'rounded-full' : ''}`}
//               alt='avatar preview'
//             />
//             Upload profile image
//           </label>

//           {/* Name input */}
//           <input
//             onChange={(e) => setName(e.target.value)}
//             value={Name}
//             type='text'
//             required
//             placeholder='Your Name'
//             className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500'
//           />

//           {/* Bio input */}
//           <textarea
//             onChange={(e) => setBio(e.target.value)}
//             value={bio}
//             placeholder='Write profile bio'
//             required
//             rows={4}
//             className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500'
//           ></textarea>

//           {/* Save button */}
//           <button
//             type='submit'
//             className='bg-gradient-to-r from-purple-400 to-violet-600 text-white p-2 rounded-full text-lg cursor-pointer'
//           >
//             Save
//           </button>
//         </form>

//         {/* Right image preview */}
//         <img
//           className={`max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10`}
//           src={selectedImg ? URL.createObjectURL(selectedImg) : authUser.profilePic || assets.logo_icon}
//           alt='Profile Preview'
//         />
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
