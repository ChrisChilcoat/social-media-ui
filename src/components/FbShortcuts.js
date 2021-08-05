import React from 'react';

import {
  FilmIcon,
  BeakerIcon,
  BookOpenIcon,
  ChipIcon,
  FlagIcon,
  AcademicCapIcon,
  GlobeIcon,
  MusicNoteIcon,
  ChevronDownIcon
} from '@heroicons/react/solid'

const shortcuts = [
  { name: 'Movies', href: '#', icon: FilmIcon, current: false },
  { name: 'Science', href: '#', icon: BeakerIcon, current: false  },
  { name: 'Reading', href: '#', icon: BookOpenIcon, current: false  },
  { name: 'Computers', href: '#', icon: ChipIcon, current: false  },
  { name: 'Academics', href: '#', icon: AcademicCapIcon, current: false  },
  { name: 'News', href: '#', icon: GlobeIcon, current: false  },
  { name: 'Music', href: '#', icon: MusicNoteIcon, current: false  },
  { name: 'Campus', href: '#', icon: FlagIcon, current: false },
  { name: 'Show More', href: '#', icon: ChevronDownIcon, current: false },
]

function FbShortcuts() {
  return (
    <div className="group" aria-labelledby="shortcuts-heading">
      <div className="flex items-center group">
        <h2 id="shortcuts-headline" className="flex-1 flex-shrink px-2 font-semibold tracking-wider text-gray-500 text-md ">
          Your Shortcuts
        </h2>
        <div className="flex-0">
          <button aria-label="Chris Chilcoat's Timeline" role="link" tabindex="0" className="opacity-0 group-hover:opacity-100 flex-shrink-0 inline-block p-1.5 m-1 text-gray-500 rounded-full hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
        </div>
      </div>
      <ul className="mt-3 space-y-2" aria-labelledby="communities-headline">
        {shortcuts.map((item) => (
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
    </div>
  )
}

export default FbShortcuts;