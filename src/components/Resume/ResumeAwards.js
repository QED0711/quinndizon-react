import React from 'react';
import ResumeAwardsBox from './ResumeAwardsBox'

const ResumeAwards = (props) => {

    const contentFocus = props.contentFocus;
    const focus = props.focus;

    return(
        <div className="main-section resume-education">
            <h2 className={`section-title section-title-${focus}`}>Selected Honors & Awards</h2>
            {contentFocus.awards.map((awardsBox, i) => <ResumeAwardsBox key={i} awardsBox={awardsBox} />)}
        </div>
    )

}

export default ResumeAwards;