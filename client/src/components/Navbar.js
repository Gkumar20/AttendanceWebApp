import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isnavOpen, setIsnavOpen] = useState('hidden');

  return (
    <nav className="bg-gray-100 border border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center flex-col">
          <img src="logo.jpg" alt="Logo" className="h-10 mr-3 rounded-md" />
        </Link>
        <div>
          <button onClick={()=>isnavOpen==='hidden'?setIsnavOpen('block'):setIsnavOpen('hidden')} data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <div className={`items-center justify-between ${isnavOpen} w-full md:flex md:w-auto md:order-1`} id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link to="/home" className="block py-2 pl-3 pr-4 hover:text-white text-black  hover:bg-blue-700 rounded">Home</Link>
              </li>
              <li>
                <Link to="/admin" className="block py-2 pl-3 pr-4 hover:text-white text-black  hover:bg-blue-700 rounded">Admin</Link>
              </li>
              <li>
                <Link to="/about" className="block py-2 pl-3 pr-4 hover:text-white text-black  hover:bg-blue-700 rounded">About</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center md:order-2 relative">
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-300 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="/profile.jpg"
              alt="user"
              onClick={() => setIsOpen(prev => !prev)}
            />
          </button>
          {isOpen && (
            <div className="z-50 my-4 text-base list-none absolute bg-white divide-y divide-gray-100 rounded-lg shadow-lg right-5 top-5">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900">Ganesh Kumar</span>
                <span className="block text-sm text-gray-500 truncate">Kumar@bvp.com</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                </li>
              </ul>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
