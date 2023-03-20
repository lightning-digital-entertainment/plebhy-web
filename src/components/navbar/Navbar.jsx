import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="flex w-full flex-col border-b-2 border-slate-500 font-montserrat justify-center">
            <h1 className="text-white text-7xl mx-2 my-2 font-black text-center">
                PLEBHY
            </h1>
            <ul className="flex flex-row m-2 justify-center">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "mx-4 text-lg text-slate-400 hover:text-slate-500"
                            : "mx-4 text-lg hover:text-slate-500"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/get-started"
                    className={({ isActive }) =>
                        isActive
                            ? "mx-4 text-lg text-slate-400 hover:text-slate-500"
                            : "mx-4 text-lg hover:text-slate-500"
                    }
                >
                    Get Started
                </NavLink>
            </ul>
        </div>
    );
}

export default Navbar;
