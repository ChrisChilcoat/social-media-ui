import React from "react";

export default function SiteStackedLayout({header, main}) {
  return (
    <div className="min-h-screen">
      {header &&
        <div className="fixed z-40 w-full mx-auto max-w-screen-2x">
          {header}
        </div>
      }
      <div className="grid max-w-screen-xl grid-cols-12 gap-8 px-3 mx-auto sm:px-6 lg:px-2">
        <main aria-labelledby="main-heading" className={(header ? "pt-10 mt-3" : "") + " col-span-12"}>
          <h1 id="main-heading" className="sr-only">Main Content</h1>
          {main}
        </main>
      </div>
    </div> 
  )
}