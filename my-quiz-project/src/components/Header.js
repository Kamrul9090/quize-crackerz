import React, { useState } from 'react';
import { AcademicCapIcon, Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <nav className='flex items-center md:justify-between md:w-11/12 h-48 md:h-20 md:mx-auto font-bold shadow-lg shadow-gray-500 px-3 rounded-md bg-slate-200'>
                <div className='flex absolute top-7 right-28 md:static' onClick={() => setOpen(!open)}>
                    <div className='flex'>
                        {
                            open ? <XMarkIcon className='md:hidden h-10 w-10 text-blue-900'></XMarkIcon> : <Bars4Icon className='md:hidden h-10 w-10 text-blue-900'></Bars4Icon>
                        }
                        <AcademicCapIcon className="h-10 w-10 text-blue-900"></AcademicCapIcon>
                    </div>
                    <h1 className='text-4xl text-blue-900 font-mono '>QUIZMASTERS</h1>
                </div>
                <ul className={`space-x-10 font-serif uppercase absolute right-20 md:static ${open ? 'top-20' : 'top-[-120px]'}`}>
                    <NavLink to="/home" className={({ isActive }) => isActive ? 'text-blue-700 bg-slate-100 p-2 rounded-md'
                        : null}>Home</NavLink>
                    <NavLink to="/statistics" className={({ isActive }) => isActive ? 'text-blue-700 bg-slate-100 p-2 rounded-md'
                        : null}>Statistics</NavLink>
                    <NavLink to="/blogs" className={({ isActive }) => isActive ? 'text-blue-700 bg-slate-100 p-2 rounded-md'
                        : null}>Blogs</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;