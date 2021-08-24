import React, { useState } from 'react'
import ReactTooltip from "react-tooltip";
import { 
  HomeIcon,
  PuzzleIcon,
  MenuIcon,
  VideoCameraIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  ViewGridIcon,
  ChatAltIcon,
  BellIcon,
  ChevronDownIcon
 } from '@heroicons/react/solid'

const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
  { name: 'Home', href: '#', notifications: null, icon: HomeIcon, current: true },
  { name: 'Watch', href: '#', notifications: null, icon: VideoCameraIcon, current: false },
  { name: 'Marketplace', href: '#', notifications: 2, icon: ShoppingBagIcon, current: false },
  { name: 'Groups', href: '#', notifications: 4, icon: UserGroupIcon, current: false },
  { name: 'Gaming', href: '#', notifications: null, icon: PuzzleIcon, current: false },
  { name: 'Show More', icon: MenuIcon, current: false }
]

const notifications = [
  { name: 'Menu', notifications: null, icon: ViewGridIcon },
  { name: 'Messages', notifications: 2, icon: ChatAltIcon },
  { name: 'Notifications', notifications: 2, icon: BellIcon },
  { name: 'Account', notifications: null, icon: ChevronDownIcon },
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
    <header className="relative z-40 bg-white shadow-sm" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="px-3 mx-auto max-w-screen-2xl">
        <div className="flex items-center justify-between py-1">
          <div className="flex justify-start md:w-3/12">
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
              <ul className="grid gap-0 -mb-1 lg:gap-2 lg:px-2 grid-col-1 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5">                
                {navigation.map((item, index) => (
                  <li
                    className={
                      ((index <= 3) ? 'hidden md:flex ' : '') +
                      ((index === 4) ? 'hidden lg:flex ' : '') +
                      ((index === 5) ? 'flex lg:hidden ' : '')}
                  >
                    <a
                      key={item.name}
                      id={item.name}
                      href={item.href}
                      onFocus={handleFocus} 
                      className={
                        (item.current ? 'border-b-4 border-blue-600 ' : 'rounded-md hover:bg-gray-200 mb-1') +
                        " relative sm:flex-1 w-15 ml-2 sm:w-full sm:ml-0 items-center px-2 py-1.5 md:px-4 md:py-3 text-sm font-medium text-gray-900 group focus:outline-none focus:ring-2 focus:ring-blue-600 ring-inset focus:ring-opacity-60"}
                      aria-current={item.current ? 'page' : undefined}
                      aria-label={item.name}
                      data-tip 
                      data-for={item.name}
                    >
                      <item.icon
                        className={
                          (item.current ? 'text-blue-500' : 'text-gray-600') + 
                          " flex-shrink-0 w-7 h-7 m-auto"}
                        aria-hidden="true"
                        fill={item.current || (index === (navigation.length - 1)) ? 'currentColor' : 'transparent'}
                        stroke={item.current || (index === (navigation.length - 1)) ? 'transparent' : 'currentColor'}
                      />
                      <span aria-hidden="true" className="absolute opacity-0">{item.name}</span>
                      {item.notifications && <span className="absolute top-0.5 -mt-0.5 ml-1 left-1/2 block py-0 px-1.5 rounded-full ring-white bg-red-500 text-white text-sm">{item.notifications}</span>}
                      <ReactTooltip id={item.name} arrowColor="transparent" delayShow={delay} place="bottom" effect="solid" aria-hidden="true">{item.name}</ReactTooltip>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div aria-label="Account Controls and Settings" role="navigation" className="flex items-center justify-end w-4/12 md:w-3/12">
            <button aria-label={user.name +"'s Profile"} className="relative hidden p-1 m-1 text-base font-semibold text-black align-middle bg-white rounded-full xl:flex hover:bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
              <img aria-hidden="true" className="inline-flex align-middle bg-gray-300 rounded-full w-7 h-7 hover:opacity-90 aligddle" src={user.imageUrl} alt={user.name}></img>
              <span aria-hidden="true" className="inline-flex h-5 mx-2 my-1 text-sm align-top">
              {user.name.split(" ", 1).map((val) => (
                <div>{val}</div>
              ))}
              </span>
            </button>        
            {notifications.map((item, index) => (
              <button aria-label={item.name + ' , ' + item.notifications + ' unread'} data-tip data-for={item.name} className="relative flex-shrink-0 block p-2.5 m-1 text-gray-900 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
                <item.icon
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                />
                {item.notifications && <span class="absolute -top-1.5 -right-1.5 block py-0 px-1.5 rounded-full ring-white bg-red-500 text-white text-sm">2</span>}
                <ReactTooltip id={item.name} arrowColor="transparent" delayShow={delay} place="bottom" effect="solid" aria-hidden="true">{item.name}</ReactTooltip>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}