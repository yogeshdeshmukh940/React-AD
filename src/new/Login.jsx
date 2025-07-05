import React, { useState } from 'react'

function Login() {
    const [userdata,setuserdata] = useState({
        username: '',
        email: '',
        mobile: '',
        password: ''
    });
    
    function handelinput(e) {

    setuserdata({...userdata,[e.target.name]: e.target.value});
    }
    console.log(userdata);
  return (
     <>
      <div className="bg-white/80 p-10 rounded-xl shadow-2xl w-full max-w-md backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h1>
        <form action="" method="post" className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e)=>{handelinput(e)}}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e)=>{handelinput(e)}}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700">
              Mobile
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              onChange={(e)=>{handelinput(e)}}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e)=>{handelinput(e)}}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="button"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-md text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
     </>
  )
}

export default Login