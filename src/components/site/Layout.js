import { Fragment, useState } from 'react'
import { HashRouter, Route, Routes, Nav, NavLink, Link} from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'
import PropTypes from 'prop-types';
import { MenuIcon, XIcon, ViewBoardsIcon, PuzzleIcon} from "@heroicons/react/outline";



const elements =  [
  { name: 'Buttons', href: '/elements/buttons', icon: ViewBoardsIcon },
  { name: 'Lists', href: '/elements/lists', icon: ViewBoardsIcon },
]
const components =  [
  { name: 'Header', href: '/components/full-screen/header', icon: PuzzleIcon },
  { name: 'Composer', href: '/components/composer', icon: PuzzleIcon },
  { name: 'Pagers', href: '/components/pagers', icon: PuzzleIcon },
  { name: 'Posts', href: '/components/posts', icon: PuzzleIcon },
  { name: 'Sponsored', href: '/components/sponsored', icon: PuzzleIcon },
]
const examples =  [
  { name: 'News Feed', href: '/examples/full-screen/news-feed', icon: ViewBoardsIcon },
]

DashboardLayout.propTypes = {
  header: PropTypes.object.isRequired,
  main: PropTypes.object.isRequired,
  aside: PropTypes.object,
  sidebar: PropTypes.object,
  headerPosition: PropTypes.string,
  headerOrientation: PropTypes.string,
  headerCollapsed: PropTypes.bool,
  theme: PropTypes.string,
}

DashboardLayout.defaultProps = {
  header: null,
  main: null,
  aside: null,
  sidebar: null,
  headerPosition: 'fixed',
  headerOrientation: 'vertical',
  headerCollapsed: false,
  theme: 'light',
}

export default function DashboardLayout({header, sidebar, main, aside }) {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderNav = props =>  {  
    return (
      <>
        <div className="flex items-center flex-shrink-0 px-4">
          <Link to="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
            <span className="ml-1 mt-2 text-2xl font-medium text-gray-300">Social Media UI</span>
          </Link>
        </div>
        <nav className="flex-1 px-3 mt-5 space-y-1 bg-gray-800">
          <div class="p-3.5">
            <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Elements</h3>                  
            <ul className="mt-5 space-y-6">
              {elements.map((item) => (
                <li key={item.name} className="flow-root">
                  <NavLink
                    exact
                    to={item.href}
                    className={({ isActive }) => (isActive ? 'bg-white' : 'hover:bg-gray-600') + ' flex itemq s-center p-3 -m-3 text-base font-medium text-gray-400 rounded-md'}
                  >
                    <item.icon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                    <span className="ml-4">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div class="p-3.5">
            <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Components</h3>
            <ul className="mt-5 space-y-6">
              {components.map((item) => (
                <li key={item.name} className="flow-root">
                  <NavLink
                    exact
                    to={item.href}
                    className={({ isActive }) => (isActive ? 'bg-white' : 'hover:bg-gray-600') + ' flex itemq s-center p-3 -m-3 text-base font-medium text-gray-400 rounded-md'}
                  >
                    <item.icon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                    <span className="ml-4">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div class="p-3.5">
            <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Examples</h3>
            <ul className="mt-5 space-y-6">
              {examples.map((item) => (
                <li key={item.name} className="flow-root">
                  <NavLink
                    exact
                    to={item.href}
                    className={({ isActive }) => (isActive ? 'bg-white' : 'hover:bg-gray-600') + ' flex itemq s-center p-3 -m-3 text-base font-medium text-gray-400 rounded-md'}
                  >
                    <item.icon className="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                    <span className="ml-4">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </>
    )
  }

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    {renderNav()}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              {renderNav()}
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                {main}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
