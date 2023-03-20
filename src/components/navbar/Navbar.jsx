import React from 'react'

function Navbar() {
  return (
    <div className="flex w-full flex-col border-b-2 border-slate-500 font-montserrat justify-center">
        <h1 className="text-white text-7xl mx-2 my-2 font-bold text-center">PLEBHY</h1>
        <ul className="flex flex-row m-2 justify-center">
            <li className="mx-4 text-lg hover:text-slate-500">Home</li>
            <li className="mx-4 text-lg hover:text-slate-500">Create</li>
            <li className="mx-4 text-lg hover:text-slate-500">Library</li>
        </ul>
    </div>
  )
}

export default Navbar