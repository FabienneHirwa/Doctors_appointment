import React, {useState} from "react";
import Homepage from "./Homepage";
import { getData } from "../services/Data";
import './body.css';
//  import { useSelector } from "react-redux"
export interface InterfaceDoctors {
    profilePicture: string;
    name:string;
    username: string;
    telephone: number;
    specialty: string;
    
}

const Doctors = () => {
    
    const [data] = useState<InterfaceDoctors[] | []>(getData)
    //  const bookedDate = useSelector((state:any) => state.useBookedDate.bookedDate);
    //  console.log(bookedDate)
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