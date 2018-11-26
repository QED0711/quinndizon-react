import React from 'react';
import Sidebar from '../components/Sidebar';
import ResumeIntro from './Resume/ResumeIntro';
import ResumeTitleBox from './Resume/ResumeTitleBox';
import ResumeEducation from './Resume/ResumeEducation';
import ResumeProjects from './Resume/ResumeProjects';

const ResumeTemplateProgramming = (props) => {
    const content = props.content ? props.content : undefined;  

    if(content){

        const contentFocus = content.programmingContent

        return(
            <div className="resume-box">
                <ResumeTitleBox focus={props.focus} content={content} />       
                <Sidebar content={content} focus={props.focus} contentFocus={contentFocus}/>
                <ResumeIntro contentFocus={contentFocus} />

                <div className="main-body">

                    <ResumeProjects contentFocus={contentFocus} focus={props.focus} />


                    <ResumeEducation contentFocus={contentFocus} focus={props.focus} />
                    {/* <div className="main-section resume-education">
                        <h2 className={`section-title section-title-programming`}>Education</h2>
                        {
                            contentFocus.education.map((ed, i) => {
                                return <ResumeEducationBox key={i} education={ed} />
                            })
                        }
                    </div> */}
                </div>
            </div>
        );
    } else {
        return(
            <div className="resume-box"></div>
        )
    }
}

export default ResumeTemplateProgramming;