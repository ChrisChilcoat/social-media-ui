import React, { useState, createRef, useEffect } from 'react';
import { PlusIcon, ChevronRightIcon } from '@heroicons/react/solid';

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your tailwind config file:
  
  ```
  module.exports = {
    theme: {
      extend: {
        scale: {
          '98': '.98',
          '102': '1.02',
        },
      },
    },
    variants: {
      extend: {
        scale: ['active', 'group-hover', 'focus', 'group-focus'],
        opacity: ['active', 'group-hover', 'focus', 'group-focus'],
      },
    },
  }
  ```
*/

const stories = [
  { name: 'Chelsea Hagon', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80'},
  { name: 'Angela Fisher', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&&q=80'},
  { name: 'Carla Yates', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&&q=80'},
  { name: 'Leslie Johnson', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&&q=80'},
  { name: 'Francis Watson', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&&q=80'},
  { name: 'Tracey Palmer', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&&q=80'},
  { name: 'Alejandro Davidson', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&&q=80'},
  { name: 'Leslie Alexander', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&&q=80'},
  { name: 'Dries Vincent', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&&q=80'},
  { name: 'Courtney Henry', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&&q=80'},
  { name: 'Michael Foster', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&&q=80'},
  { name: 'Lindsey Walton', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Tom Cook', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&&q=80'},
  { name: 'Whitney Francis', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&&q=80'},
  { name: 'Leonard Krasner', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&&q=80'},
  { name: 'Floyd Miles', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&&q=80'},
]

function FbStoriesPager() {
  const [nextBtn, setNextBtn] = useState(true);
  const [scrollPosition, setScrollPosition] = useState();
  const [loaded, setLoaded] = useState(false);
  const pager = createRef();
  const style = {
    btn: { 
      'height': Math.round(215 - scrollPosition / .79),
      'width': Math.round(130 - scrollPosition / 1.68),
      'borderBottomLeftRadius': 0,
      'borderBottomRightRadius': Math.round(15 + scrollPosition / 8),
      'borderTopLeftRadius':  0,
      'borderTopRightRadius': Math.round(15 + scrollPosition / 8),  
      'paddingTop': Math.round(scrollPosition / 15.5),
    },
    img: {
      'height': Math.round(166 - scrollPosition / .92),
      'width': Math.round(166 - scrollPosition / .92),
      'borderRadius': Math.round(scrollPosition / 2),
    },
    svg: {
      'height': Math.round(25 - scrollPosition / 16),
      'width': Math.round(25 - scrollPosition / 16),
      'borderWidth': '1px',
      'left': Math.round(50 + scrollPosition / 3.5) + '%',
    },
    label: {
      'opacity': '.' + Math.max(10 - Math.round(scrollPosition / 10)),
    }
  }
  const update = () => {
    const currentScrollLeft = pager.current.scrollLeft;
    currentScrollLeft < 125 ? setScrollPosition(currentScrollLeft) : setScrollPosition(125);
    toggleNextBtn();
  }
  const toggleNextBtn = () => {
    const totalWidth = pager.current.scrollWidth - pager.current.clientWidth;
    totalWidth === pager.current.scrollLeft ? setNextBtn(false) : setNextBtn(true);
  }
  const scrollRight = () => {
    pager.current.scroll({
      left: pager.current.scrollLeft + pager.current.clientWidth,
      behavior: 'smooth'
    })
  }
  const NextBtn = () => (
    <button onClick={() => scrollRight()} className="absolute items-center hidden px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full shadow sm:inline-flex -right-5 -mt-7 top-1/2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
      <span className="sr-only">Next</span>
      <ChevronRightIcon  className="w-8 h-8" />
    </button>
  )
  const AddBtn = () => (
    <button style={style.btn} className={ (scrollPosition < 6 || scrollPosition == null ? 'hidden' : null) + " overflow-hidden transform -translate-y-1/2 top-1/2 -left-5 w-1/5 z-30 absolute items-center ml-5 rounded-xl shadow border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60"}>
      <img style={style.img} alt="User Name" className="relative object-cover w-full m-auto not-sr-only max-h-40 max-w-40 h-4/5" 
        src='https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&&q=80'
      ></img>
      <div className="relative z-50 bg-white group-hover:bg-gray-100 h-1/5">
        <PlusIcon style={style.svg} className="absolute block -ml-4 text-white bg-blue-500 border-4 rounded-full m-h-8 m-w-8 bottom-1/3 left-1/2 -top-4" />
        <span style={style.label} className="block pt-4 m-auto text-xs font-medium text-gray-700">Create Story</span>
      </div>
    </button>
  )
  useEffect(() => {
    setTimeout(function(){
      setLoaded(true);
    }, 3000);
  });
  
  return (
    loaded ? ( // Render Widget if images are pre loaded...
      <section aria-label="View Stories" className="relative max-w-2xl mx-auto mt-5 mb-5">
        <AddBtn/>
        <div ref={pager} onScroll={update} className="relative w-full overflow-x-auto scrollbar-hide">
          <ul className="whitespace-nowrap">
            <li className={ (scrollPosition > 5 ? 'invisible' : null) + " align-top relative inline-block w-1/4 sm:w-1/5 p-1"}>
              <button aria-label={'Create a new story'} className="relative z-10 w-full h-48 overflow-hidden transition-transform bg-black shadow group rounded-xl transform-gpu active:scale-98 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
                <img aria-hidden="true" className="relative object-cover w-full transition-transform not-sr-only h-4/5 transform-gpu opacity-80 group-hover:opacity-75 group-focus:opacity-75 group-hover:scale-102 group-focus:scale-102" 
                  src='https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
                  alt="User Name"
                ></img>
                <div aria-hidden="true" className="relative z-50 bg-white group-hover:bg-gray-100 h-1/5">
                  <PlusIcon className="absolute block w-8 h-8 mx-auto -ml-4 text-white bg-blue-500 border-4 border-white rounded-full bottom-1/3 left-1/2 -top-4 group-hover:border-gray-100"/>
                  <div className="block pt-4 m-auto text-xs font-medium text-gray-700">Create Story</div>
                </div>
              </button>
            </li>
            {stories.map((story, index) => 
              <li key={story.name} className="relative inline-block w-1/4 p-1 bg-gray-100 sm:w-1/5">
                <button aria-label={'View ' + story.name + '\'s Story'} className="relative w-full h-48 overflow-hidden transition-transform bg-black shadow rounded-xl group transform-gpu active:scale-98 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
                  <img aria-hidden="true" className="relative object-cover w-full h-full transition-transform not-sr-only transform-gpu opacity-80 group-hover:opacity-75 group-focus:opacity-75 group-hover:scale-102 group-focus:scale-102" 
                    src={story.imageUrl}
                    alt={story.name}
                  ></img>
                  <div aria-hidden="true" className="absolute border-4 border-blue-500 rounded-full top-3 left-3 group-hover:opacity-90 group-focus:opacity-90">
                    <img className="w-8 h-8 bg-gray-300 rounded-full hover:opacity-90" 
                      src={story.avatarURL}
                      alt={story.name}></img>  
                  </div>
                  <div aria-hidden="true" className="absolute leading-tight text-left text-white bottom-3 left-3 filter drop-shadow group-hover:opacity-90 group-focus:opacity-90">
                    {story.name.split(" ").map((val) => (
                      <div>{val}</div>
                    ))}
                  </div>
                </button>
              </li>
            )}
          </ul>
        </div>
        {nextBtn ? <NextBtn/> : null}
      </section>
    ) : ( // Render Loading placeholder if images are not pre loaded...
      <section aria-hidden="true" className="relative max-w-2xl mx-auto mt-5 mb-5">
        <div className="relative w-full overflow-x-hidden scrollbar-hide">
          <ul className="whitespace-nowrap">
            <li className="relative inline-block w-1/4 p-1 align-top sm:w-1/5">
              <div className="relative z-10 w-full h-48 overflow-hidden transition-transform bg-black shadow group rounded-xl">
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-100 to-gray-200">
                  <span className="absolute top-0 left-0 w-full h-full rounded-md bg-gradient-to-t from-gray-200 to-gray-500 pulse animate-pulse"></span>
                </span>
                <div className="absolute bottom-0 z-50 w-full bg-white h-1/5">
                  <div className="absolute block w-8 h-8 mx-auto -ml-4 text-white bg-blue-500 border-4 border-white rounded-full bottom-1/3 left-1/2 -top-4 " ></div>
                  <div className="block pt-4 m-auto text-xs font-medium text-center text-gray-700">Create Story</div>
                </div>
              </div>
            </li>
            {stories.map((story) => 
              <li key={story.name} className="relative inline-block w-1/4 p-1 bg-gray-50 sm:w-1/5">
                <div className="relative w-full h-48 overflow-hidden transition-transform bg-black shadow rounded-xl group">
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-100 to-gray-200">
                    <span className="absolute top-0 left-0 w-full h-full rounded-md bg-gradient-to-t from-gray-200 to-gray-500 pulse animate-pulse"></span>
                  </span>
                  <div className="absolute border-4 border-blue-500 rounded-full top-3 left-3">
                    <div className="w-8 h-8"></div>  
                  </div>            
                  <div className="absolute leading-tight text-left text-white bottom-3 left-3 filter drop-shadow">
                    {story.name.split(" ").map((val) => (
                      <div>{val}</div>
                    ))}
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
        <div className="absolute items-center hidden px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full shadow sm:inline-flex -right-5 -mt-7 top-1/2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
          <span className="w-8 h-8"></span>
        </div>
      </section>
    )
  )
}

export default FbStoriesPager;