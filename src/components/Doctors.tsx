import React, {useState} from "react";
import Homepage from "./Homepage";
import { getData } from "../services/Data";
import './body.css';

export interface InterfaceDoctors {
    profilePicture: string;
    name:string;
    username: string;
    telephone: number;
    specialty: string;
    
}

const Doctors = () => {
    const [text]= React.useState('');
    const [data, setDoctor] = useState<InterfaceDoctors[] | []>(getData)
    // const searchFunction = (e:any) =>{
    //     if(e.target.value === ""){
    //         setDoctor(getData)
    //     }else{
    //     const findUsers = 
    //     data && data?.length > 0 
    //     ? data?.filter((u) => {
    //         return u?.username.toLowerCase().includes(e.target.value.toLowerCase()) || u?.name.toLowerCase().includes(e.target.value.toLowerCase())
    //     } )
    //     : undefined;
    //     if(findUsers){
    //         setDoctor(findUsers);
    //     }else{
    //         setDoctor(getData)
    //     }
    // }
    // };
   

    return (
        <>
        {/* <form className="flex items-center" id="searchBox">   
    <label  className="sr-only">Search</label>
    <div className="relative w-50" >
        <div className="flex absolute inset-y-0  items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" placeholder="Search an influencer..." onChange={((e)=>searchFunction(e))}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    </div>
    <button disabled={!text} onClick={searchFunction} type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
</form> */}
            {data.length > 0 ? (
                data.map((doctorHome: InterfaceDoctors) => {
                    return <Homepage doctorHome={doctorHome}  />
                   
                })
            ) : (
                <div>No influencers found.</div>
            )}
        </>
    )
}

export default Doctors;