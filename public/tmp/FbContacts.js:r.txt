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

const contacts = [
  { name: 'Angela Fisher', hasStory: false, avatarURL: 'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'},
  { name: 'Carla Yates', hasStory: false, avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Leslie Johnson', hasStory: true, avatarURL: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Francis Watson', hasStory: false, avatarURL: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Tracey Palmer', hasStory: true, avatarURL: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Alejandro Davidson', hasStory: false, avatarURL: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Leslie Alexander', hasStory: false, avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Dries Vincent', hasStory: false, avatarURL: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Courtney Henry', hasStory: true, avatarURL: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Michael Foster', hasStory: false, avatarURL: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Lindsey Walton', hasStory: false, avatarURL: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Tom Cook', hasStory: true, avatarURL: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Whitney Francis', hasStory: false, avatarURL: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'},
  { name: 'Leonard Krasner', hasStory: false, avatarURL: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'},
  { name: 'Floyd Miles', hasStory: false, avatarURL: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'},
  // More contacts...
]

function FbContacts() {

  const Flyout = props => {
    const [referenceElement, setReferenceElement] = useState()
    const [popperElement, setPopperElement] = useState()
    const { styles, attributes } = usePopper(referenceElement, popperElement, { 
      placement: 'left',
      modifiers: [
        {
          name: 'preventOverflow',
          options: {
            altAxis: true,
            padding: { top: 55, bottom: 10 },
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
              aria-label={'Chat with ' + props.name} 
              aria-expanded="false"
              className="flex items-center w-full p-2 space-x-3 transition duration-200 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-inset focus:ring-opacity-60"
            >
              <div className="relative flex-shrink-0">
                <img className={(props.hasStory ? 'p-0.5 border-2 border-blue-500' : '') + " w-9 h-9 rounded-full"} src={props.avatarURL} alt={props.name} />
                <span className="absolute bottom-0 right-0 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-white" />
              </div>
              <div className="flex-1 min-w-0 ml-2 text-left">
                <p className="text-sm font-medium text-gray-800">{props.name}</p>
              </div>
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
                  <div className="relative bg-white w-96 rounded-md shadow p-4 mt-3.5 mr-3 flex"> 
                    <div class="relative flex-shrink-0 mr-3">
                      <img class="w-20 h-20 rounded-full" src={props.avatarURL} alt={props.name}></img>
                    </div>
                    <div>
                      <h4 class="font-bold text-lg">{props.name}</h4>
                      <div class="flex">
                        <div></div>
                        <div></div>
                      </div>
                      <div class="flex">
                        <div></div>
                        <div></div>
                      </div>
                    </div>
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
    <section aria-labelledby="contacts-heading">
      <div className="flex items-center">
        <h2 id="contacts-heading" className="flex-1 flex-shrink px-2 font-semibold tracking-wider text-gray-500 text-md ">
          Contacts
        </h2>
        <div className="flex-0">
          <button aria-label="Chris Chilcoat's Timeline" role="link" tabindex="0" className="flex-shrink-0 inline-block p-1.5 m-1 text-gray-500 rounded-full hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
          <button aria-label="Chris Chilcoat's Timeline" role="link" tabindex="0" className="flex-shrink-0 inline-block p-1.5 m-1 text-gray-500 rounded-full hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
          <button aria-label="Chris Chilcoat's Timeline" role="link" tabindex="0" className="flex-shrink-0 inline-block p-1.5 m-1 text-gray-500 rounded-full hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
        </div>
      </div>
      <ul>
        {contacts.map((item, index) => (
          <li key={item.name} className="relative">
            <Flyout
              name={item.name}
              url={item.url} 
              href={item.href} 
              avatarURL={item.avatarURL} 
            />
          </li>
        ))}
      </ul>       
    </section>
  )
}

export default FbContacts;