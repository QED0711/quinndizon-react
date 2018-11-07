import React from 'react';

const ResumeTemplate = (props) => {
    const content = props.content ? props.content : undefined;

    if(content){

        const contentFocus = props.focus === "music" ? content.musicContent : content.programmingContent

        return(
            <div className="resume-box">
                <div className="sidebar">
                    <h3>{content.name}</h3>
                    <h5>{content.title}</h5>
                    <div id="personal-info" className="sidebar-section">
                        <h4 className="sidebar-section-heading">Personal Information</h4>
                        <h5>Address</h5>
                        <p>{content.contact.address}</p>
                        <h5>Email</h5>
                        <p>{content.contact.email}</p>
                        <h5>Phone</h5>
                        <p>{content.contact.phone}</p>
                        <h5>Website</h5>
                        <p>{content.contact.website}</p>
                    </div>
                    <div className="sidebar-section">
                        <h4 className="sidebar-section-heading">Relevant Skills</h4>
                        <h5>Professional</h5>
                        <ul>
                            {contentFocus.skills.professional.map((skill, i) => {
                                return <li key={i}>{skill}</li>
                            })}
                        </ul>
                        <h5>Personal</h5>
                        <ul>
                            {contentFocus.skills.personal.map((skill, i) => {
                                return <li key={i}>{skill}</li>
                            })}
                        </ul>
                    </div>
    
                </div>
            </div>
        );
    } else {
        return(
            <div className="resume-box"></div>
        )
    }
}

export default ResumeTemplate;