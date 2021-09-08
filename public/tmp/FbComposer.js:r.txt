import React from "react";

import {
  ChipIcon
} from '@heroicons/react/solid'

const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export default function FbComposer() {
  return (
    <section aria-label="Create a post" class="max-w-2xl mx-auto mt-5 mb-5 bg-white border rounded-lg shadow-sm eat-shit-tailwind-css border-gray-150">
      <h3 class="sr-only">Create a post</h3>
      <div class="flex items-center justify-between w-full px-4 py-3 space-x-2">
        <button role="link" tabindex="0" class="flex-shrink-0 block rounded-full hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
          <img class="w-10 h-10 bg-gray-300 rounded-full hover:opacity-90" src={user.imageUrl} alt={user.name}></img>
        </button>
        <div role="button" tabindex="0" class="flex-1 px-4 py-2 text-left text-gray-500 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
          <div>What's on your mind, Chris?</div>
        </div>
      </div>
      <div class="flex mx-4 bg-transparent border-t border-black-400">
        <div role="button" tabindex="0" class="flex-1 py-2 my-2 font-medium text-gray-500 rounded-md text-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
          <div class="flex justify-center space-x-2">
            <ChipIcon className="w-6 h-6 text-yellow-500" aria-hidden="true" fill="currentColor" />
            Live Video
          </div>
        </div>
        <div role="button" tabindex="0" class="flex-1 py-2 my-2 font-medium text-gray-500 rounded-md text-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
          <div class="flex justify-center space-x-2">
            <ChipIcon className="w-6 h-6 text-red-500" aria-hidden="true" fill="currentColor" />
            Photo/Video
          </div>
        </div>
        <div role="button" tabindex="0" class="flex-1 py-2 my-2 font-medium text-gray-500 rounded-md text-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
          <div class="flex justify-center space-x-2">
            <ChipIcon className="w-6 h-6 text-green-500" aria-hidden="true" fill="currentColor" />
            Feeling/Activity
          </div>
        </div>
      </div>
    </section>
  )
}

