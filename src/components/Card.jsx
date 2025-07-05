function Card(props){
     return (
          <>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 mt-5 space-y-4 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">
       {props.data.title}
      </h2>

      <p className="text-gray-600 text-sm">
       {props.data.body}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
          {
               props.data.tags.map((tagname)=>{
                    return   <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">#{tagname}</span>
               })
          }
      
      </div>

      <div className="flex justify-between text-sm text-gray-500 mt-4">
        <div>
          <span className="mr-3">👍 {props.data.reactions.likes}</span>
          <span>👎  {props.data.reactions.dislikes}</span>
        </div>
        <div>👁️ {props.data.views} views</div>
      </div>

      <div className="text-right text-xs text-gray-400">User ID: {props.data.userId}</div>
    </div>
          </>
     )
}

export default Card;