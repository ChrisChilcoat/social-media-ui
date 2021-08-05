import React, { Component } from "react";

const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

class FbComposer extends Component {
  render() {
    return (
      <section>
        <div aria-label="Create a post" role="region" class="bg-white border border-gray-150 rounded-lg max-w-2xl mx-auto shadow-md mb-5 mt-5">
          <h3 class="sr-only">Create a post</h3>
          <div class="w-full flex items-center justify-between py-3 px-4 space-x-2">
            <button role="link" tabindex="0" class="rounded-full flex-shrink-0 hover:bg-black block focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60" href="#">
              <div>
                <img class="w-10 h-10 bg-gray-300  hover:opacity-90 rounded-full" src={user.imageUrl} alt={user.name}></img>
              </div>
            </button>
            <div role="button" tabindex="0" class="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 flex-1 text-gray-500 text-left focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
              <div><span>What's on your mind, Chris?</span></div>
            </div>
          </div>
          <div class="flex border-t border-black-400 bg-transparent mx-4">
            <div role="button" tabindex="0" class="flex-1 text-gray-500 my-2 text-md font-medium hover:bg-gray-100 rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
                <div class="flex justify-center space-x-2">
                  <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#F02849">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg></span>
                  <span>Live Video</span>
                </div>
            </div>
            <div role="button" tabindex="0" class="flex-1 text-gray-500 my-2 text-md font-medium hover:bg-gray-100 rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
            <div class="flex justify-center space-x-2">
                  <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#45BD62">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg></span>
                  <span>Photo/Video</span>
              </div>
            </div>
            <div role="button" tabindex="0" class="flex-1 text-gray-500 my-2 text-md font-medium hover:bg-gray-100 rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-opacity-60">
            <div class="flex justify-center space-x-2">
                  <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#F7B928">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg></span>
                <span>Feeling/Activity</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default FbComposer;