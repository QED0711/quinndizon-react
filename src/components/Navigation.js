import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
    return(
        <nav>
            <Link to="/">
                <h2>Home</h2>
            </Link> 
            <Link to="/listen"><h2>Listen</h2></Link>
            <Link to="/events"><h2>Events</h2></Link>
            <Link to="/resume"><h2>Resume</h2></Link>
            <Link to="/contact"><h2>Contact</h2></Link>
        </nav>
    )
}

export default Navigation;