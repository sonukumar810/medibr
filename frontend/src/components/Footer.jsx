// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div className='md:mx-10'>
//       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

//         <div>
//           <img className='mb-5 w-40' src={assets.logo} alt="" />
//           <p className='w-full md:w-2/3 text-gray-600 leading-6'>“MediBridge is a trusted healthcare platform designed to simplify doctor appointments and medical consultations. It connects patients with qualified specialists across various fields, ensuring easy access to quality healthcare.”</p>
//         </div>

//         <div>
//           <p className='text-xl font-medium mb-5'>COMPANY</p>
//           <ul className='flex flex-col gap-2 text-gray-600'>
//             <li>Home</li>
//             <li>About us</li>
//             <li>Delivery</li>
//             <li>Privacy policy</li>
//           </ul>
//         </div>

//         <div>
//           <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
//           <ul className='flex flex-col gap-2 text-gray-600'>
//             <li>91+9876543211</li>
//             <li>MediBridge@gmail.com</li>
//           </ul>
//         </div>

//       </div>

//       <div>
//         <hr />
//         <p className='py-5 text-sm text-center'>Copyright 2024 @ MediBridge.com - All Right Reserved.</p>
//       </div>

//     </div>
//   )
// }

// export default Footer


import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white px-6 md:px-12">
      
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 py-8">

        {/* Logo + Description */}
        <div>
          <img className="mb-3 w-36" src={assets.logo} alt="MediBridge Logo" />
          <p className="w-full md:w-2/3 text-gray-200 leading-6 text-sm">
            MediBridge is a trusted healthcare platform designed to simplify doctor 
            appointments and medical consultations. It connects patients with qualified 
            specialists across various fields, ensuring easy access to quality healthcare.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-semibold mb-3 text-white">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-300">
            <li className="hover:text-white transition duration-300 cursor-pointer">Home</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">About us</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Delivery</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <p className="text-lg font-semibold mb-3 text-white">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-300">
            <li className="hover:text-white transition duration-300 cursor-pointer">+91 9876543211</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">MediBridge@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div>
        <hr className="border-gray-600" />
        <p className="py-3 text-xs text-center text-gray-300">
          © 2024 MediBridge.com - All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer

