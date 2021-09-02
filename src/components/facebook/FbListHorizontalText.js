import React from 'react';

import {
  UsersIcon,
  ChevronDownIcon,
  VideoCameraIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  PuzzleIcon
} from '@heroicons/react/solid'

const navigation = [
  { name: 'Friends', href: '#', icon: UsersIcon, current: true },
  { name: 'Watch', href: '#', icon: VideoCameraIcon, current: false },
  { name: 'Marketplace', href: '#', icon: ShoppingBagIcon, current: false },
  { name: 'Groups', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Gaming', href: '#', icon: PuzzleIcon, current: false },
  //{ name: 'Show More', href: '#', icon: ChevronDownIcon, current: false },
]

export default function FbListHorizontalText() {
  return (
    <ul className="flex py-2 space-y-1">               
      {navigation.map((item) => (
        <li class={item.current ? 'border-b-4 border-blue-600 text-blue-600' : 'text-gray-600'}>
          <a
            key={item.name}
            href={item.href}
            className="flex items-center px-4 py-2 text-sm font-medium rounded-md group hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 ring-inset focus:ring-opacity-60"
            aria-current={item.current ? 'page' : undefined}
          >
            <span className="text-sm font-medium truncate">{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}