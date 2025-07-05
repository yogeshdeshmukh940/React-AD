import React from 'react';

const ProductCard = (props) => {

     // productData.js



     return (
          <div className="w-[270px] mt-5 bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
               {/* Image section */}
               <div className="relative">
                    <img
                         src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.png?v=1745235467" // Replace with actual image
                         alt="boAt Airdopes 161"
                         className="w-full h-44 object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                         Engraving Available
                    </span>
                    <span className="absolute bottom-0 right-0 bg-violet-400 px-2 py-1 rounded text-sm font-bold text-white">
                         ⭐ {props.data.rating}
                    </span>
               </div>

               {/* Content section */}
               <div className="p-3">
                    {/* Top badges */}
                    <div className="flex justify-between items-center mb-2">
                         <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                              {props.data.feature}
                         </span>

                    </div>

                    {/* Title */}
                    <h3 className="text-md font-semibold text-gray-900 mb-1">
                         {props.data.title}
                    </h3>

                    {/* Price details */}
                    <div className=' flex justify-between items-center'>

                         <div>

                              <div className="text-lg font-bold text-black">₹{props.data.price}</div>
                              <div className="text-sm text-gray-500 line-through">₹{props.data.originalPrice}</div>
                              <div className="text-sm text-green-600 font-semibold">{props.data.discount}% off</div>
                         </div>

                         {/* Colors available */}
                         {
                              props.data.colors.map(function (color) {
                                   return (<div
                                   style={{backgroundColor:color}}
                                        className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center"
                                        >
                                   </div>)
                              })
                         }

                    </div>
               </div>
          </div>
     );
};

export default ProductCard;
