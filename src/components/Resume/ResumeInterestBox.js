import React from 'react';

const ResumeInterestBox = (props) => {
    const interest = props.interest

    return(
        <div className="interest-box">
            <div className="experience-box-info">
                <h3 className="experience-title">{interest.title}</h3>
                {interest.info.map((a, i) => <p key={i}>{a}</p>)}
                
            </div>
        </div>
    )


}

export default ResumeInterestBox;