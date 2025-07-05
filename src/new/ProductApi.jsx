import React, { useEffect, useState } from 'react'
import Product from './Product'
import axios from 'axios';

function ProductApi() {

     const [data,setdata]=useState([]);

     useEffect(()=>{
          axios.get('https://dummyjson.com/products')
          .then((res)=>{
               console.log(res.data.products);
               setdata(res.data.products);
          })
     },[])

  return (
    <div className='flex  flex-wrap gap-5 justify-center items-center'>
     {
          data.map((item)=>{
               return <Product data={item}/>
          })
     }
     
    </div>
  )
}

export default ProductApi