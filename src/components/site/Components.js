import React from "react";
import { NavLink } from 'react-router-dom';

const elements = [
  { name: 'Buttons', items: '7', href: '/components/facebook/buttons', imageUrl: ''},
  { name: 'Lists', items: '4', href: '/components/facebook/lists', imageUrl: ''},
]

const components = [
  { name: 'Header', items: '1', href: '/components/facebook/header', imageUrl: ''},
  { name: 'Composer', items: '1', href: '/components/facebook/composer', imageUrl: ''},
  { name: 'Pagers', items: '2', href: '/components/facebook/pagers', imageUrl: ''},
  { name: 'Posts', items: '3', href: '/components/facebook/posts', imageUrl: ''},
  { name: 'Sponsored', items: '1', href: '/components/facebook/sponsored', imageUrl: ''},
]

const examples = [
  { name: 'News Feed', items: '1', href: '/components/facebook/news-feed', imageUrl: ''},
]

const Row = props => {
  return (
    <div class="col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-y-8 lg:gap-x-8">
      {props.list.map((item, index, array) => {
        return (
          <NavLink to={item.href} class="group relative bg-white rounded-lg shadow-sm hover:shadow-md overflow-hidden ring-1 ring-black ring-opacity-5">
            <figure>
                <div class="">
                  <div class="">
                    <img src="https://tailwindui.com/img/category-thumbnails/application-ui/sidebar.png" alt="" className="w-full h-40"></img>
                  </div>
                </div>
                <figcaption class="py-3 px-4">
                  <p class="text-sm font-medium text-gray-900 mb-1">{item.name}</p>
                  <p class="text-xs font-medium text-gray-500">{item.items > 1 ? item.items + " components" : '1 component'}</p>
                </figcaption>
            </figure>
          </NavLink>        
        )
      })}
    </div>
  )
}

export default function SitePageComponents() {
  return (
    <section class="divide-y divide-gray-200 mt-10">
      <header class="pb-6">
        <h2 id="facebook" class="text-2xl font-extrabold text-gray-900">Facebook</h2>
        <p className="mt-3 text-base text-gray-500">
          Examples of elements, components, and layouts from the worlds most popular social media website.
        </p>
      </header>
      <div class="grid grid-cols-3 xl:grid-cols-4 py-8 gap-x-8 gap-y-6">
        <h3 id="facebook-elements" class="text-gray-900 font-semibold col-span-3 xl:col-span-1">Elements</h3>
        <Row list={elements} />
      </div> 
      <div class="grid grid-cols-3 xl:grid-cols-4 py-8 gap-x-8 gap-y-6">
        <h3  id="facebook-components" class="text-gray-900 font-semibold col-span-3 xl:col-span-1">Components</h3>
        <Row list={components} />
      </div>
      <div class="grid grid-cols-3 xl:grid-cols-4 py-8 gap-x-8 gap-y-6">
        <h3 id="facebook-page-examples" class="text-gray-900 font-semibold col-span-3 xl:col-span-1">Page Examples</h3>
        <Row list={examples} />
      </div> 
    </section>
  )
}