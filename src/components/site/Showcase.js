import React from "react";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { CodeIcon} from '@heroicons/react/solid';

export default function Showcase(props) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg border-1 mb-14">
      <div className="flex items-center px-2 py-2 space-x-2 text-sm font-medium text-gray-700 border-b border-gray-200 whitespace-nowrap border-1">
        <div className="flex-1 ml-2">{props.title}</div>
        <button aria-label="View Code Example" className="inline-flex items-center px-2.5 py-2 text-gray-500 hover:text-gray-700 font-medium bg-white border border-transparent rounded-md hover:bg-gray-100">
          <CodeIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="bg-gray-100">
        <div className="">
          <div className={props.class}>
            {props.component}
          </div>
        </div>
      </div>
      <div className="">
        <SyntaxHighlighter language="javascript" style={a11yDark} showLineNumbers className="">
           Insert compoent code here...
        </SyntaxHighlighter>
      </div>
    </div>
  )
}