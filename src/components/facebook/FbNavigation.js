import React from 'react';
import {
  UsersIcon,
  ChevronDownIcon,
  VideoCameraIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  PuzzleIcon
} from '@heroicons/react/solid'

const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
  { name: 'Friends', href: '#', icon: UsersIcon, current: false },
  { name: 'Watch', href: '#', icon: VideoCameraIcon, current: false },
  { name: 'Marketplace', href: '#', icon: ShoppingBagIcon, current: false },
  { name: 'Groups', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Gaming', href: '#', icon: PuzzleIcon, current: false },
  { name: 'Show More', href: '#', icon: ChevronDownIcon, current: false },
]

export default function FbNavigation() {
  return (
    <ul className="py-2 space-y-1">               
      <li>
        <a href="/" className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 rounded-md group hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 ring-inset focus:ring-opacity-60">
          <img className="flex-shrink-0 mr-3 -ml-1 rounded-full group-hover:text-gray-500 h-9 w-9" src={user.imageUrl} alt={user.name}></img>
          <span className="">{user.name}</span>
        </a>
      </li> 
      {navigation.map((item) => (
        <li>
          <a
            key={item.name}
            href={item.href}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 rounded-md group hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 ring-inset focus:ring-opacity-60"
            aria-current={item.current ? 'page' : undefined}
          >
            <item.icon
              className="flex-shrink-0 w-8 h-8 mr-3 text-blue-500"
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-gray-800 truncate">{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}