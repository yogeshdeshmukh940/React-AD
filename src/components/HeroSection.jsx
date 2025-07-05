import React, { useState } from 'react'

function HeroSection() {

     const [count,setcount]=useState(0)


     function increment(){
          setcount(count+5)
          console.log(count)
     }
     function decrement(){
          setcount(count-5)
          console.log(count)
     }

  return (
    <div>
     <h1>count value is : {count}</h1>
     <button className='border' onClick={increment}>increment</button>
     <button className='border'onClick={decrement}>decrement</button>

    </div>
  )
}

export default HeroSection