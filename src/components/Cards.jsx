import React, { useState } from 'react'
import ProductCardNew from './ProductCardNew';

function Cards() {

     const [formdata, setformdata] = useState({})
     const [cards, setcard] = useState([{
          "productName": "boAt Airdopes 161",
          "productImage": "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX679_.jpg",
          "price": 799,
          "discount": 68,
          "colors": "red,blue,green,orange",
          "description": "Wireless earbuds with 40 hours of playback, quick charge, and ergonomic fit. Designed for music lovers and commuters.",
          "rating": 4.8,
          "feature": "60 Hours Playback"
     }])

     function inputHandler(e) {
          var { name, value } = e.target;

          setformdata((prev) => ({ ...prev, [name]: value }))

     }
     console.log(formdata)

     function submitForm(e) {
          e.preventDefault();
          setcard((prev) => [...prev, formdata])
          console.log("form")
     }
     console.log(cards)
     return (
          <>
               <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 p-6">
                    <form onSubmit={submitForm} className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-10 space-y-6">
                         <h2 className="text-3xl font-bold text-gray-800 text-center">Add New Product</h2>

                         <div>
                              <label className="block text-gray-700 font-semibold mb-1">Product Name</label>
                              <input type="text" name="productName" onChange={inputHandler} placeholder="Enter product name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />
                         </div>

                         <div>
                              <label className="block text-gray-700 font-semibold mb-1">Product Image (URL)</label>
                              <input type="text" name='productImage' onChange={inputHandler} placeholder="Enter image URL" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
                         </div>

                         <div className="grid grid-cols-2 gap-4">
                              <div>
                                   <label className="block text-gray-700 font-semibold mb-1">Price (₹)</label>
                                   <input type="number" name='price' onChange={inputHandler} placeholder="Price" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" />
                              </div>

                              <div>
                                   <label className="block text-gray-700 font-semibold mb-1">Discount (%)</label>
                                   <input type="number" name="discount" onChange={inputHandler} placeholder="Discount" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                              </div>
                         </div>

                         <div>
                              <label className="block text-gray-700 font-semibold mb-1">Available Colors</label>
                              <input type="text" name='colors' onChange={inputHandler} placeholder="Comma separated colors (e.g., Red, Blue, Green)" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                         </div>

                         <div>
                              <label className="block text-gray-700 font-semibold mb-1">Description</label>
                              <textarea name='description' onChange={inputHandler} placeholder="Product description..." rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>
                         </div>

                         <div className="grid grid-cols-2 gap-4">
                              <div>
                                   <label className="block text-gray-700 font-semibold mb-1">Rating (1–5)</label>
                                   <input type="number" onChange={inputHandler} name="rating" min="1" max="5" placeholder="Rating" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
                              </div>

                              <div>
                                   <label className="block text-gray-700 font-semibold mb-1">Feature</label>
                                   <input type="text" name='feature' onChange={inputHandler} placeholder="Enter feature" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" />
                              </div>
                         </div>

                         <button type="submit" className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-pink-500 hover:to-red-500 transition-all duration-300">
                              Submit Product
                         </button>
                    </form>
               </div>

               <div className="flex flex-wrap justify-center gap-6 p-6">

                    {cards.map((card, index) => (

                         <ProductCardNew data={card} />
                    ))}

               </div>

          </>
     )
}

export default Cards