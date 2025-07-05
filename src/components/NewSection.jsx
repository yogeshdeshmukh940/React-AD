import React, { useEffect, useState } from 'react'
import Card from "./Card"
import axios from 'axios'
function NewSection() {

     const [apidata,setapidata]=useState([])

     useEffect(()=>{
          axios.get('https://dummyjson.com/posts')
          .then((res)=>{
               setapidata(res.data.posts)
               console.log(res.data.posts)
          })
          .catch((err)=>{
               console.log(err)
          })
     },[])

     console.log("api data",apidata)
  return (
    <div>
     {
          apidata.map(function(item){
               return <Card data={item}/>
          })
     }
     
    </div>
  )
}

export default NewSection