import React, { useState } from 'react'

function MyState() {

     const [value,Setvalue]=useState(10)
     const [name,Setname]=useState("Hello World")
     const [email,Setemail]=useState("")

     // var value=10;

     function abc(e){
          console.log(e.target.value)
          Setname(e.target.value)
     }
     function xyz(e){
          console.log(e.target.value)
          Setemail(e.target.value)
     }

     function count() {
          Setvalue(value+1)
     }
  return (
    <div>
          <h1 className="text-2xl font-bold text-center my-4">My {name}</h1>
          <h3 className='text-center'>Count : {value}</h3>
          <p className="text-center text-gray-600">This is {email} a simple state management example.</p>
          <div className="flex justify-center mt-4">
               {/* <input type="text" placeholder='enter name' onChange={abc}/> */}
               <div className='shadow flex justify-center items-center gap-2 px-4 py-2 rounded-lg'>

               <input type="text" className='outline-none' placeholder='enter email' onChange={xyz}/> <span className='font-extrabold'>**</span>
               </div>
          {/* <button onClick={()=>{abc(15,24)}} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
               Click Me
          </button> */}
          <button onClick={()=>{count()}} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
               Click Me
          </button>
          <button onClick={()=>{Setname("state component")}} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
               Click Me
          </button>
          </div>
    </div>
  )
}

export default MyState