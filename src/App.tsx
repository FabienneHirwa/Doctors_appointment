import React from 'react';
import './index.css';
import './components/Doctors';
import Nav from '../src/components/nav';
import Doctors from './components/Doctors';
import AdminForm from './components/AdminForm';
import DoctorDetails from './components/DoctorDetails'
import AppointmentForm from './components/AppointmentForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';


function App() {
  return (
    <Router>
    <div className="App">
     <Nav/>
  <Routes>
    <Route path="/"  element={<Doctors />}/>
    <Route path="/AdminForm" element={<AdminForm />}/>
    <Route path="/DoctorDetails" element={<DoctorDetails />}/>
    <Route path="/AppointmentForm" element={<AppointmentForm />}/>
  </Routes>
    </div>
    </Router>
  );
}

export default App;
