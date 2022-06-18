import React from "react";
import './body.css';
import { Link, useLocation } from "react-router-dom";
import Calendar from "react-calendar"
function DoctorDetails(props: any) {
  const location:any = useLocation();
  return (
    <>
    <div className="" id="doctorDet">
    <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-5" style={{borderRadius:'10px'}}  id="doctorDetCard">
    <a href="#">
        <img className="rounded-t-lg" style={{width:"100%"}} src={`${location.state.profilePicture}`} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{location.state.name}</h5>
        </a>
        <h3 className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">{location.state.username}</h3>
        <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">{location.state.telephone}</p>
        <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">{location.state.email}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>About</strong></p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{location.state.biography}</p>
        <br/>
    </div>
</div>



<div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-5 " style={{borderRadius:'10px'}}>
  <div className="shadow-md dark:bg-gray-900 pb-10">
<Link to='/' className="block flex-grow lg:flex lg:items-center lg:w-auto pl-2 pt-3 pb-3 ">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
</svg>
  <a className=" text-xl"><strong>Back</strong></a>
  </Link><hr/>
<div className="flex flex-col items-center pb-10">
  <h5 className="mb-3 mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Details</h5>
  <img className="mb-3 w-40 h-40 rounded-full shadow-lg" src={ `${location.state.profilePicture}`} alt="image"/>
  <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{location.state.name}</h5>
  <h3 className=" font-normal text-2xl text-gray-400 dark:text-gray-200">{location.state.specialty}</h3>
</div>

<hr/>
<Calendar /><br/><br/>
<div className="grid grid-cols-4 gap-4 pl-3 pr-3 ">
<a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">08 AM</a>
<a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">09 AM</a>
<a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">10 AM</a>
<a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">11 AM</a>
<a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">12 PM</a>
<a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">01 PM</a>
<a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">02 PM</a>
<a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">03 PM</a>
<a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">04 PM</a>
<a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">05 PM</a>
<a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">06 PM</a>
<a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">07 PM</a>
</div><br/><br/>
<Link to='/AppointmentForm' className="block flex-grow lg:flex lg:items-center lg:w-auto pl-2 pt-3 pb-3 ">
  <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 ml-20">Book an appointment</a>
</Link>
</div>
</div>
</div>
    </>
  );
}
    
    
  
  export default DoctorDetails;