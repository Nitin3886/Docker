// Navbar.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-sky-100 p-4 flex justify-between items-center fixed w-full">
      <div className="flex items-center">
        <h1 className="text-sky-900 font-bold text-2xl font-serif">DoctorHome</h1>
      </div>
      <div className="flex space-x-4">
        <NavLink className='text-black' to="/home">Nitin</NavLink>
        <NavLink className='text-black' to="/about">About</NavLink>
        <NavLink className='text-black' to="/services">Services</NavLink>
        <NavLink className='text-black' to="/contact">Contact</NavLink>
        <NavLink className='text-black' to="/appointment">Appointment</NavLink>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-black hover:text-gray-300 ${
        isActive ? 'text-blue-900 font-bold' : ''
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
