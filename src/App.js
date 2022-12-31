import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

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
import FbSponsored from "./components/facebook/FbSponsored";
import FbShortcuts from './components/facebook/FbShortcuts';
import FbStoriesPager from "./components/facebook/FbStoriesPager";
import FbVideoPager from "./components/facebook/FbVideoPager";

import DashboardLayout from "./components/site/Layout";

function ScrollToTop() {
  
}

export default function App() {
  return (
    <>   
      <Router>
          <Routes>
            <Route path="/" element={ 
              <StackedLayout main={<Home/>} />
            }/>
            <Route path="/elements/buttons" exact element={
              <>
                <DashboardLayout
                  main={
                    <>
                      <span class='prose'><h1 class="mb-10">Buttons</h1></span>
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
                <ScrollToTop/>
              </>
            }/>
            <Route path="/elements/lists" exact element={
              <>
                <DashboardLayout
                  main={
                    <>
                      <span class='prose'><h1 class="mb-10">Lists</h1></span>
                      <Showcase class="py-4 text-center" component={<FbListHorizontalIcons/>} syntaxBlock='FbListHorizontalIcons' title="Horizontal icon list with tooltips" />
                      <Showcase class="py-4 text-center" component={<FbListHorizontalText/>} syntaxBlock='FbListHorizontalText' title="Horizontal list" />
                      <Showcase class="py-4 text-center" component={<FbListHorizontal/>} syntaxBlock='FbListHorizontal' title="Horizontal list with icons" />
                      <Showcase class="w-96 py-4 text-center m-auto" component={<FbListVertical/>} syntaxBlock='FbListVertical' title="Vertial List" />
                    </>
                  }
                />
                <ScrollToTop/>
              </>
            }/>
            <Route path="/components/header" exact element={
              <>
                <DashboardLayout
                  main={
                    <>
                      <span class='prose'><h1 class="mb-10">Header</h1></span>
                      <Showcase class="w-full" component={<FbHeader/>} syntaxBlock='FbHeader' title="Header" />
                    </>
                  }
                />
                <ScrollToTop/>
              </>
            }/>
            <Route path="/components/composer" exact element={
              <>
                <DashboardLayout
                  main={
                    <>
                      <span class='prose'><h1 class="mb-10">Composer</h1></span>
                      <Showcase class="py-4" component={<FbComposer/>} syntaxBlock='FbComposer' title="Composer with button bar" />
                    </>
                  }
                />
                <ScrollToTop/>
              </>
            }/>
            <Route path='/components/posts' exact element={
              <>
                <DashboardLayout
                  main={
                    <>
                      <span class='prose'><h1 class="mb-10">posts</h1></span>
                      <Showcase class="py-4" component={<FbPostImage/>} syntaxBlock='FbPostImage' title="Post with image" />
                      <Showcase class="py-4" component={<FbPostImages/>} syntaxBlock='FbPostImages' title="Post with multiple images" />
                      <Showcase class="py-4" component={<FbPostImagesComments/>} syntaxBlock='FbPostImagesComments' title="Post with multiple images and comments" />
                    </>
                  }
                />
                <ScrollToTop/>
              </>
            }/>
            <Route path='/components/pagers' exact element={
              <>
                <DashboardLayout
                  main={
                    <>
                      <span class='prose'><h1 class="mb-10">Pagers</h1></span>
                      <Showcase class="py-4" component={<FbStoriesPager/>} syntaxBlock='FbStoriesPager' title="Stories pager" />
                      <Showcase class="py-4" component={<FbVideoPager/>} syntaxBlock='FbVideoPager' title="Video chat pager" />
                    </>
                  }
                />
                <ScrollToTop/>
              </>
            }/>
            <Route path="/components/sponsored" exact element={
              <>
                <DashboardLayout
                  main={
                    <>
                      <span class='prose'><h1 class="mb-10">Sponsored</h1></span>
                      <Showcase class="w-96 py-4 m-auto" component={<FbSponsored />} syntaxBlock='FbSponsored' title="Sponsored widget with dropdown button" />
                    </>
                  }
                />
                <ScrollToTop/>
              </>
            }/>
            <Route path="/examples/news-feed" exact element={
            <>

                    <DashboardLayout
                      main={
                        <>
                          <span class='prose'><h1 class="mb-10">News Feed</h1></span>
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
                                    <FbSponsored/>
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

              <ScrollToTop/>
            </>
            }/>
            <Route path="/components/facebook/full-screen/news-feed" exact element={
            <>
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
                    <FbSponsored/>
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
              <ScrollToTop/>
            </>
            }/>
          </Routes>
      </Router>
    </>
  )
}