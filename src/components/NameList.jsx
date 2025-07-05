import React, { useState } from 'react'

function NameList() {

     const [data,setdata]=useState(["aman","ram",45,85,96,"riya","jay"])
     const [name,setname]=useState()

     function getvalue(e){
          setname(e.target.value)
          console.log(e.target.value)
     }

     function setvalue(){
          setdata([...data,name])
     }

  return (
    <div>
     <h1>this is a list</h1>
     <ul>

          {
               data.map(function(item){
                    return <li>{item}</li>
               })
          }

     </ul>

     <input type="text" className='mt-3 border' onChange={(e)=>{getvalue(e)}} />
     <button className='border px-5 py-2' onClick={setvalue}>Add name</button>

    </div>
  )
}

export default NameList