import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SiteHeader from "./components/site/SiteHeader";
import SitePageComponents from "./components/site/SitePageComponents";
import SiteThreeColumnLayout from "./components/site/SiteThreeColumnLayout";
import SiteStackedLayout from "./components/site/SiteStackedLayout";

import FbHeader from "./components/facebook/FbHeader";
import FbPost from "./components/facebook/FbPost";
import FbComposer from "./components/facebook/FbComposer/FbComposer";
import FbStoriesPager from "./components/facebook/FbStoriesPager";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/components" exact>
          <SiteStackedLayout header={<SiteHeader/>} main={<><SitePageComponents/></>} />
        </Route>
        <Route path="/components/FbComposer">
          <SiteThreeColumnLayout header={<SiteHeader/>} main={<FbComposer/>} />
        </Route>
        <Route path="/components/FbPost">
          <SiteThreeColumnLayout header={<SiteHeader/>}	main={<FbPost/>} />
        </Route>
        <Route path="/components/FbStoriesPager">
          <SiteThreeColumnLayout main={<FbStoriesPager/>} />
        </Route>
        <Route path="/Documentation" exact>
          <SiteThreeColumnLayout header={<SiteHeader/>}	/>
        </Route>
        <Route path="/example/facebook">
          <SiteThreeColumnLayout header={<FbHeader/>} main={<FbStoriesPager/>} aside={<FbComposer/>} sidebar={<FbComposer/>} />
        </Route>
        <Route path="/">
          <SiteThreeColumnLayout header={<SiteHeader/>} />
        </Route>
      </Switch>
    </Router>
  )
}