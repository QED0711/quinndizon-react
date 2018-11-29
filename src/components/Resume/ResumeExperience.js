import React from 'react';
import ResumeExperienceBox from './ResumeExperienceBox';

const ResumeExperience = (props) => {

    const contentFocus = props.contentFocus
    const focus = props.focus

    return(
        <div className="main-section resume-experience">
            <h2 className={`section-title section-title-${focus}`}>Professional & Teaching Experience</h2>
            {
                contentFocus.experience.map((experienceBox, i) => {
                    return <ResumeExperienceBox key={i} experienceBox={experienceBox}/>
                })
            }       
        </div>        
    )

}

export default ResumeExperience;