import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Navbar(props) {
  return (
   <>
   <div className='h-24 w-full bg-violet-800 text-white items-center flex justify-around'>
     <h1 className='text-2xl font-bold'>Swiggy</h1>
     <ul className=' gap-2 hidden md:flex'>
          
          <NavLink to={"/"}>
          <li className='text-lg'>Home</li>
          </NavLink>
        
          <li className='text-lg'>About</li>
       <NavLink to={"/users"}>
          <li className='text-lg'>users</li>
       </NavLink>

        <NavLink to={"/cards"}>

          <li className='text-lg'>cards</li>
        </NavLink>
          
          <li className='text-lg'>Blog</li>
          
     </ul>
     <NavLink to={"/login"}>
     <button className='border py-1 px-5 rounded-2xl text-md'>Login Now</button>
     </NavLink>
     
     <div className='flex gap-1 flex-col justify-center items-center md:hidden'>
      <span className='h-1 block rounded-2xl bg-white w-5'></span>
      <span className='h-1 block rounded-2xl bg-white w-5'></span>
      <span className='h-1 block rounded-2xl bg-white w-5'></span>
     </div>
   </div>
   <Outlet/>
   </>
  )
}

export default Navbar