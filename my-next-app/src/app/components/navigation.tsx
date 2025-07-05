import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Navigationcomps/Home';
import Branches from './Navigationcomps/Branches';
import Services from './Navigationcomps/Services';
import Booking from './Navigationcomps/Booking';
import About from './Navigationcomps/About';

function Navbar() {
  return (
    <Router>
      <div className="topnav">
        <nav>
          <ul>
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/Branches">Branches</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Booking">For Booking</Link></li>
            <li><Link to="/About">AboutUs</Link></li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Branches" element={<Branches />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navbar;
