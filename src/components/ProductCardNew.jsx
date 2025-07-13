export default function ProductCardNew(props) {
     return (
       <div className="max-w-xs rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 relative font-sans">
         {/* Top Label */}
         <div className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded-md flex items-center space-x-1">
           <span>🔥</span>
           <span>Engraving Available</span>
         </div>
   
         {/* Product Image */}
         <img
           src={props.data.productImage || "https://i.postimg.cc/3x1f5j7H/bo-at-Airdopes-161.png"}
           alt="boAt Airdopes 161"
           className="w-full h-48 object-cover"
         />
   
         {/* Playback + Rating */}
         <div className="flex justify-between items-center bg-yellow-400 px-3 py-2">
           <p className="text-xs font-semibold text-black">{props.data.feature}</p>
           <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-md text-xs font-bold">
             ⭐ <span>{props.data.rating}</span>
           </div>
         </div>
   
         {/* Product Title */}
         <div className="p-4">
           <h2 className="font-semibold text-gray-800 text-lg mb-1">{props.data.productName}</h2>
           <h2 className="font-normal text-gray-800 text-sm mb-1">{props.data.description}</h2>
   
           {/* Price Section */}
           <div className="flex items-center gap-2 mb-2">
             <p className="text-xl font-bold text-black">₹{Math.round(props.data.price - (props.data.price * props.data.discount / 100))}</p>
             <p className="text-sm text-gray-400 line-through">₹{props.data.price}</p>
             <p className="text-sm text-green-600 font-semibold">{props.data.discount}% off</p>
           </div>
   
           {/* Colors */}
           <div className="flex items-center gap-1">
               {
                     props.data.colors.split(",").map((color, index) => (
                         <span style={{backgroundColor:color}} className="w-5 h-5 rounded-full border border-gray-300"></span>
                     ))
               }
             
             <span className="text-sm text-gray-600 font-medium">{props.data.colors.split(",").length}</span>
           </div>
         </div>
       </div>
     );
   }
   