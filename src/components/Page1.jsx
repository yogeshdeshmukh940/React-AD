import React from 'react'
import {useEffect,useState} from "react"

function Page1() {
     const [count,setcount]=useState(0)
     const [refresh,setrefresh]=useState(false)

     function increse(){
          setcount(count+1)
          console.log(count)
     }
     function pagerefresh(){
         setrefresh(true)
          console.log(refresh)
     }

     useEffect(()=>{
          console.log("hello use effect")
     },[count,refresh])

  return (
     <>
     <button onClick={increse} className="border px-2"> {count} click me</button>
     <button onClick={pagerefresh} className='border px-2'>  refresh</button>
    <div>Page1</div>
     </>
    
  )
}

export default Page1