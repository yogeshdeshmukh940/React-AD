import React from 'react'
import { NavLink } from 'react-router-dom'

function LandingPage() {
  return (
   <>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
  <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    <div className="space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
        Discover Your Style with Us
      </h1>
      <p className="text-lg text-gray-600">
        Shop the latest trends and get them delivered to your doorstep. Enter your address below to find stores near you!
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <input 
          type="text" 
          placeholder="Enter your address..." 
          className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Shop Now
        </button>
      </div>
    </div>

    <div className="bg-white shadow-xl rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Register Now</h2>
      <form className="space-y-4">
        <input 
          type="text" 
          placeholder="Full Name" 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Create Account
        </button>
      </form>
    </div>

  </div>
</div>
{/* 
<div className="h-screen grid grid-cols-1 md:grid-cols-2 bg-amber-100">
  <div className='  bg-red-800 text-white items-center flex justify-around'>
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold'>Welcome to Swiggy</h1>
      <p className='text-lg'>Discover the best food delivery service in your area.</p>
      <NavLink to="/login">
        <button className='mt-4 bg-white text-red-800 py-2 px-6 rounded-full'>Login Now</button>
      </NavLink>
    </div>
  </div>
  <div className=' bg-violet-300 text-white items-center flex justify-around'>
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold'>Explore Our Menu</h1>
      <p className='text-lg'>Browse through a wide variety of cuisines and dishes.</p>
      <NavLink to="/product">
        <button className='mt-4 bg-white text-violet-800 py-2 px-6 rounded-full'>View Menu</button>
      </NavLink>
    </div>
  </div>
</div> */}

   </>
  )
}

export default LandingPage