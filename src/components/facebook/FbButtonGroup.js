import React from 'react';

import { ThumbUpIcon, ChatIcon, ShareIcon } from '@heroicons/react/solid'

export default function FbButtonGroup() {
  return (
    <>
      <button className="flex-1 w-32 py-2 my-2 font-medium text-gray-500 rounded-md text-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
        <div className="flex justify-center space-x-2">
          <ThumbUpIcon className="w-5 h-5" />
          <span>Like</span>
        </div>
      </button>
      <button className="flex-1 w-32 py-2 my-2 font-medium text-gray-500 rounded-md text-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
        <div className="flex justify-center space-x-2">
          <ChatIcon className="w-5 h-5" />
          <span>Comment</span>
        </div>
      </button>
      <button className="flex-1 w-32 py-2 my-2 font-medium text-gray-500 rounded-md text-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
        <div className="flex justify-center space-x-2">
          <ShareIcon className="w-5 h-5" />
          <span>Share</span>
        </div>
      </button>
    </>
  )
}

