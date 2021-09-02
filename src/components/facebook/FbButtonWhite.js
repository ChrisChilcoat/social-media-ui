import React from "react";

import {
  ChatIcon
} from '@heroicons/react/solid'

export default function FbButtonWhite() {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-900 bg-white border border-transparent rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
      >
        <ChatIcon className="w-5 h-5 mr-1"/> 
        Comment
      </button>
    </>
  )
}

