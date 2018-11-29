import React from 'react';
import ResumeIntro from './Resume/ResumeIntro';
import ResumeTitleBox from './Resume/ResumeTitleBox';
import ResumeSidebarProgramming from './Resume/ResumeSidebarProgramming';
import ResumeProjects from './Resume/ResumeProjects';
import ResumeInterests from './Resume/ResumeInterests';
import ResumeEducation from './Resume/ResumeEducation';

const ResumeTemplateProgramming = (props) => {
    const content = props.content ? props.content : undefined;  

    if(content){

        const contentFocus = content.programmingContent

        return(
            <div className="resume-box">
                <ResumeTitleBox focus={props.focus} content={content} />       
                <ResumeSidebarProgramming content={content} focus={props.focus} contentFocus={contentFocus}/>
                <ResumeIntro contentFocus={contentFocus} />

                <div className="main-body">

                    <ResumeProjects contentFocus={contentFocus} focus={props.focus} />
                    <ResumeInterests contentFocus={contentFocus} focus={props.focus} />
                    <ResumeEducation contentFocus={contentFocus} focus={props.focus} />

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