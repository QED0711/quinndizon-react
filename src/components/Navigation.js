import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
    return(
        <nav>
            <p>
                <Link to="/">Home</Link> 
                <Link to="/listen">Listen</Link>
                <Link to="/events">Events</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </p>
        </nav>
    )
}

export default Navigation;