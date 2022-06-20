import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import {actionBookedDate} from '../store/index'

function AppointmentForm() {
  const location:any = useLocation();
  const [name,setName] = useState('')
  const dispatch = useDispatch();

  const [surname, setSurname] = useState('')
  const [telephone,setTephone]= useState('')
  const [email, setEmail] =useState('')
  const submitFunction = () =>{
    if(name === "" || surname === ""  || telephone === "" || email === "" ){
      console.log('Fill All Inputs')
    }else{
      const AC = bindActionCreators(actionBookedDate,dispatch)
      let data = {
        user:{
          name:name,
          surname:surname,
          telephone:telephone,
          email:email
        },
        doctor:location.state.data.user,
        date:location.state.data.date,
        time:location.state.data.time
      }
      AC.bookedDateSave(data)
      window.location.reload()
    }
  }
  return (
    <>
    <div id="AppointmentForm">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div>
        <h1 className=" text-teal-700 text-2xl font-bold mb-10">Make an appointment</h1>
    </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="name" onChange={((e:any)=>setName(e.target.value))} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="surname" onChange={((e:any)=>setSurname(e.target.value))}   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Surname</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="tel" name="tel" 
      onChange={((e:any)=>setTephone(e.target.value))}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telephone</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="email" name="floating_email" 
      onChange={((e:any)=>setEmail(e.target.value))}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer" placeholder=" " required />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  
  <button  onClick={submitFunction} className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Send</button>
</div>
    </div>
    </>
  );
}
    
    
  
  export default AppointmentForm;