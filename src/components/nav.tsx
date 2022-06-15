import React from "react";
import img from "../image/img2.jpg"

function Nav() {
  return (
    <>
    <nav className="flex items-center justify-between flex-wrap bg-teal-600 p-3">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <img className="fill-current h-8 w-8 mr-2 rounded-full" width="50 " id="navImg" height="54" src={img}/>
    <span className="font-semibold text-2xl tracking-tight shadow-lg p-2">Doctor Appointment.</span>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <h2  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 hover:text-white mr-4">Be safe!</h2>
    </div>
    <div>
      <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"><strong>Admin</strong></a>
    </div>
  </div>
</nav>
    </>
  );
}
    
    
  
  export default Nav;