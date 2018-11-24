import React from 'react';
import Sidebar from '../components/Sidebar';
import ResumeExperienceBox from './ResumeExperienceBox';
import ResumeEducationBox from './ResumeEducationBox';
import ResumeAwardsBox from './ResumeAwardsBox';

const ResumeTemplate = (props) => {
    const content = props.content ? props.content : undefined;

    if(content){

        const contentFocus = props.focus === "music" ? content.musicContent : content.programmingContent

        return(
            <div className="resume-box">
                <div className={`main-title main-title-${props.focus}`}>
                    <div className="main-title-align">
                        <h2 id="resume-name">{content.name}</h2>
                        <h5 id="resume-title">{content.title}</h5>
                    </div>
                </div>            
                <Sidebar content={content} focus={props.focus} contentFocus={contentFocus}/>
                <div className="main-section resume-intro">
                    <p>{contentFocus.intro}</p>
                </div>
                <div className="main-body">
                    <div className="main-section resume-experience">
                        {props.focus === "music" ? <h2 className={`section-title section-title-${props.focus}`}>Experience</h2> : <h2 className={`section-title section-title-${props.focus}`}>Projects</h2>}
                        {
                            contentFocus.experience.map((experienceBox, i) => {
                                return <ResumeExperienceBox key={i} experienceBox={experienceBox}/>
                            })
                        }       
                    </div>
                    {
                        props.focus === 'music' &&
                            <div className="main-section resume-education">
                                <h2 className={`section-title section-title-${props.focus}`}>Honors & Awards</h2>
                                {contentFocus.awards.map((awardsBox, i) => <ResumeAwardsBox awardsBox={awardsBox} />)}
                            </div>
                        
                    }
                    <div className="main-section resume-education">
                        <h2 className={`section-title section-title-${props.focus}`}>Education</h2>
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