import React from 'react';
import {Link} from 'react-router-dom'

import SkillsBox from './SkillsBox';
import InterpersonalBox from './InterpersonalBox';

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
            <h4 className="sidebar-section-heading">Skills</h4>
            <hr/>
            <h4>Professional</h4>
            <hr/>
            
                {contentFocus.skills.professional.map((skill, i) => {
                    return <SkillsBox key={i} skill={skill} />
                })}
            
            <hr/>
            <h4>Interpersonal</h4>
            <hr/>
            
                {contentFocus.skills.personal.map((skill, i) => {
                    return <InterpersonalBox key={i} skill={skill} />
                })}
        </div>

    </div>        
    )
}

export default ResumeSidebarMusic;