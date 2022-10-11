import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex items-center justify-between w-11/12 mx-auto mt-5 font-bold shadow-lg shadow-gray-500 px-3 rounded-md bg-slate-200 h-20'>
                <div className='flex'>
                    <AcademicCapIcon className="h-10 w-10 text-blue-900"></AcademicCapIcon>
                    <h1 className='text-4xl text-blue-900'>IQ TEST</h1>
                </div>
                <div className='space-x-10'>
                    <NavLink to="/home" className={({ isActive }) => isActive ? 'text-blue-700 bg-slate-400 p-2 rounded-md'
                        : undefined}>Home</NavLink>
                    <NavLink to="/statistics" className={({ isActive }) => isActive ? 'text-blue-600 bg-slate-400 p-2 rounded-md'
                        : undefined}>Statistics</NavLink>
                    <NavLink to="/blogs" className={({ isActive }) => isActive ? 'text-blue-600 bg-slate-400 p-2 rounded-md'
                        : undefined}>Blogs</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;