import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    constructor(props){
        super(props);

        this.state = {
            mobileMenu : false
        }
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.hideMobileMenu = this.hideMobileMenu.bind(this);
    }

    toggleMobileMenu(){
        this.setState({
            mobileMenu : !this.state.mobileMenu
        })
    }
    
    hideMobileMenu(){
        this.setState({
            mobileMenu : false
        });
    }

    render(){
        return(
            <div id="navigation">
                <nav>
                    <Link to="/quinndizon-react/"><h2>About</h2></Link> 
                    <Link to="/quinndizon-react/listen"><h2>Listen</h2></Link>
                    <Link to="/quinndizon-react/events"><h2>Events</h2></Link>
                    <Link to="/quinndizon-react/resume/music"><h2>Resume</h2></Link>
                    <Link to="/quinndizon-react/contact"><h2>Contact</h2></Link>
                </nav>
                <div className="mobile-nav-container">
                    <div id="mobile-nav-icon" onClick={this.toggleMobileMenu}></div>
                    <div id={`mobile-menu-${this.state.mobileMenu}`} onClick={this.hideMobileMenu}>
                      <Link className="mobile-menu-item" to="/quinndizon-react/">About</Link>
                      <Link className="mobile-menu-item" to="/quinndizon-react/listen">Listen</Link>
                      <Link className="mobile-menu-item" to="/quinndizon-react/events">Events</Link>
                      <Link className="mobile-menu-item" to="/quinndizon-react/resume/music">Resume</Link>
                      <Link className="mobile-menu-item" to="/quinndizon-react/contact">Contact</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;