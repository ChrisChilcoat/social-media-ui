import React from "react";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from "./components/site//ScrollToTop";

import Header from "./components/site/Header";
import Components from "./components/site/Components";
import Showcase from "./components/site/Showcase";
import Breadcrumbs from "./components/site/Breadcrumbs";
import ThreeColumnLayout from "./components/site/ThreeColumnLayout";
import StackedLayout from "./components/site/StackedLayout";

import FbComposer from "./components/facebook/FbComposer";
import FbContacts from "./components/facebook/FbContacts";
import FbHeader from "./components/facebook/FbHeader";
import FbPost from "./components/facebook/FbPost";
import FbNavigation from "./components/facebook/FbNavigation";
import FbSponsord from "./components/facebook/FbSponsored";
import FbShortcuts from './components/facebook/FbShortcuts';
import FbStoriesPager from "./components/facebook/FbStoriesPager";
import FbVideoPager from "./components/facebook/FbVideoPager";

export default function App() {
  return (
    <>   
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <Switch>
            <Route path="/components" exact>
              <StackedLayout 
                header={<Header/>} 
                main={<Components/>} 
              />
            </Route>
            <Route path="/components/facebook/type"></Route>
            <Route path="/components/facebook/buttons"></Route>
            <Route path="/components/facebook/lists">
              <StackedLayout 
                header={<Header/>} 
                main={
                  <>
                    <Breadcrumbs parent='facebook' child="elements" headline="Lists" />
                    <Showcase component={<div class="w-96 m-auto"><FbNavigation/></div>} title="Vertial navigation" />
                  </>
                }
              />
            </Route>
            <Route path="/components/facebook/avatars"></Route>
            <Route path="/components/facebook/forms"></Route>
            <Route path="/components/facebook/header">
              <StackedLayout 
                header={<Header/>} 
                main={
                  <>
                    <Breadcrumbs parent='facebook' child="components" headline="Header" />
                    <Showcase component={<FbHeader/>} title="Header" />
                  </>
                }
              />
            </Route>
            <Route path="/components/facebook/composer">
              <StackedLayout 
                header={<Header/>} 
                main={
                  <>
                    <Breadcrumbs parent='facebook' child="components" headline="Composer" />
                    <Showcase component={<FbComposer/>} title="Composer with button bar" />
                  </>
                }  
              />
            </Route>
            <Route path='/components/facebook/posts'>
              <StackedLayout 
                header={<Header/>} 
                main={
                  <>
                    <Breadcrumbs parent='facebook' child="components" headline="Posts" />
                    <Showcase component={<FbPost/>} title="Post with images and comments" />
                  </>
                }
              />
            </Route>
            <Route path='/components/facebook/pagers'>
              <StackedLayout 
                header={<Header/>} 
                main={
                  <>
                    <Breadcrumbs parent='facebook' child="components" headline="Pagers" />
                    <Showcase component={<FbStoriesPager/>} title="Stories pager" />
                    <Showcase component={<FbVideoPager/>} title="Video chat pager" />
                  </>
                }
              />
            </Route>
            <Route path="/components/facebook/sponsored">
              <StackedLayout 
                header={<Header/>} 
                main={
                  <>
                    <Breadcrumbs parent='facebook' child="components" headline="Sponsored" />
                    <Showcase component={<FbSponsord />} title="Sponsored widget with dropdown button" />
                  </>
                }
              />
            </Route>
            <Route path="/components/facebook/layouts"></Route>
            <Route path="/components/facebook/news-feed">
              <StackedLayout 
                header={<Header/>} 
                main={
                  <>
                    <Breadcrumbs parent='facebook' child="page-examples" headline="News Feed" />
                    <Showcase 
                      title="News feed layout"  
                      component={
                        <ThreeColumnLayout 
                          fixedHeader={false} 
                          header={<FbHeader/>}
                          main={
                            <>
                              <FbStoriesPager/>
                              <FbComposer/>
                              <FbVideoPager/>
                              <FbPost/>
                            </>
                          } 
                          aside={
                            <>
                              <FbSponsord/>
                              <FbContacts/>
                            </>
                          } 
                          sidebar={
                            <>
                              <FbNavigation/>
                              <FbShortcuts/>
                            </>
                          } 
                        />
                      }
                    />
                  </>
                }
              />
            </Route>
            <Route path="/documentation" exact>
              <ThreeColumnLayout header={<Header/>}	/>
            </Route>
            <Route path="/components/facebook/full-screen/news-feed">
              <ThreeColumnLayout 
                header={<FbHeader/>}
                main={
                  <>
                    <FbStoriesPager/>
                    <FbComposer/>
                    <FbVideoPager/>
                    <FbPost/>
                  </>
                } 
                aside={
                  <>
                    <FbSponsord/>
                    <FbContacts/>
                  </>
                } 
                sidebar={
                  <>
                    <FbNavigation/>
                    <FbShortcuts/>
                  </>
                } 
              />
            </Route>
            <Route path="/">
              <ThreeColumnLayout header={<Header/>} />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  )
}