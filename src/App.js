import React from 'react';
import { Routes, Route} from "react-router-dom";
import EmptyVessels from './components/EmptyVessels';
import './App.css';
import VesselDetails from './components/VesselDetails';


const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path='/' element={<EmptyVessels />}></Route>
        <Route path="/:id" element={<VesselDetails />}></Route>
        {/* <Route path="/:id/download/contact-card" element={<ContactCard />} ></Route> */}
      </Routes>
    </div>
  );
}

export default App;
