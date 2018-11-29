import React from 'react';
import {Link} from 'react-router-dom'

const ResumeSidebarMusic = (props) => {
    
    const content = props.content;
    const contentFocus = props.contentFocus;
    
    return(
    <div className={`sidebar sidebar-${props.focus}`}>

        <div id="personal-info" className="sidebar-section">
            <h4 className="sidebar-section-heading">Contact Information</h4>
            <h5>Email</h5>
            <p>{content.contact.email}</p>
            <h5>Online</h5>
            <Link to="/"><p>quinndizon.com</p></Link>
            <a href={content.contact.linkedin} target="_blank"><p>linkedin</p></a>
        </div>
        <div className="sidebar-section">
            <h4 className="sidebar-section-heading">Skills {props.focus === 'programming' ? "& Technologies" : ""}</h4>
            <h5>{props.focus === 'music' ? "Professional" : "Technologies"}</h5>
            
                {contentFocus.skills.professional.map((skill, i) => {
                    return <p key={i}>{skill}</p>
                })}
            
            <h5>Interpersonal</h5>
            
                {contentFocus.skills.personal.map((skill, i) => {
                    return <p key={i}>{skill}</p>
                })}
            
        </div>

    </div>        
    )
}

export default ResumeSidebarMusic;