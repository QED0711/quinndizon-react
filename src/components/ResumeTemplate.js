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
                <div className="resume-intro">
                    <p>{contentFocus.intro}</p>
                    <hr />
                </div>
                <div className="resume-experience">
                    {props.focus === "music" ? <h3>Experience</h3> : <h3>Projects</h3>}
                    {
                        contentFocus.experience.map((experienceBox, i) => {
                            return <ResumeExperienceBox key={i} experienceBox={experienceBox} />
                        })
                    }      
                    <hr />          
                </div>
                <div className="resume-education">
                    <h3>Education</h3>
                    {
                        contentFocus.education.map((ed, i) => {
                            return <ResumeEducationBox key={i} education={ed} />
                        })
                    }
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