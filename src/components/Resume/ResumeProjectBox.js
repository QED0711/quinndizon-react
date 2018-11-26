import React from 'react';

const ResumeProjectBox = (props) => {
    const project = props.project
    return(
        <div className="experience-box">
            <div className="experience-box-dates">
                <h5>{project.dates}</h5>
            </div>
            <div className="experience-box-info">
                <h3 className="experience-title">{project.title}</h3>
                <h4 className="experience-subtitle">{project.website && <a target="_blank" href={project.website}>website</a> } <a target="_blank" href={project.github}>Github Repo</a></h4>
                
                {project.info.map((a, i) => <p key={i}>{a}</p>)}
                
            </div>
        </div>
    )

}

export default ResumeProjectBox;