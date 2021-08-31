import React from "react";
import { NavLink } from 'react-router-dom';

export default function SiteHeader() {
  return (
    <header className="w-screen bg-gradient-to-l from-blue-900 to-green-400">
      <nav className="max-w-screen-xl mx-auto " aria-label="Top">
        <div className="flex items-center justify-between w-full py-3 border-b border-green-800 lg:border-none">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="flex-1 ml-2 text-2xl font-extrabold text-white uppercase sm:text-3xl">
                <span className="">Social Media</span> <span className="opacity-80">UI</span>
              </span>
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              <NavLink to='/components' className='text-base font-medium text-white hover:text-indigo-50' activeClassName='text-indigo-50'>Components</NavLink>
              <NavLink to='/documentation' className='text-base font-medium text-white hover:text-indigo-50' activeClassName='text-indigo-50' exact>Documentation</NavLink>
            </div>
          </div>
          <div className="flex ml-10 align-middle">
          </div>
        </div>
        <div className="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
          <NavLink to='/components' className='text-base font-medium text-white hover:text-indigo-50' activeClassName='text-indigo-50'>Components</NavLink>
          <NavLink to='/documentation' className='text-base font-medium text-white hover:text-indigo-50' activeClassName='text-indigo-50' exact>Documentation</NavLink>
        </div>
      </nav>
    </header>
  )
}
