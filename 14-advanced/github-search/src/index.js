import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// HashRouter is much easier to deploy than BrowserRouter
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Search from './components/Search';
import Profile from './components/Profile';

// routes is just a variable that contains JSX (it's not a function or class component)
const routes = (
  <Router>
    <Route exact path="/" component={ Home } />
    <Route path="/search" component={ Search } />
    <Route path="/details/:username" component={ Profile } />
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
