import GlobalNavigation from './components/GlobalNavigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FbComposer  from './components/FbComposer.js';
import FbVideoPager from './components/FbVideoPager.js';
import FbStoriesPager from './components/FbStoriesPager.js';
import './App.css';

function App() {
  return (
    <BrowserRouter className="App">
      <GlobalNavigation/>
      <FbStoriesPager/>
      <FbComposer/>
      <FbVideoPager/>
    </BrowserRouter>
  );
}

export default App;
