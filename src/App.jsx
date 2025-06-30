import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Home from './pages/Home'; 
import Events from './pages/Events';
import EventDetail from './pages/EventDetail.jsx'; 
import EventRegister from './pages/EventRegister.jsx';
import Help from './pages/Help'; 
import Exchange from './pages/Exchange/Exchange'; 
import ForgotPassword from './components/ForgotPassword';
import Blog from './pages/Blog'; 

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
          <Route path="/home/:id" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/events/:id/register" element={<EventRegister />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<LandingPage/>} /> 
          <Route path="/exchange" element={<Exchange />} /> 
          <Route path="/events" />
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/help" element={<Help/>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;