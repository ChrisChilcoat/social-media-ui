import React, { useState } from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { 
  HomeIcon,
  PuzzleIcon,
  VideoCameraIcon,
  ShoppingBagIcon,
  UserGroupIcon,
 } from '@heroicons/react/solid'

const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'Watch', href: '#', icon: VideoCameraIcon, current: false },
  { name: 'Marketplace', href: '#', icon: ShoppingBagIcon, current: false },
  { name: 'Groups', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Gaming', href: '#', icon: PuzzleIcon, current: false },
]

export default function FbListHorizontalIcons() {
   
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
    <header className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="px-3 mx-auto max-w-screen-2xl">
        <div className="flex-1">
          <div className="max-w-2xl m-auto">
            <ul className="grid gap-0 -mb-1 lg:gap-2 lg:px-2 grid-col-1 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5">                
              {navigation.map((item, index) => (
                <li className="flex">
                  <a
                    key={item.name}
                    id={item.name}
                    href={item.href}
                    onFocus={handleFocus} 
                    className={
                      (item.current ? 'border-b-4 border-blue-600' : 'rounded-md hover:bg-gray-200 mb-1') +
                      " relative sm:flex-1 w-15 ml-2 sm:w-full sm:ml-0 items-center px-2 py-1.5 md:px-4 md:py-3 text-sm font-medium text-gray-900 group focus:outline-none focus:ring-2 focus:ring-blue-600 ring-inset focus:ring-opacity-60"}
                    aria-current={item.current ? 'page' : undefined}
                    aria-label={item.name}
                    data-tip 
                    data-for={item.name}
                  >
                    <item.icon
                      className={(item.current ? 'text-blue-500' : 'text-gray-600') + " flex-shrink-0 w-7 h-7 m-auto"}
                      aria-hidden="true"
                      fill={item.current ? 'currentColor' : 'transparent'}
                      stroke={item.current ? 'transparent' : 'currentColor'}
                    />
                    <span aria-hidden="true" className="absolute opacity-0">{item.name}</span>
                    <ReactTooltip id={item.name} arrowColor="transparent" delayShow={delay} place="bottom" effect="solid" aria-hidden="true">{item.name}</ReactTooltip>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}