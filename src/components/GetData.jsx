import React, { useEffect, useState } from 'react'
import axios from 'axios'

function GetData() {

     const [users,setusers]=useState([]);

     useEffect(()=>{

          axios.get("https://dummyjson.com/users")
          .then((result)=>{
               console.log(result.data.users)
               setusers(result.data.users)
          }).catch((err)=>{
               console.log(err)
          })

     },[])

     if(users.length==0){
          return (<h1>please wait ...</h1>)
     }

  return (
   <>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-wrap gap-6 items-center justify-center p-4">
     {
          users.map((user)=>{
               return (
<div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-102 duration-300">
        {/* Header with Image */}
        <div className="relative">
          <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <img
            src={user.image}
            alt="Emily Johnson"
            className="w-24 h-24 rounded-full border-4 border-white absolute top-16 left-1/2 transform -translate-x-1/2"
          />
        </div>

        {/* Content */}
        <div className="pt-16 pb-6 px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">{user.firstName} {user.lastName}</h1>
          <p className="text-sm text-gray-500 capitalize">{user.role}</p>

          <div className="mt-6 space-y-4">
            {/* Email */}
            <div className="flex items-center justify-center space-x-2">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l9 6 9-6m0 0l-9-6-9 6m18 0v10l-9 6-9-6V8"
                ></path>
              </svg>
              <p className="text-gray-700 text-sm">{user.email}</p>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center space-x-2">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <p className="text-gray-700 text-sm">{user.phone}</p>
            </div>

            {/* Address */}
            <div className="flex items-center justify-center space-x-2">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <p className="text-gray-700 text-sm">
               {user.address.address},{user.address.city} ,{user.address.state}
              </p>
            </div>

            {/* Age and Gender */}
            <div className="flex items-center justify-center space-x-2">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              <p className="text-gray-700 text-sm">Age: {user.age} | Gender: {user.gender}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 py-4 text-center">
          <p className="text-xs text-gray-500">
            Profile last updated: July 2025
          </p>
        </div>
      </div>
               )
          })
     }
      
    </div>
   </>
  )
}

export default GetData