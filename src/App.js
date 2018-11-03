import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './App.css';

import Navigation from './components/Navigation'

import Home from './components/Home';
import Listen from './components/Listen';
import Events from './components/Events';
import Resume from './components/Resume';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/listen" exact component={Listen} />
          <Route path="/events" exact component={Events} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/contact" exact component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
