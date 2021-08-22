import React from "react";
import { NavLink } from 'react-router-dom';

export default function SitePageComponents() {
  return (
    <section class="divide-y divide-gray-200 mt-10">
      <header class="pb-6">
          <h2 class="text-2xl font-extrabold text-gray-900">Facebook</h2>
          <p class="text-sm text-gray-500 mt-2">Landing page heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites.</p>
      </header>
      <div class="grid grid-cols-3 xl:grid-cols-4 py-8 gap-x-8 gap-y-6">
        <h3 class="text-gray-900 font-semibold col-span-3 xl:col-span-1">Feedback</h3>
        <div class="col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-y-8 lg:gap-x-8">
            <NavLink to="/components/FbComposer" class="group relative bg-white rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5">
              <figure>
                  <div class="relative bg-gray-100 pt-[50%] overflow-hidden">
                    <div class="absolute inset-0 w-full h-full rounded-t-lg overflow-hidden">
                      <img src="/img/category-thumbnails/marketing/404-pages.png" alt="" class="absolute inset-0 w-full h-full"></img>
                    </div>
                  </div>
                  <figcaption class="py-3 px-4">
                    <p class="text-sm font-medium text-gray-900 mb-1">Composer</p>
                    <p class="text-xs font-medium text-gray-500">1 component</p>
                  </figcaption>
              </figure>
            </NavLink>
            <NavLink to="/components/FbStoriesPager" class="group relative bg-white rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5">
              <figure>
                  <div class="relative bg-gray-100 pt-[50%] overflow-hidden">
                    <div class="absolute inset-0 w-full h-full rounded-t-lg overflow-hidden">
                      <img src="/img/category-thumbnails/marketing/404-pages.png" alt="" class="absolute inset-0 w-full h-full"></img>
                    </div>
                  </div>
                  <figcaption class="py-3 px-4">
                    <p class="text-sm font-medium text-gray-900 mb-1">Stories Pager</p>
                    <p class="text-xs font-medium text-gray-500">1 component</p>
                  </figcaption>
              </figure>
            </NavLink>
            <NavLink to="/components/FbPost" class="group relative bg-white rounded-lg shadow-sm overflow-hidden ring-1 ring-black ring-opacity-5">
              <figure>
                  <div class="relative bg-gray-100 pt-[50%] overflow-hidden">
                    <div class="absolute inset-0 w-full h-full rounded-t-lg overflow-hidden">
                      <img src="/img/category-thumbnails/marketing/404-pages.png" alt="" class="absolute inset-0 w-full h-full"></img>
                    </div>
                  </div>
                  <figcaption class="py-3 px-4">
                    <p class="text-sm font-medium text-gray-900 mb-1">Post</p>
                    <p class="text-xs font-medium text-gray-500">1 component</p>
                  </figcaption>
              </figure>
            </NavLink>
        </div>
      </div>
      
    </section>
  )
}