import React from 'react';

const UserCard = (props) => {
     return (
          <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm mx-auto hover:scale-105 transition-transform duration-300">
               <div className="flex items-center space-x-4 mb-4">
                    <div className="h-14 w-14 bg-indigo-100 text-indigo-700 font-bold rounded-full flex items-center justify-center text-lg">
                         {props.data.name[0]}
                    </div>
                    <div>
                         <h2 className="text-xl font-semibold text-gray-800">{props.data.name}</h2>
                         <p className="text-sm text-gray-500">{props.data.profession}</p>
                    </div>
               </div>

               <div className="text-sm text-gray-700 space-y-2">
                    <p><span className="font-medium">Email:</span> {props.data.email}</p>
                    <p><span className="font-medium">Mobile:</span> {props.data.mobile}</p>
                    <p><span className="font-medium">Gender:</span> {props.data.gender}</p>
                    <p className="flex items-center gap-2">
                         {/* <span className="font-medium">Status:</span>  */}

                         {
                              props.data.isActive ? 
                              <span className="text-white px-2 rounded-full py-0.5 bg-green-600 flex items-center">
                                   Active
                              </span>
                               :
                                <span className="text-white px-2 rounded-full py-0.5 bg-red-600 flex items-center">
                                   In Active
                              </span>
                         }



                    </p>
               </div>
          </div>
     );
};

export default UserCard;
