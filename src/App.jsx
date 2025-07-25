import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login-Register/Login';
import Register from './pages/Login-Register/Register';
import LandingPage from './pages/Home/LandingPage';
import Help from './pages/Help/Help';
import Events from './pages/Events/Events';
import EventDetail from './pages/Events/EventDetail';
import EventRegister from './pages/Events/EventRegister';
import Profile from './pages/Profile/Profile';
import Exchange from './pages/Exchange/Exchange';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Blog from './pages/Blog/Blog';
import Uberuns from './pages/UberUns/Uberuns';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar /> 
      
      <div className="container"> {/* Optional: Ein Container für deinen Seiteninhalt */}
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
 
          <Route path="/help" element={<Help />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/events/:id/register" element={<EventRegister />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/exchange/*" element={<Exchange />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/profile" element={<Profile />} />
          <Route path="/uberuns" element={<Uberuns />} /> 
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
export default App;