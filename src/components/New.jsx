import React, { useState } from 'react'

function New(props) {

     // var count=0
     const [count,setcount]=useState(10)


     function incre(){
          setcount(count+1)
     }
     function decre(){
          setcount(count-1)
     }

  return (
    <div>New
     <h1>count : {count}</h1>
     <button className='border px-2 py-1 bg-amber-500' onClick={incre}>increment</button>
     <button className='border px-2 py-1 bg-violet-500' onClick={decre}>decrement</button>
     {/* <h1>my name is {props.data.name} i am old {props.data.age} {props.data.college}</h1> */}
    </div>
  )
}

export default New