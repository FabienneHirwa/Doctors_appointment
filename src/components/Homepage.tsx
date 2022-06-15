import React from 'react';
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
        <div className='justify-start rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700' id='container' >
            <div className="grid gap-4 " id='user_card'>
                <div className="...">
                    <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={`${profilePicture}`} alt="image"/>
                    </div>
                <div className="">
                    <h3 className="text-gray-900 text-xl font-medium mb-2">{name}</h3>
                    <p className="text-gray-700 text-base mb-4">{username}</p>
                    <p className="text-gray-600 text-xs">{specialty}</p>
                </div>
                <div className="mt-10">
                    <button type="button" className=" inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out ">Request Appointment</button>
                </div>
            </div><hr/>
            <div className='p-5 '>
                <h5 className="text-gray-600 text-xs"><strong>Phone: </strong>{telephone}</h5>
            </div>
        </div>
    </div>
     }
        

      </div>
       
      
    )
}

export default Homepage;