import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

  const navbarLinks = (
    <>
      <li>
        <NavLink to={'/'} className={({ isActive }) => `font-semibold mr-3 ${isActive ? "text-green-500 border border-green-500" : ""}`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/Books'} className={({ isActive }) => `font-semibold mr-3 ${isActive ? "text-green-500 border border-green-500" : ""}`}>Listed Books</NavLink>
      </li>
      <li>
        <NavLink to={'/read-books'} className={({ isActive }) => `font-semibold ${isActive ? "text-green-500 border border-green-500" : ""}`}>Page to</NavLink>
      </li>
    </>
  )


  return (
    <div className='shadow-sm'>
      <div className="navbar bg-base-100  w-11/12 mx-auto">
        <div className="navbar-start flex gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>

            {/* Mobile menu */}
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
              {navbarLinks}
            </ul>

          </div>
          {/* Website Logo */}
          <h2 className="text-xl md:text-2xl font-bold">Book Vibe</h2>
        </div>
        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal px-1">
            {navbarLinks}
          </ul>

        </div>
        <div className="navbar-end gap-2">
          <button className="btn btn-sm md:btn-md bg-[#03C755] text-white border-[#00b544]">Signin</button>
          <button className="btn btn-sm md:btn-md bg-[#1A77F2] text-white border-[#005fd8]">Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;