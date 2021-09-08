/* This example requires Tailwind CSS v2.0+ */

import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import { DotsHorizontalIcon } from '@heroicons/react/solid'
import { XIcon, ExclamationIcon, InformationCircleIcon } from '@heroicons/react/outline'

const menu = [
  { name: 'Hide Ad', subtext: 'Never see this ad again.', icon: XIcon },
  { name: 'Report Ad', subtext: 'Tell us about a problem with this ad.', icon: ExclamationIcon},
  { name: 'Why am I seeing this?', href: '#', icon: InformationCircleIcon},
  // More menu items...
]

export default function FbButtonCircleDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex-shrink-0 p-1.5 m-1 text-gray-500 rounded-full hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60 bg-white  top-1.5 right-1.5 shadow border-gray-250 border">
          <DotsHorizontalIcon
            className="w-6 h-6"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute bg-white w-96 rounded-md shadow p-1 mt-3.5 right-0">
          <span className="absolute w-3 h-3 transform rotate-45 bg-white -top-1.5 right-4"></span>
          <div>
            {menu.map((item) => ( 
              <Menu.Item>
                <a
                  href='/'
                  className="relative flex px-4 py-2 text-sm font-semibold text-gray-700 rounded-md items-top hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-inset focus:ring-opacity-60"
                >
                  <item.icon
                    className="w-5 h-5 mr-3"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="block">{item.name}</div>
                    {item.subtext ? <div className="block text-xs font-normal text-gray-500">{item.subtext}</div> : ''}
                  </div>
                </a>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
