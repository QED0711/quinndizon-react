import React from 'react';
import ResumeProjectBox from './ResumeProjectBox';

const ResumeProjects = (props) => {

    const contentFocus = props.contentFocus;
    const focus = props.focus;

    return(
        <div className="main-section resume-experience">
            <h2 className={`section-title section-title-${focus}`}>Experience & Recent Projects</h2>
            {
                contentFocus.experience.map((project, i) => {
                    return <ResumeProjectBox key={i} project={project}/>
                })
            }       
        </div>   
    )

}

export default ResumeProjects;