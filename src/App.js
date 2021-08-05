import FbHeader from './components/FbHeader';
import FbComposer  from './components/FbComposer';
import FbVideoPager from './components/FbVideoPager';
import FbStoriesPager from './components/FbStoriesPager';
import FbPost from './components/FbPost';
import FbSponsored from './components/FbSponsored';
import FbContacts from './components/FbContacts';
import FbShortcuts from './components/FbShortcuts';
import FbNavigation from './components/FbNavigation';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="fixed z-40 w-full mx-auto max-w-screen-2x">
        <FbHeader/>
      </div>
      <div className="grid grid-cols-12 gap-8 mx-auto max-w-screen-2xx sm:px-6 lg:max-w-screen-2x lg:px-2">
        <nav className="sticky top-0 hidden h-screen space-y-2 lg:block lg:col-span-3 pt-14">
          <div className="h-full pt-2 pr-4 overflow-scroll divide-y divide-gray-300">
            <FbNavigation/>
            <FbShortcuts/>
          </div>
        </nav>
        <main aria-labelledby="main-heading" className="col-span-12 pt-10 mt-3 md:col-span-8 lg:col-span-6">
          <h1 id="main-heading" className="sr-only">Recent Activity</h1>
          <FbStoriesPager/>
          <FbComposer/>
          <FbVideoPager/>
          <FbPost/>
          <FbPost/>
          <FbPost/>
        </main>
        <aside className="sticky top-0 hidden h-screen col-span-4 space-y-4 pt-14 md:block lg:col-span-3">
          <div className="h-full pt-4 space-y-2 overflow-scroll divide-y divide-gray-300 top-20 scrollbar-hide">
            <FbSponsored/>
            <FbContacts/>
          </div>
        </aside>
      </div>
    </div>
  )
}