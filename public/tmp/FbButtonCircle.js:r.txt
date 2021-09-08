import React from "react";

import {
  ChevronRightIcon
} from '@heroicons/react/solid'

export default function FbButtonCircle() {
  return (
    <>
      <button className="items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
        <span className="sr-only">Next</span>
        <ChevronRightIcon  className="w-8 h-8" />
      </button>
    </>
  )
}

