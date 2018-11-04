import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './App.css';

import Navigation from './components/Navigation'

import HomePage from './containers/HomePage';
import ListenPage from './containers/ListenPage';
import EventsPage from './containers/EventsPage';
import ResumePage from './containers/ResumePage';
import ContactPage from './containers/ContactPage';


class App extends Component {
  componentDidMount(){

  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route path="/" exact component={HomePage} />
          <Route path="/listen" exact component={ListenPage} />
          <Route path="/events" exact component={EventsPage} />
          <Route path="/resume" exact component={ResumePage} />
          <Route path="/contact" exact component={ContactPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
