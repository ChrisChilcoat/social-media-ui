import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class GlobalNavigation extends Component {
  render() {
    return (
      <header className="z-10 w-screen bg-gradient-to-l from-blue-600 to-black">
        <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex items-center justify-between w-full py-6 border-b border-red-800 lg:border-none">
            <div className="flex items-center">
              <a href="#" className="flex">
                <span class="text-white font-extrabold uppercase flex-1 ml-2 text-2xl sm:text-3xl">
                  <span class="text-blue-500">Social</span>
                  <span class="opacity-80"> Media</span>
                  <span class="opacity-80 font-thin"> UI</span>
                </span>
              </a>
              <div className="hidden ml-10 space-x-8 lg:block">
                <NavLink to='/earn' className='text-base font-medium text-white hover:text-indigo-50' activeClassName='text-indigo-50' exact>Components</NavLink>
              </div>
            </div>
            <div className="flex ml-10 align-middle">
     
            </div>
          </div>
          <div className="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
            <NavLink to='/earn' className='text-base font-medium text-white hover:text-indigo-50' activeClassName='text-indigo-50' exact>Earn</NavLink>
            <NavLink to='/use' className='text-base font-medium text-white hover:text-indigo-50' activeClassName='text-indigo-50'>Use</NavLink>
            <NavLink to='/vote' className='text-base font-medium text-white hover:text-indigo-50' activeClassName="text-indigo-50">Vote</NavLink>
            <NavLink to='/buy' className='text-base font-medium text-white hover:text-indigo-50' activeClassName="text-indigo-50">Buy</NavLink>
          </div>
        </nav>
      </header>
    )
  }
}

export default GlobalNavigation;
