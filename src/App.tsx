import React from 'react';
import './index.css';
import './components/Doctors';
import Nav from '../src/components/nav';
import Doctors from './components/Doctors';
import AdminForm from './components/AdminForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
     <Nav/>
  <Routes>
    <Route path="/" exact element={<Doctors />}/>
    <Route path="/AdminForm" element={<AdminForm />}/>
  </Routes>
    </div>
    </Router>
  );
}

export default App;
