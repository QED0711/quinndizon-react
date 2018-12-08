import React from 'react';
import ResumeInterestBox from './ResumeInterestBox';

const ResumeInterests = (props) => {
    const contentFocus = props.contentFocus;
    const focus = props.focus;

    return(
        <div className="main-section resume-interests">
            <h2 className={`section-title section-title-${focus}`}>Interests</h2>
            <div className="resume-interest-boxes">
                {
                    contentFocus.interests.map((interest, i) => {
                        return <ResumeInterestBox key={i} interest={interest}/>
                    })
                }         
            </div>
        </div>
    )
}

export default ResumeInterests;