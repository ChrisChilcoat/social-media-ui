import React from "react";
import "./FbComposer.css";

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

const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export default function FbComposer() {
  return (
    <section aria-label="Create a post" class="fb-composer">
      <h3>Create a post</h3>
      <div class="flex items-center justify-between py-3 px-4 space-x-2">
        
        <button role="link" tabindex="0" class="rounded-full flex-shrink-0 hover:bg-black block focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
          <img class="w-10 h-10 bg-gray-300 hover:opacity-90 rounded-full" src={user.imageUrl} alt={user.name}></img>
        </button>
        
        <div role="button" tabindex="0" class="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 flex-1 text-gray-500 text-left focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
          What's on your mind, Chris?
        </div>

      </div>
      <div class="flex border-t border-black-400 bg-transparent mx-4">
        <div role="button" tabindex="0" class="flex-1 text-gray-500 my-2 text-md font-medium hover:bg-gray-100 rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
          <div class="flex justify-center space-x-2">
            <ChipIcon className="w-6 h-6 text-yellow-500" aria-hidden="true" fill="currentColor" />
            Live Video
          </div>
        </div>
        <div role="button" tabindex="0" class="flex-1 text-gray-500 my-2 text-md font-medium hover:bg-gray-100 rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
          <div class="flex justify-center space-x-2">
            <ChipIcon className="w-6 h-6 text-red-500" aria-hidden="true" fill="currentColor" />
            Photo/Video
          </div>
        </div>
        <div role="button" tabindex="0" class="flex-1 text-gray-500 my-2 text-md font-medium hover:bg-gray-100 rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
          <div class="flex justify-center space-x-2">
            <ChipIcon className="w-6 h-6 text-green-500" aria-hidden="true" fill="currentColor" />
            Feeling/Activity
          </div>
        </div>
      </div>
    </section>
  )
}

