import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
    return(
        <nav>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/events">Events</Link>
        <br/>
        <Link to="/listen">Listen</Link>
        <br/>
        <Link to="/resume">Resume</Link>
        <br/>
        <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Navigation;