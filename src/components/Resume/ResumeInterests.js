import React from 'react';

const ResumeInterests = (props) => {
    const contentFocus = props.contentFocus;
    const focus = props.focus;

    return(
        <div className="main-section resume-interests">
            <h2 className={`section-title section-title-${focus}`}>Interests</h2>

        </div>
    )
}

export default ResumeInterests;