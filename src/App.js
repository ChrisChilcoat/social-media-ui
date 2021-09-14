import React from "react";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from "./components/site//ScrollToTop";

import Header from "./components/site/Header";
import Components from "./components/site/Components";
import Home from "./components/site/Home";
import Showcase from "./components/site/Showcase";
import Breadcrumbs from "./components/site/Breadcrumbs";
import ThreeColumnLayout from "./components/site/ThreeColumnLayout";
import StackedLayout from "./components/site/StackedLayout";

import FbButtonPrimary from "./components/facebook/FbButtonPrimary";
import FbButtonSecondary from "./components/facebook/FbButtonSecondary";
import FbButtonWhite from "./components/facebook/FbButtonWhite";
import FbButtonCircle from "./components/facebook/FbButtonCircle";
import FbButtonRounded from "./components/facebook/FbButtonRounded";
import FbButtonGroup from "./components/facebook/FbButtonGroup";
import FbButtonCircleDropdown from "./components/facebook/FbButtonCircleDropdown";

import FbListHorizontal from "./components/facebook/FbListHorizontal";
import FbListHorizontalIcons from "./components/facebook/FbListHorizontalIcons";
import FbListHorizontalText from "./components/facebook/FbListHorizontalText";
import FbListVertical from "./components/facebook/FbListVertical";

import FbComposer from "./components/facebook/FbComposer";
import FbContacts from "./components/facebook/FbContacts";
import FbHeader from "./components/facebook/FbHeader";

import FbPostImage from "./components/facebook/FbPostImage";
import FbPostImages from "./components/facebook/FbPostImages";
import FbPostImagesComments from "./components/facebook/FbPostImagesComments";

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
            <Route path="/components/facebook/buttons">
              <StackedLayout 
                  header={<Header/>} 
                  main={
                    <>
                      <Breadcrumbs parent='facebook' child="elements" headline="Buttons" />
                      <Showcase class="p-10 text-center" component={<FbButtonPrimary/>} syntaxBlock='FbButtonPrimary' title="Primary button" />
                      <Showcase class="p-10 text-center" component={<FbButtonSecondary/>} syntaxBlock='FbButtonSecondary' title="Secondary button" />
                      <Showcase class="p-10 text-center" component={<FbButtonWhite/>} syntaxBlock='FbButtonWhite' title="White button" />
                      <Showcase class="p-10 text-center" component={<FbButtonRounded/>} syntaxBlock='FbButtonRounded' title="Rounded button" />
                      <Showcase class="p-10 text-center" component={<FbButtonCircle/>} syntaxBlock='FbButtonCircle' title="circular button" />
                      <Showcase class="p-10 text-center" component={<FbButtonCircleDropdown/>} syntaxBlock='FbButtonCircleDropdown' title="Dropdown button" />
                      <Showcase class="p-10 text-center" component={<FbButtonGroup/>} syntaxBlock='FbButtonGroup'  title="Button group" />
                    </>
                  }
                />
            </Route>
            <Route path="/components/facebook/lists">
              <StackedLayout 
                header={<Header/>} 
                main={
                  <>
                    <Breadcrumbs parent='facebook' child="elements" headline="Lists" />
                    <Showcase class="py-4 text-center" component={<FbListHorizontalIcons/>} syntaxBlock='FbListHorizontalIcons' title="Horizontal icon list with tooltips" />
                    <Showcase class="py-4 text-center" component={<FbListHorizontalText/>} syntaxBlock='FbListHorizontalText' title="Horizontal list" />
                    <Showcase class="py-4 text-center" component={<FbListHorizontal/>} syntaxBlock='FbListHorizontal' title="Horizontal list with icons" />
                    <Showcase class="w-96 py-4 text-center m-auto" component={<FbListVertical/>} syntaxBlock='FbListVertical' title="Vertial List" />
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
                    <Breadcrumbs parent='facebook' child="components" headline="Headers" />
                    <Showcase class="w-full" component={<FbHeader/>} syntaxBlock='FbHeader' title="Header" />
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
                    <Showcase class="py-4" component={<FbComposer/>} syntaxBlock='FbComposer' title="Composer with button bar" />
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
                    <Showcase class="py-4" component={<FbPostImage/>} syntaxBlock='FbPostImage' title="Post with image" />
                    <Showcase class="py-4" component={<FbPostImages/>} syntaxBlock='FbPostImages' title="Post with multiple images" />
                    <Showcase class="py-4" component={<FbPostImagesComments/>} syntaxBlock='FbPostImagesComments' title="Post with multiple images and comments" />
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
                    <Showcase class="py-4" component={<FbStoriesPager/>} syntaxBlock='FbStoriesPager' title="Stories pager" />
                    <Showcase class="py-4" component={<FbVideoPager/>} syntaxBlock='FbVideoPager' title="Video chat pager" />
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
                    <Showcase class="w-96 py-4 m-auto" component={<FbSponsord />} syntaxBlock='FbSponsord' title="Sponsored widget with dropdown button" />
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
                      expandedUrl="/components/facebook/full-screen/news-feed"  
                      component={
                        <ThreeColumnLayout 
                          fixedHeader={false} 
                          header={<FbHeader/>}
                          main={
                            <>
                              <FbStoriesPager/>
                              <FbComposer/>
                              <FbVideoPager/>
                              <FbPostImage/>
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
            <Route path="/components/facebook/full-screen/news-feed">
              <ThreeColumnLayout 
                header={<FbHeader/>}
                main={
                  <>
                    <FbStoriesPager/>
                    <FbComposer/>
                    <FbVideoPager/>
                    <FbPostImage/>
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
              <StackedLayout main={<Home/>} />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  )
}