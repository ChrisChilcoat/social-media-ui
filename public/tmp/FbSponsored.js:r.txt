import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Transition, Popover } from '@headlessui/react'
import { usePopper } from 'react-popper'

import { XIcon, ExclamationIcon, InformationCircleIcon, DotsHorizontalIcon } from '@heroicons/react/outline'

const menu = [
  { name: 'Hide Ad', subtext: 'Never see this ad again.', icon: XIcon },
  { name: 'Report Ad', subtext: 'Tell us about a problem with this ad.', icon: ExclamationIcon},
  { name: 'Why am I seeing this?', href: '#', icon: InformationCircleIcon},
  // More menu items...
]

const sponsored = [
  {
    name: 'Aventon | Award Winning Ebikes',
    url: 'aventon.com',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Aventon | Award Winning Ebikes',
    url: 'aventon.com',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More sponsors...
]

function FbSponsored() {

  const DropdownButton = props => {
 
    const [referenceElement, setReferenceElement] = useState()
    const [popperElement, setPopperElement] = useState()
    const { styles, attributes } = usePopper(referenceElement, popperElement, { 
      placement: 'bottom-end',
      modifiers: [
        {
          name: 'preventOverflow',
          options: {
            altAxis: true,
            padding: { top: 60 }
          },
        },
      ],
    })


    return (
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button 
              ref={setReferenceElement}
              key={props.name}
              aria-label="Edit Advertisement" 
              aria-expanded="false"
              className={`${open ? 'opacity-100 ' : 'opacity-0 '} flex-shrink-0 p-1.5 m-1 text-gray-500 group-hover:opacity-100 focus:opacity-100 rounded-full absolute hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60 bg-white  top-1.5 right-1.5 shadow border-gray-250 border`}
            >
              <DotsHorizontalIcon
                className="w-6 h-6"
                aria-hidden="true"
              />
            </Popover.Button>  
            {ReactDOM.createPortal(
              <Popover.Panel
                key={props.name}
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
              >
                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <div class="relative bg-white w-96 rounded-md shadow p-1 mt-3.5"> 
                  <span className="absolute w-3 h-3 transform rotate-45 bg-white -top-1.5 right-3.5"></span>
                  <div  style={styles.arrow}
                {...attributes.arrow}></div>

                    {menu.map((item) => ( 
                      <a
                        href='/'
                        className="relative flex px-4 py-2 text-sm font-semibold text-gray-700 rounded-md items-top hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-inset focus:ring-opacity-60"
                      >
                        <item.icon
                          className="w-5 h-5 mr-3"
                          aria-hidden="true"
                        />
                        <div>
                          <div className="block">{item.name}</div>
                          {item.subtext ? <div className="block text-xs font-normal text-gray-500">{item.subtext}</div> : ''}
                        </div>
                      </a>
                    ))}
                  </div>
                </Transition>
              </Popover.Panel>,
              document.getElementById('portal')
            )}
          </> 
        )}
      </Popover>
    )
  }

  return (
    <section aria-labelledby="sponsored-heading">
      <h2 id="sponsored-heading" className="px-2 font-semibold tracking-wider text-gray-500 text-md">
        Sponsored
      </h2>
      {sponsored.map((item, index) => (
        <div className="relative group" key={index}>
          <a href={item.href} className="block bg-transparent rounded-lg hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-inset focus:ring-opacity-60">
            <div className="p-2">
              <div className="flow-root">
                <div className="-my-4 divide-y divide-gray-200">
                  <div className="flex items-center py-4 space-x-3">
                    <div className="flex-shrink-0">
                      <img className="flex object-cover w-24 h-16 rounded-lg xl:w-32 xl:h-32" src={item.imageUrl} alt="" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.url}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <DropdownButton
            name={item.name}
            url={item.url} 
            href={item.href} 
            imageUrl={item.imageUrl} 
          />
        </div>
      ))}
    </section>
  )
}

export default FbSponsored;