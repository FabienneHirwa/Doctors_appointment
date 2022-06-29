import React, { useState } from "react";
import './body.css';
import { useNavigate } from "react-router-dom";
function AdminForm() {
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const history = useNavigate()
  const submitButton = () =>{
    if(name === "admin" && password === "admin"){
      history('/adminPage')
       // cogoToast.success('Login is Successfully Done');
      
    }else{
       alert('Please Use Correct Credentials');
    }
  }
  return (
    <>
    <div className="" id="adminForm">
  <form data-test="login-form" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
    <div>
        <h1 className=" text-teal-700 text-2xl font-bold mb-10">Admin Login</h1>
    </div>
    <div className="mb-4">
      <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input data-test="login-input"
      onChange={((e)=> setName(e.target.value))}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" required/>
    </div>
    <div className="mb-6">
      <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input data-test="password-input"
      onChange={((e)=> setPassword(e.target.value))}
      className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required/>

    </div>
    <div className="flex items-center">
      <button
      onClick={submitButton}
      className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Log In
      </button>
      
    </div>
  </form>
  
</div>
    </>
  );
}
    
    
  
  export default AdminForm;