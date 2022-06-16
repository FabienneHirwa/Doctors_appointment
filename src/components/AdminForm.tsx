import React from "react";
import './body.css';

function AdminForm() {
  return (
    <>
    <div className="" id="adminForm">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
    <div>
        <h1 className=" text-teal-700 text-2xl font-bold mb-10">Admin Login</h1>
    </div>
    <div className="mb-4">
      <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" required/>
    </div>
    <div className="mb-6">
      <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required/>

    </div>
    <div className="flex items-center">
      <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Log In
      </button>
      
    </div>
  </form>
  
</div>
    </>
  );
}
    
    
  
  export default AdminForm;