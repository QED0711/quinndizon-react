import React from 'react';
import ResumeEducationBox from './ResumeEducationBox';

const ResumeEducation = (props) => {

    const contentFocus = props.contentFocus;

    return(
        <div className="main-section resume-education">
            <h2 className={`section-title section-title-${props.focus}`}>Education</h2>
            {
                contentFocus.education.map((ed, i) => {
                    return <ResumeEducationBox key={i} education={ed} />
                })
            }
        </div>    
    )

}
export default ResumeEducation;