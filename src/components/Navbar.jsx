import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-950 border-b border-blue-900 py-4 fixed top-0 left-0 z-20">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4">
       
        <h1 className="text-xl sm:text-2xl font-bold text-blue-400 ">
          GYM CORE
        </h1>
        <ul className="flex gap-6 text-lg sm:text-base text-slate-300">
          <li><i className="fa-solid fa-dumbbell text-4xl"></i></li>
          
        </ul>
      </div>
    </nav>
  );
}
