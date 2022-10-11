import React from 'react';
import { AcademicCapIcon, Bars4Icon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex items-center justify-between md:w-11/12 mx-auto font-bold shadow-lg shadow-gray-500 px-3 rounded-md bg-slate-200 h-20'>

                <div className='flex'>
                    <AcademicCapIcon className="h-10 w-10 text-blue-900"></AcademicCapIcon>
                    <h1 className='text-4xl text-blue-900 font-mono'>QUIZMASTERS</h1>
                </div>
                <div className='space-x-10 font-serif uppercase'>
                    <NavLink to="/home" className={({ isActive }) => isActive ? 'text-blue-700 bg-orange-300 p-2 rounded-md'
                        : null}>Home</NavLink>
                    <NavLink to="/statistics" className={({ isActive }) => isActive ? 'text-blue-700 bg-orange-300 p-2 rounded-md'
                        : null}>Statistics</NavLink>
                    <NavLink to="/blogs" className={({ isActive }) => isActive ? 'text-blue-700 bg-orange-300 p-2 rounded-md'
                        : null}>Blogs</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;