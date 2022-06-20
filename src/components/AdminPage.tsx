import React from "react";
import { useState } from "react";
import './body.css';
import Calendar from "react-calendar"
import { useSelector } from "react-redux"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import {actionBookedDate} from '../store/index'
import cogoToast from 'cogo-toast';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function AdminPage() {
  let bookedDate = useSelector((state:any) => state.useBookedDate.bookedDate);
  const [calendarDate, setCalenderDate] = useState(new Date());
  const [time,setTime] = useState();
  const [detail,setDetail] = useState([])
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const choiseCalenderDate = (newdate:any) =>{
    let testTime = new Date(newdate)
    testTime.setDate(testTime.getDate()+1)
    setCalenderDate(testTime)
  }
  
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
  const getBookedDatailForUser = (time:any) =>{
    setTime(time)
    let fitlerWithDate =[]
    fitlerWithDate = bookedDate.filter((u:any) => u.date.split('T')[0] === calendarDate.toISOString().split('T')[0]) ;
    let finalAns = []
    finalAns = fitlerWithDate.filter((u:any) => u.time === time ) ;
    setDetail(finalAns)
    handleClickOpen()
  }
  const deleteUser = (data:any) =>{
    const AC = bindActionCreators(actionBookedDate,dispatch)
    AC.deletebookedDateAndSave(data)
    handleClose()
    cogoToast.success('Successfully Deleted');
  }
  return (
    <>
    <div id="adminPage">

    <Calendar 
    onChange={choiseCalenderDate}
    />
    <div className="grid grid-cols-4 gap-4 ">
    {
  
  listTime.map((v:any,k)=>{
    return <>
          {
            v.status === false ?
            <a  key={k} 
            onClick={(()=>getBookedDatailForUser(v.time))} 
            id="curs_p"
             className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">{v.time}</a> 
             :
             <a  key={k} 
             className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg--600 dark:hover:bg-gray-700 dark:focus:ring-teal-800">{v.time}</a>  
          }
    </>
    
  })
}
</div>
</div>
<Dialog

        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="text-teal-700 shadow-lg">{"Appointment Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <div>
          {detail.length === 0 ? 
          <p>This Day is not yet Booked </p>
            :<>
                {detail.map((v:any,k)=>{
                  return <div key={k}>
                 <h2 className=" text-teal-700 text-xl font-normal mb-2 mt-5">Doctor</h2>
                  <img className="mb-3 w-20 h-20  rounded-full shadow-lg" src={`${v.doctor.profilePicture}`} alt=""/>  
                  <label ><strong> Name: </strong>{v.doctor.name}</label><br />
                 <label><strong>Specialty: </strong>{v.doctor.specialty}</label><br />
                 <label><strong>Telephone: </strong>{v.doctor.telephone}</label><br/><br/><hr/>
                 <h2 className=" text-teal-700 text-xl font-normal mb-1 mt-2">Booked Patient</h2>
                      <label><strong>Name: </strong>{v.user.name}  </label><br />
                      <label><strong>Email: </strong>{v.user.email}  </label><br />
                      <label><strong>Telephone: </strong>{v.user.telephone}  </label><br />
            <hr />
                      
            <hr/>
            <label><strong>Time: </strong>{v.date.split('T')[0]} AT {v.time}</label>  
            <hr/>
                  
                  
                  </div>
           
                })}
            </>
          }
         </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
                   <Button onClick={(()=>deleteUser(detail))} style={{backgroundColor:"red",color:"white"}}>Delete</Button>
                  <Button onClick={handleClose} style={{backgroundColor:"#00897B",color:"white"}}>OK</Button>
        </DialogActions>    
      </Dialog>


    </>
  );
}
    
    
  
  export default AdminPage;