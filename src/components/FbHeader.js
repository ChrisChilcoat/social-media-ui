import React, { useState, useEffect } from 'react'
import ReactTooltip from "react-tooltip";
import { 
  HomeIcon,
  PuzzleIcon,
  MenuIcon,
  VideoCameraIcon,
  ShoppingBagIcon,
  UserGroupIcon } from '@heroicons/react/solid'

const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
  { name: 'Home', href: '#', notifications: null, icon: HomeIcon, current: true},
  { name: 'Watch', href: '#', notifications: null, icon: VideoCameraIcon, current: false },
  { name: 'Marketplace', href: '#', notifications: 2, icon: ShoppingBagIcon, current: false },
  { name: 'Groups', href: '#', notifications: 4, icon: UserGroupIcon, current: false },
  { name: 'Gaming', href: '#', notifications: null, icon: PuzzleIcon, current: false },
  /*{ name: 'Show More', href: '#', icon: MenuIcon, current: false }*/
]

const userNavigation = [
  { name: 'Menu', href: '#', icon: VideoCameraIcon, current: false },
  { name: 'Messages', href: '#', icon: ShoppingBagIcon, current: false },
  { name: 'Notifications', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Account', href: '#', icon: PuzzleIcon, current: false },
  /*{ name: 'Show More', href: '#', icon: MenuIcon, current: false }*/
]

export default function FbHeader() {
   
  const initalDelay = 500 // Keeps tooltips from becoming annaying.
  const secondaryDelay = 0 // Speed up tooltips once they are open.

  const [delay, setDelay] = useState(null)
  const [timeoutHandler, setTimeoutHandler] = useState(null)

  const reset = () => {
    clearTimeout(timeoutHandler)
    setDelay(initalDelay)
  }
  const handleMouseEnter = () => {  
    reset()
    setTimeoutHandler(
      setTimeout(() => { 
        setDelay(secondaryDelay)
      }, initalDelay)
    )
  }
  const handleMouseLeave = () => {
    reset()
  }
  const handleFocus = () => {
    setDelay(secondaryDelay) 
  }

  return (
    <header className="relative z-40 bg-white shadow-sm">
      <div className="px-3 mx-auto max-w-screen-2xl">
        <div className="flex items-center justify-between py-1">
          <div className="flex justify-start sm:w-3/12">
            <button className="m-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
              <span className="sr-only">Facebook</span>
              <span className="block w-10 h-10 align-middle rounded-full bg-gradient-to-b from-blue-400 to-blue-600"></span>
            </button>
            <button aria-label="Search" className="relative block p-3 m-1 text-gray-900 bg-gray-200 rounded-full xl:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <input type="text" className="hidden px-3 py-1 my-1 ml-2 text-sm font-light text-left text-gray-700 placeholder-gray-500 align-middle bg-gray-100 rounded-full shadow-inner xl:flex w-60 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 text-md focus:ring-opacity-60" placeholder="Search..."></input>
          </div>
          <div className="flex-1">
            <div className="max-w-2xl m-auto">
              <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="grid gap-0 -mb-1 lg:gap-2 lg:px-2 grid-col-1 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5">                
              
              {navigation.map((item, index) => (
                <li>
                  <a
                    key={item.name}
                    id={item.name}
                    href={item.href}
                    onFocus={handleFocus} 
                    className={(item.current ? 'border-b-4 border-blue-600 rounded-' : 'rounded-md hover:bg-gray-200') + " relative flex items-center px-4 py-3 text-sm font-medium text-gray-900 group focus:outline-none focus:ring-2 focus:ring-blue-600 ring-inset focus:ring-opacity-60"}


                    ///className="relative hidden -my-2 text-blue-600 bg-white border-b-4 border-blue-600 sm:flex focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60"

                    aria-current={item.current ? 'page' : undefined}
                    data-tip data-for={item.name}
                  >
                    <item.icon
                      className={(item.current ? 'text-blue-500' : 'text-gray-600') + " flex-shrink-0 w-7 h-7 m-auto"}
                      aria-hidden="true"
                      fill={item.current ? 'currentColor' : 'transparent'}
                      stroke={item.current ? 'transparent' : 'currentColor'}
                    />
                    <span className="absolute opacity-0">{item.name}</span>
                    {item.notifications && <span className="absolute top-0.5 -mt-0.5 ml-1 left-1/2 block py-0 px-1.5 rounded-full ring-white bg-red-500 text-white text-sm">{item.notifications}</span>}
                    <ReactTooltip id={item.name} arrowColor="transparent" delayShow={delay} place="bottom" effect="solid" aria-hidden="true">{item.name}</ReactTooltip>
                  </a>
                </li>
              ))}
                
                
                {/*
                <a href="#" aria-label="" class="hidden sm:flex relative -my-2 text-blue-600 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60 border-b-4 border-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 m-auto" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>                
                </a>
                <a href="#" aria-label="" class="hidden sm:flex relative -my-1 py-3 text-gray-600 bg-white rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>                
                </a>
                <a href="#" aria-label="" class="hidden sm:flex relative -my-1 py-3 text-gray-600 bg-white rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>                
                </a>
                <a href="#" aria-label="" class="hidden sm:flex relative -my-1 py-3 text-gray-600 bg-white rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>                
                </a>
                <a href="#" aria-label="" class="hidden lg:flex relative -my-1 py-3 text-gray-600 bg-white rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>                
                </a>
                <a href="#" aria-label="" class="flex w-12 sm:w-full lg:hidden relative -my-1 py-3 text-gray-600 bg-white rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>              
                </a>
                */}

              </ul>
            </div>
          </div>
          <div aria-label="Account Controls and Settings" role="navigation" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex items-center justify-end w-4/12 md:w-3/12">
            <button aria-label={user.name +"'s Profile"} className="relative hidden p-1 m-1 text-base font-semibold text-black align-middle bg-white rounded-full xl:flex hover:bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
              <img aria-hidden="true" className="inline-flex align-middle bg-gray-300 rounded-full w-7 h-7 hover:opacity-90 aligddle" src={user.imageUrl} alt={user.name}></img>
              <span aria-hidden="true" className="inline-flex h-5 mx-2 my-1 text-sm align-top">
              {user.name.split(" ", 1).map((val) => (
                <div>{val}</div>
              ))}
              </span>
            </button>
            <button aria-label="menu" data-tip data-for="menu" className="relative flex-shrink-0 block p-2.5 m-1 text-gray-900 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span class="absolute -top-1.5 -right-1.5 block py-0 px-1.5 rounded-full ring-white bg-red-500 text-white text-sm">5</span>
              <ReactTooltip id="menu" arrowColor="transparent" delayShow={delay} place="bottom" effect="solid" aria-hidden="true">Menu</ReactTooltip>
            </button>
            <button aria-label="Messages, 2 unread" data-tip data-for="messages" className="relative flex-shrink-0 block p-2.5 m-1 text-gray-900 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
              </svg>
              <span class="absolute -top-1.5 -right-1.5 block py-0 px-1.5 rounded-full ring-white bg-red-500 text-white text-sm">2</span>
              <ReactTooltip id="messages" arrowColor="transparent" delayShow={delay} place="bottom" effect="solid" aria-hidden="true">Messages</ReactTooltip>
            </button>
            <button aria-label="Notifications, 2 unread" data-tip data-for="notifications" className="relative flex-shrink-0 block p-2.5 m-1 text-gray-900 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <ReactTooltip id="notifications" arrowColor="transparent" delayShow={delay} place="bottom" effect="solid" aria-hidden="true">Notifications</ReactTooltip>
            </button>
            <button aria-label="account" data-for="account" className="relative flex-shrink-0 block p-2.5 m-1 text-gray-900 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              <ReactTooltip id="account" arrowColor="transparent" delayShow={delay} place="bottom" effect="solid" aria-hidden="true">Account</ReactTooltip>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
