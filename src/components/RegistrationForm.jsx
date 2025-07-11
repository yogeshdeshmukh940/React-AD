import React, { useState } from 'react';

export default function RegistrationForm() {

  const [formdata, setFormdata] = React.useState({
    username: 'user',
  })
  const [tabledata, settabledata] = useState([])

  function inputHandler(e) {
    var name = e.target.name;
    var value = e.target.value;
    setFormdata((prevdata) => ({ ...prevdata, [name]: value }));

    // console.log(formdata);
  }

  function storeTableData() {
    console.log("Form Data:", formdata);
    settabledata((prevData) => [...prevData, formdata]);
    setFormdata({}); // Reset form data after submission
  }
  console.log("table data", tabledata)


  return (


    <>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Register</h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              onChange={inputHandler}
              value={formdata.username || ''} // Controlled input
              name='username'
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Mobile */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Mobile</label>
            <input
              type="text"
              placeholder="Enter your mobile number"
              onChange={inputHandler}
              value={formdata.mobile || ''} // Controlled input
              name='mobile'
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formdata.email || ''} // Controlled input
              onChange={inputHandler}
              name='email'
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block mb-1 text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={inputHandler}
              value={formdata.password || ''} // Controlled input
              name='password'
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Submit Button (no functionality) */}
          <button
            type="button"
            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-2 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
            onClick={storeTableData}
          >
            Submit
          </button>
        </div>
      </div>


      <div className="p-8 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full table-auto">
            <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Profile</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Mobile</th>
                <th className="py-3 px-4 text-left">Password</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            {/* if table data is greater than 0 show the body  */}

            {tabledata.length > 0 && (

              <tbody>
                {tabledata.map((data, index) => {
                  return (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center text-lg font-semibold">
                         {data.username ? data.username.charAt(0).toUpperCase() : 'U'}
                        </div>
                      </td>
                      <td className="py-3 px-4">{data.username}</td>
                      <td className="py-3 px-4">{data.email}</td>
                      <td className="py-3 px-4">{data.mobile}</td>
                      <td className="py-3 px-4">{data.password}</td>
                      <td className="py-3 px-4">
                        <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">
                          Delete
                        </button>
                      </td>
                    </tr> )
            })}
              </tbody>
            )}
            {/* If no table data found show no data found */}
            {tabledata.length === 0 && (
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td colSpan="6" className="py-3 px-4 text-center text-gray-500">
                    No data found
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>


    </>

  );
}
