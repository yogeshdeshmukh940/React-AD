import React, { useEffect, useState } from 'react'

function Mycom() {

     const [count,setcount]=useState(0)

     useEffect(()=>{
          console.log("hello")
     },[])

  return (
    <div>Myc count {count} <br />
     <button onClick={()=>{setcount(count+1)}}>click me</button>
    </div>
  )
}

export default Mycom