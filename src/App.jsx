// client/src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Home from './pages/Home'; // Importiere die Home-Seite, falls du sie verwenden möchtest
import Events from './pages/Events'; // Importiere die Events-Seite, falls du sie verwenden möchtest
import EventDetail from './pages/EventDetail.jsx'; 


function App() {
  return (
    
      <Router>
        <Navbar /> {/* Die Navbar wird immer angezeigt, unabhängig von der Route */}
        <div className="container"> {/* Optional: Ein Container für deinen Seiteninhalt */}
          <Routes>
            <Route path="/" element={<LandingPage/>} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} /> 
            <Route path="/events" element={<Events />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
   
  );
}

export default App;