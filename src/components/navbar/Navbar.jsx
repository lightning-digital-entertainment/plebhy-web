import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col border-b-2 border-zinc-500 font-montserrat justify-center">
      <button
        type="button"
        onClick={() => {
          navigate('/');
        }}
      >
        <h1 className="text-white text-7xl mx-2 my-2 font-black text-center hover:text-zinc-500 font-bungee">PLEBHY</h1>
      </button>
      <ul className="flex flex-row m-2 justify-center">
        <NavLink to="/get-started" className={({ isActive }) => (isActive ? 'mx-4 text-lg text-accent hover:text-zinc-500' : 'mx-4 text-lg hover:text-zinc-500')}>
          Get Started
        </NavLink>
        <NavLink to="/library/gif" className={({ isActive }) => (isActive ? 'mx-4 text-lg text-accent hover:text-zinc-500' : 'mx-4 text-lg hover:text-zinc-500')}>
          Library
        </NavLink>
        <NavLink to="/api" className={({ isActive }) => (isActive ? 'mx-4 text-lg text-accent hover:text-zinc-500' : 'mx-4 text-lg hover:text-zinc-500')}>
          API
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
