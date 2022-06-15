import React from 'react';
import './App.css';
import './index.css';
import './components/Doctors';
import Nav from '../src/components/nav';
import Doctors from './components/Doctors';


function App() {
  return (
    <div className="App">
      <Nav/>
     <Doctors/>
    </div>
  );
}

export default App;
