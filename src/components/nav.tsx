import React from "react";
import img from "../image/img2.jpg"
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
    <nav className="bg-teal-600 p-3 " id="navbar">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <img className="fill-current h-8 w-8 mr-2 rounded-full" width="50 " id="navImg" height="54" src={img}/>
    <span className="font-semibold text-xl tracking-tight shadow-lg p-2">Doctor Appointment.</span>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto" >
    <div >
    <Link to='/AdminForm' id="navbarSub">
  <li className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
    <a className="nav-link" >Admin</a>
  </li>
  </Link>
  <Link to='/'>
  <li className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
    <a className="nav-link" >Home</a>
  </li>
  </Link>
    </div>
  </div>
</nav>
    </>
  );
}
    
    
  
  export default Nav;