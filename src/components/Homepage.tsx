import React from 'react';
// import { connect } from "react-redux";
import './body.css';



type HomeType = {
    profilePicture: string;
    name:string;
    username: string;
    telephone: number;
    specialty: string;
    
}

export interface HomeProps {
    doctorHome: HomeType;
}

const Homepage = ({ doctorHome, }: HomeProps) => {

    const { profilePicture, username, name,telephone, specialty} = doctorHome;

    return (
        <div>   
     { 
    <div>
        <div className='rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700' id='container' >
            <div className="grid " id='user_card'>
                <div className="...">
                    <img className="mb-3 w-30 h-30 rounded-full shadow-lg" src={`${profilePicture}`} alt="image"/>
                </div>
                <div className="ml-10 justify-start">
                    <h3 className="text-gray-600 text-2xl font-bold mb-1">{name}</h3>
                    <h4 className="text-gray-700  font-medium mb-1">{username}</h4>
                    <h4 className="text-gray-600  font-medium">{specialty}</h4>
                </div>
                <div className="mt-10">
                    <button type="button" className="inline-block px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out "><strong>Request Appointment</strong></button>
                </div>
            </div><hr/>
            <div className='p-3' id='telephone'>
                <h2 className="text-gray-600"><strong>Phone: </strong>{telephone}</h2>
            </div>
        </div>
    </div>
     }
        

      </div>
       
      
    )
}

export default Homepage;