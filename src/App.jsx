// client/src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Navbar /> {/* Die Navbar wird immer angezeigt, unabhängig von der Route */}
      <div className="container"> {/* Optional: Ein Container für deinen Seiteninhalt */}
        <Routes>
          <Route path="/" /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" />
          <Route path="/home" />
          <Route path="/events" />

        </Routes>
      </div>
    </Router>
  );
}

export default App;