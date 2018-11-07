import React from 'react';
import Sidebar from '../components/Sidebar';

const ResumeTemplate = (props) => {
    const content = props.content ? props.content : undefined;

    if(content){

        const contentFocus = props.focus === "music" ? content.musicContent : content.programmingContent

        return(
            <div className="resume-box">
                <div className="resume-intro">
                    <p>{contentFocus.intro}</p>
                </div>
                <Sidebar content={content} contentFocus={contentFocus}/>
            </div>
        );
    } else {
        return(
            <div className="resume-box"></div>
        )
    }
}

export default ResumeTemplate;