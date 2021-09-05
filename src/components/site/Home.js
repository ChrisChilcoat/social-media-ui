import React from "react";
import { NavLink } from 'react-router-dom';

export default function SiteHeader() {
  return (
    <div className="flex flex-wrap content-center h-screen col-span-12">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-blue-900 to-green-400">
          <span className="block xl:inline">Social Media</span>
          <span className="block xl:inline"> UI</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          A reasource for learning to craft beautiful interface components.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-full">
            <NavLink
              to='/components'
              className="flex items-center justify-center w-full px-8 py-3 font-medium text-white bg-blue-900 border border-transparent rounded-full shadow hover:opacity-90 md:py-4 md:text-lg md:px-10 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60"
            >
              View Components
            </NavLink>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href='https://github.com/ChrisChilcoat/social-media-ui' 
              className="flex items-center justify-center w-full px-8 py-3 font-medium text-blue-900 bg-white border-2 border-transparent border-blue-900 rounded-full hover:opacity-80 md:py-4 md:text-lg md:px-10 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60"
            >
              Download on GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  )
}