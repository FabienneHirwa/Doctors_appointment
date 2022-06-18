import React from "react";
import './body.css';
import img from "../image/img2.jpg"
import { Link, useLocation } from "react-router-dom";
import Calendar from "react-calendar"
function DoctorDetails(props: any) {
  const location:any = useLocation();
  return (
    <>
    <div className="" id="doctorDet">
    <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" id="doctorDetCard">
    <a href="#">
        <img className="rounded-t-lg" src={`${location.state.profilePicture}`} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{location.state.name}</h5>
        </a>
        <h3 className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">{location.state.username}</h3>
        <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">{location.state.telephone}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>About</strong></p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{location.state.biography}</p>
        <br/>
        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
        Book an appointment
        </a>
    </div>
</div>



<div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
<Link to='/'>
  <li className="pl-5 pt-5">
    <a className="text-xl"> <strong>Back</strong></a>
  </li>
  </Link><hr/>
<div className="flex flex-col items-center pb-10">
  <h5 className="mb-3 mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Details</h5>
  <img className="mb-3 w-40 h-40 rounded-full shadow-lg" src={ `${location.state.profilePicture}`} alt="image"/>
  <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{location.state.name}</h5>
  <h3 className=" font-normal text-2xl text-gray-400 dark:text-gray-200">{location.state.specialty}</h3>
</div>

<hr/>
<Calendar />
</div>

</div>
    </>
  );
}
    
    
  
  export default DoctorDetails;