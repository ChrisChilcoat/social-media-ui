/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'


import {
  ArchiveIcon,
  ArrowCircleRightIcon,
  ChevronDownIcon,
  DuplicateIcon,
  HeartIcon,
  PencilAltIcon,
  TrashIcon,
  UserAddIcon,
} from '@heroicons/react/solid'

const sponsored = [
  {
    name: 'Aventon | Award Winning Ebikes',
    url: 'aventon.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'SAVE 10% With Code: FRESH10​',
    url: 'freshcleantees.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More sponsors...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function FbSponsored() {
  return (
    <section aria-labelledby="sponsored-heading">
      <h2 id="sponsored-heading" className="px-2 font-semibold tracking-wider text-gray-500 text-md">
        Sponsored
      </h2>
      {sponsored.map((user) => (
        <div className="relative group">
          <a href={user.href} className="block bg-transparent rounded-lg group-hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-inset focus:ring-opacity-60">
            <div className="p-2">
              <div className="flow-root">
                <div className="-my-4 divide-y divide-gray-200">
                  <div className="flex items-center py-4 space-x-3">
                    <div className="flex-shrink-0">
                      <img className="flex object-cover w-24 h-16 rounded-lg xl:w-32 xl:h-32" src={user.imageUrl} alt="" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.url}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          
          {/*
          <button aria-label="Chris Chilcoat's Timeline" role="link" tabindex="0" className="flex-shrink-0 opacity-0 group-hover:opacity-100 focus:opacity-100 p-1.5 m-1 text-gray-500 rounded-full hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60 bg-white absolute top-1.5 right-1.5 shadow border-gray-250 border">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
          */}

  


    <Menu as="div" className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 focus:opacity-100 ">
      {({ open }) => (
        <>
          <Menu.Button role="link" tabindex="0" className="flex-shrink-0 p-1.5 m-1 text-gray-500 rounded-full hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60 bg-white absolute top-1.5 right-1.5 shadow border-gray-250 border">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </Menu.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute right-0 z-50 mr-1 origin-top-right bg-white rounded-md shadow-lg mt-14 w-72 ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'group flex items-center px-4 py-2 text-sm'
                      )}
                    >
                      <DuplicateIcon
                        className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      Duplicate
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Support
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      License
                    </a>
                  )}
                </Menu.Item>
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block w-full text-left px-4 py-2 text-sm'
                        )}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>


        </div>
      ))}
    </section>
  )
}

export default FbSponsored;