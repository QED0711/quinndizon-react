import React from 'react';

const ResumeExperienceBox = (props) => {
    
    const experienceBox = props.experienceBox;

    return(
        <div className="experience-box">
            <div className="experience-box-dates">
                <h4>{experienceBox.dates}</h4>
            </div>
            <div className="experience-box-info">
                <h3>{experienceBox.title}</h3>
                <h5>{experienceBox.subtitle}</h5>
                <ul>
                    {experienceBox.achievements.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default ResumeExperienceBox;