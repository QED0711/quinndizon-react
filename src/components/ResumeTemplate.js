import React from 'react';
import Sidebar from '../components/Sidebar';
import ResumeExperienceBox from './ResumeExperienceBox';
import ResumeEducationBox from './ResumeEducationBox';

const ResumeTemplate = (props) => {
    const content = props.content ? props.content : undefined;

    if(content){

        const contentFocus = props.focus === "music" ? content.musicContent : content.programmingContent

        return(
            <div className="resume-box">
                <Sidebar content={content} contentFocus={contentFocus}/>
                <div className="main-section resume-intro">
                    <p>{contentFocus.intro}</p>
                </div>
                <div className="main-body">
                    <div className="main-section resume-experience">
                        {props.focus === "music" ? <h2 className="section-title">Experience</h2> : <h2 className="section-title">Projects</h2>}
                        {
                            contentFocus.experience.map((experienceBox, i) => {
                                return <ResumeExperienceBox key={i} experienceBox={experienceBox} />
                            })
                        }       
                    </div>
                    <div className="main-section resume-education">
                        <h2 className="section-title">Education</h2>
                        {
                            contentFocus.education.map((ed, i) => {
                                return <ResumeEducationBox key={i} education={ed} />
                            })
                        }
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div className="resume-box"></div>
        )
    }
}

export default ResumeTemplate;