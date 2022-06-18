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
    
    const [data] = useState<InterfaceDoctors[] | []>(getData)
   
    return (
        <>
            {data.length > 0 ? (
                data.map((doctorHome: InterfaceDoctors) => {
                    return <Homepage doctorHome={doctorHome}  />
                   
                })
            ) : (
                <div>No Doctor found.</div>
            )}
        </>
    )
}

export default Doctors;