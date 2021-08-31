import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

import { ChevronRightIcon } from '@heroicons/react/solid';

export default function Breadcrumbs(props) {
  return (
    <div class="flex flex-col mb-12 mt-16">
      <h1 class="order-1 text-gray-900 text-3xl font-extrabold tracking-tight mt-2">{props.headline}</h1>
      <nav aria-label="Breadcrumb" class="flex items-center text-gray-500 text-sm font-medium space-x-2 whitespace-nowrap">
        <Link to={'/components#'+props.parent} className='capitalize hover:text-gray-900'>{props.parent}</Link>
        <ChevronRightIcon class="flex-none text-gray-300 h-5 w-5" />
        <Link to={'/components#'+props.parent+'-'+props.child} className='capitalize hover:text-gray-900'>{props.child}</Link>
      </nav>
    </div>
  )
}