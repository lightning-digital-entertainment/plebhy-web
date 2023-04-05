import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function LibraryRoot() {
  return (
    <div className="w-full sm:max-w-lg">
      <div className="flex justify-evenly bg-zinc-800 my-2 py-2 px-4 rounded-xl sm:max-w-lg">
        <NavLink to="/library/gif" className={({ isActive }) => (isActive ? ' text-accent hover:text-zinc-500' : 'hover:text-zinc-500')}>
          GIFS
        </NavLink>
        <NavLink to="/library/sticker" className={({ isActive }) => (isActive ? ' text-accent hover:text-zinc-500' : 'hover:text-zinc-500')}>
          STICKER
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default LibraryRoot;
