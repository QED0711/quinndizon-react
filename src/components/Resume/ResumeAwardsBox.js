import React from 'react';

const ResumeAwardsBox = (props) => {
    const award = props.awardsBox
    console.log(award)
    return (
        <div className="awards-box">
        <div className="awards-box-dates">
            <h5>{award.dates}</h5>
        </div>
        <div className="awards-box-info">
            <h3>{award.title}</h3>
            <h4 className="awards-subtitle">{award.subtitle}</h4>
            <p>{award.info}</p>
        </div>
    </div>

    )
}

export default ResumeAwardsBox;