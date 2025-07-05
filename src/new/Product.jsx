import React from 'react'

function Product(props) {
  return (
    <>
    <div className="h-86 w-64 bg-gray-300 rounded-2xl p-3">
      <h1 className="text-xl font-bold text-gray-800 mb-5">{props.data.title}</h1>
      <p className='text-sm text-gray-400 mb-2'>{props.data.description}</p>
      <span className='bg-red-200 rounded-full px-2 py-1'>{props.data.category}</span>

      <div>
        <h4>Stock: <span>4</span></h4>
        <h4>Price: <span className='text-red-600'>$ {props.data.price}</span></h4>
        <h4>Rating: <span className='text-yellow-500'>{props.data.rating}</span></h4>
        <h4>Reviews: <span className='text-gray-500'>{props.data.stock}</span></h4>
        <h4>discountPercentage: <span className='text-gray-500'>{props.data.discountPercentage}</span></h4>

      </div>
    </div>
    </>
  )
}

export default Product