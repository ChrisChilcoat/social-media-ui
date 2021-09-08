import React from "react";

import {
  PencilIcon
} from '@heroicons/react/solid'

export default function FbButtonPrimary() {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-900 bg-gray-200 border border-transparent rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
      >
        <PencilIcon className="w-5 h-5 mr-1"/> 
        Edit Profile
      </button>
    </>
  )
}

