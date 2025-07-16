import axios from 'axios';
import React, { useState } from 'react';
// import toast from "react-hot-toast";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

function Login() {

  const [formData , setFormData]=useState({})
  const [model,setmodel]=useState(false)
  const [error,seterror]=useState("")
  const navigate =useNavigate();

  function getvalue(e) {
    var name=e.target.name;
    var value=e.target.value

    setFormData({...formData,[name]:value})
    console.log(formData)

  }

  function openbox(){
    setmodel(true)
  }

  function submitForm(e){
    e.preventDefault()
    axios.post('https://dummyjson.com/auth/login',formData)
    .then((result)=>{
      console.log(result)
      if(result.status==200){
        seterror("")
        // alert("user login successfully")
        toast.success("user login successfully" ,{
          duration: 4000,
          style: {
            background: "#333",
            color: "#fff",
          },
        })
        navigate("/users")
      }
    })
    .catch((err)=>{
      console.log(err)
      // seterror(err.response.data.message)
      toast.info(err.response.data.message)
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white/80 p-10 rounded-xl shadow-2xl w-full max-w-md backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h1>
        <form onSubmit={submitForm} method="post" className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={getvalue}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={getvalue}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div> */}

          <div>
            <label htmlFor="expiresInMins" className="block text-sm font-semibold text-gray-700">
            expiresInMins
            </label>
            <input
              type="text"
              id="expiresInMins"
              name="expiresInMins"
              onChange={getvalue}
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
              onChange={getvalue}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {error && <p className='text-red-500'>{error}</p>}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-md text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>

      {
        model==true?<>
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative animate-fade-in">
            <h2 className="text-xl font-bold text-center mb-4">User Details</h2>
            <ul className="space-y-2 text-violet-800">
              <li><strong>Username:</strong> {formData.username}</li>
              <li><strong>Email:</strong> {formData.email}</li>
              <li><strong>Mobile:</strong> {formData.mobile}</li>
              <li><strong>Password:</strong> {formData.password}</li>
            </ul>
            <button
              onClick={() => setmodel(false)}
              className="mt-6 block mx-auto px-5 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
        </>
        :
        <>
        </>
      }

     

    </div>
  );
}

export default Login;
