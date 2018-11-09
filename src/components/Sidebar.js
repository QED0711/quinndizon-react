import React from 'react';
import {Link} from 'react-router-dom'

const Sidebar = (props) => {
    
    const content = props.content;
    const contentFocus = props.contentFocus;
    
    return(
    <div className="sidebar">
        <h3>{content.name}</h3>
        <h5>{content.title}</h5>
        <div id="personal-info" className="sidebar-section">
            <h4 className="sidebar-section-heading">Contact Information</h4>
            <h5>Email</h5>
            <p>{content.contact.email}</p>
            <h5>Online</h5>
            <Link to="/"><p>quinndizon.com</p></Link>
            <a href={content.contact.linkedin} target="_blank"><p>linkedin</p></a>
        </div>
        <div className="sidebar-section">
            <h4 className="sidebar-section-heading">Relevant Skills</h4>
            <h5>Professional</h5>
            <ul>
                {contentFocus.skills.professional.map((skill, i) => {
                    return <li key={i}><p>{skill}</p></li>
                })}
            </ul>
            <h5>Personal</h5>
            <ul>
                {contentFocus.skills.personal.map((skill, i) => {
                    return <li key={i}><p>{skill}</p></li>
                })}
            </ul>
        </div>

    </div>        
    )
}

export default Sidebar;