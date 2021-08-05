import React from 'react';

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
  { name: 'Chelsea Hagon', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'},
  { name: 'Angela Fisher', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'},
  { name: 'Carla Yates', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Leslie Johnson', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Francis Watson', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Tracey Palmer', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Alejandro Davidson', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Leslie Alexander', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Dries Vincent', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Courtney Henry', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Michael Foster', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Lindsey Walton', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Tom Cook', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { name: 'Whitney Francis', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'},
  { name: 'Leonard Krasner', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'},
  { name: 'Floyd Miles', avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',  imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'},
]

function FbStoriesPager() {
  const [nextBtn, setNextBtn] = React.useState(true);
  const [scrollPosition, setScrollPosition] = React.useState();
  const pager = React.createRef();
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
    console.log(style.svg.left);
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
    <button onClick={() => scrollRight()} class="hidden sm:inline-flex -right-5 -mt-7 top-1/2 z-30 absolute items-center px-2 py-2 rounded-full shadow border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
      <span class="sr-only">Next</span>
      <svg class="h-8 w-8" x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
    </button>
  )
  const AddBtn = () => (
    <button style={style.btn} class={ (scrollPosition < 6 || scrollPosition == null ? 'hidden' : null) + " overflow-hidden transform -translate-y-1/2 top-1/2 transform-gpu -left-5 top-1 w-1/5 z-30 absolute items-center ml-5 rounded-xl shadow border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60"}>
      <img style={style.img} alt="User Name" class="max-h-40 max-w-40 m-auto not-sr-only object-cover w-full h-4/5 relative" 
        src='https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
      ></img>
      <div className="relative z-50 bg-white group-hover:bg-gray-100 h-1/5">
        <svg style={style.svg} xmlns="http://www.w3.org/2000/svg" class="absolute m-h-8 m-w-8 text-white bg-blue-500 block rounded-full bottom-1/3 left-1/2 -ml-4 -top-4 border-4" fill="none" viewBox="-3 -3 30 30" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        <span style={style.label} class="text-gray-700 block m-auto pt-4 text-xs font-medium">Create Story</span>
      </div>
    </button>
  )
  return (
    <section aria-label="View Stories" className="relative max-w-xl max-w-2xl mx-auto mt-5 mb-5">
      <AddBtn/>
      <div ref={pager} onScroll={update} class="relative w-full overflow-x-auto scrollbar-hide">
        <ul className="whitespace-nowrap">
          <li className={ (scrollPosition > 5 ? 'invisible' : null) + " align-top relative inline-block w-1/4 sm:w-1/5"}>
            <button class="relative m-1 group overflow-hidden shadow transition-transform bg-black rounded-xl group h-48 transform-gpu active:scale-98 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60 z-10">
              <img class="not-sr-only object-cover w-full h-4/5 relative transition-transform transform-gpu opacity-80 group-hover:opacity-75 group-focus:opacity-75 group-hover:scale-102 group-focus:scale-102" 
                src='https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
                alt="User Name"
              ></img>
              <div className="relative z-50 bg-white group-hover:bg-gray-100 h-1/5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white bg-blue-500 block rounded-full mx-auto absolute bottom-1/3 left-1/2 -ml-4 -top-4 border-4 border-white group-hover:border-gray-100" fill="none" viewBox="-3 -3 30 30" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <div class="text-gray-700 block m-auto pt-4 text-xs font-medium">Create Story</div>
              </div>
            </button>
          </li>
          {stories.map((story) => 
            <li key={story.name} className="relative inline-block w-1/4 bg-gray-100 sm:w-1/5">
              <button className="relative h-48 m-1 overflow-hidden transition-transform bg-black shadow rounded-xl group transform-gpu active:scale-98 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
                <img class="not-sr-only object-cover w-full h-full  relative transition-transform transform-gpu opacity-80 group-hover:opacity-75 group-focus:opacity-75 group-hover:scale-102 group-focus:scale-102" 
                  src={story.imageUrl}
                  alt={story.name}
                ></img>
                <div class="rounded-full absolute border-4 border-blue-500 top-3 left-3 group-hover:opacity-90 group-focus:opacity-90">
                  <img class="h-8 w-8 bg-gray-300 rounded-full hover:opacity-90" 
                    src={story.avatarURL}
                    alt={story.name}></img>  
                </div>
                <div class="absolute bottom-3 left-3 text-white filter drop-shadow leading-tight text-left group-hover:opacity-90 group-focus:opacity-90">
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
  )
}

export default FbStoriesPager;