import React, { useState } from "react";
import './body.css';
import { Link, useLocation ,useNavigate} from "react-router-dom";
import Calendar from "react-calendar"
import { useSelector } from "react-redux"


// import { createBrowserHistory } from "history";
function DoctorDetails(props: any) {
  const location:any = useLocation();
  let history = useNavigate();
  const [selectDate,setSelectDate] = useState(new Date())
  const bookedDate = useSelector((state:any) => state.useBookedDate.bookedDate);
  let fiflterDoctorDateBook = bookedDate.filter((u:any)=>u.doctor.name === location.state.name)
  let [listTime,setListTime] =  
  useState(
  [
    {time:"08 AM",status:false},
    {time:"09 AM",status:false},
    {time:"10 AM",status:false},
    {time:"11 AM",status:false},
    {time:"12 PM",status:false},
    {time:"01 PM",status:false},
    {time:"02 PM",status:false},
    {time:"03 PM",status:false},
    {time:"04 PM",status:false},
    {time:"05 PM",status:false},
    {time:"06 PM",status:false},
    {time:"07 PM",status:false}
  ])
  const [time,setTime] = useState('')
  const submitTheTime = () =>{
    if(selectDate === undefined || time === undefined || selectDate===null || time === null || time === ""){
      console.log('Fill The Context')
    }else{
   
      return history('/AppointmentForm',{state:{data:{
        user:location.state,
        date:selectDate,
        time:time,
      }}})
    }

  }
 
  const choiseCalenderDate = (newdate:any) =>{
   
    
    let bookedTime:any = []
    let testTime = new Date(newdate)
    testTime.setDate(testTime.getDate()+1)

    if (fiflterDoctorDateBook) {
      fiflterDoctorDateBook.forEach((e:any)=>{
        console.log(e.date.split('T')[0])
        console.log(testTime.toISOString().split('T')[0])
        if(e.date.split('T')[0] === testTime.toISOString().split('T')[0] ){
          return bookedTime.push(e.time)
        }
        else{
          console.log('sss')
        }
      })
    }
    setSelectDate(testTime)
    bookedTime.forEach((v:any)=>{
      listTime.forEach((e:any)=>{
        if(v === e.time){
          return e.status = true
        }
        else{
          // return e.status = false
        }
         
       
        
      })
    })
    console.log(bookedTime)
    console.log(time)
    if(bookedTime === "" || bookedTime.length === 0){
      setListTime(
        [
          {time:"08 AM",status:false},
          {time:"09 AM",status:false},
          {time:"10 AM",status:false},
          {time:"11 AM",status:false},
          {time:"12 PM",status:false},
          {time:"01 PM",status:false},
          {time:"02 PM",status:false},
          {time:"03 PM",status:false},
          {time:"04 PM",status:false},
          {time:"05 PM",status:false},
          {time:"06 PM",status:false},
          {time:"07 PM",status:false}
        ])
    }
   


  }
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
<Calendar  
minDate={new Date()}
onChange={choiseCalenderDate}
 /><br/><br/>

<div className="grid grid-cols-4 gap-4 pl-3 pr-3 ">
{
  listTime.map((v,k)=>{
    return <>
      {v.time === time ? 
       <a  key={k} 
        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg--600 dark:hover:bg-gray-700 dark:focus:ring-teal-800">{v.time}</a> 
      :
        <>
          {
            v.status === false ?
            <a  key={k} 
            onClick={(()=>setTime(v.time))} 
            id="curs_p"
             className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">{v.time}</a> 
             :
             <a  key={k} 
             className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg--600 dark:hover:bg-gray-700 dark:focus:ring-teal-800">{v.time}</a>  
          }
        </>
     
      }
    </>
    
  })
}
</div><br/><br/>
<button
className="block flex-grow lg:flex lg:items-center lg:w-auto pl-2 pt-3 pb-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 ml-20"
onClick={submitTheTime}
>
Book an appointment
</button>

</div>
</div>
</div>
    </>
  );
}
    
    
  
  export default DoctorDetails;