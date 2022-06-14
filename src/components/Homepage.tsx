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
      <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" id='container'>
    <div className="flex flex-col items-center pb-10 pt-3" id='user_card'>
        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={`${profilePicture}`} alt="image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">@{name}</h5>
        <p className="text-sm text-gray-500 dark:text-gray-400">{username}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{telephone}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{specialty}</p>
        
       
    </div>
</div>
      

      </div>
       
      
    )
}

export default Homepage;