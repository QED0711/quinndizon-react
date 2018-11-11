import React, { Component } from 'react';
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './css/App.css';
import './css/Navigation.css';
import './css/Listen.css'
import './css/Events.css'
import './css/Resume.css'
import './css/Contact.css'


import LandingBox from './components/LandingBox'
import Navigation from './components/Navigation'


import HomePage from './containers/HomePage';
import ListenPage from './containers/ListenPage';
import EventsPage from './containers/EventsPage';
import ResumePage from './containers/ResumePage';
import ContactPage from './containers/ContactPage';


class App extends Component {
  
  render() {
    const route = this.props.state.route
    // console.log(route)
    return (
      <Router>
        <div>
          <LandingBox />
          <Navigation route={route}/>

          <Route path="/" exact component={HomePage} />
          <Route path="/listen" exact component={ListenPage} />
          <Route path="/listen/:title" component={ListenPage} />
          <Route path="/events" exact component={EventsPage} />
          <Route path="/resume" exact component={ResumePage} />
          <Route path="/contact" exact component={ContactPage} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return({state})
}

const connector = connect(mapStateToProps);
const connectedCommponent = connector(App);


export default connectedCommponent;
