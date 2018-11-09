import React from 'react';

const ResumeExperienceBox = (props) => {
    
    const experienceBox = props.experienceBox;

    return(
        <div className="experience-box">
            <div className="experience-box-dates">
                <h5>{experienceBox.dates}</h5>
            </div>
            <div className="experience-box-info">
                <h3 className="experience-title">{experienceBox.title}</h3>
                <h4 className="experience-subtitle">{experienceBox.subtitle}</h4>
                
                {experienceBox.achievements.map((a, i) => <p key={i}>{a}</p>)}
                
            </div>
        </div>
    );
};

export default ResumeExperienceBox;