import React from 'react';

import ResumeIntro from './Resume/ResumeIntro';
import ResumeTitleBox from './Resume/ResumeTitleBox';
import ResumeSidebarMusic from './Resume/ResumeSidebarMusic';
import ResumeEducation from './Resume/ResumeEducation';
import ResumeExperience from './Resume/ResumeExperience';
import ResumeAwards from './Resume/ResumeAwards';

const ResumeTemplateMusic = (props) => {
    const content = props.content ? props.content : undefined;

    if(content){

        const contentFocus = content.musicContent;

        return(
            <div className="resume-box">
                <ResumeTitleBox focus={props.focus} content={content} />

                <ResumeSidebarMusic content={content} focus={props.focus} contentFocus={contentFocus}/>
                <ResumeIntro contentFocus={contentFocus} />
                
                <div className="main-body">

                    <ResumeEducation contentFocus={contentFocus} focus={props.focus} />
                    <ResumeExperience contentFocus={contentFocus} focus={props.focus} />
                    <ResumeAwards contentFocus={contentFocus} focus={props.focus} />

                </div>
            </div>
        );
    } else {
        return(
            <div className="resume-box"></div>
        )
    }
}

export default ResumeTemplateMusic;