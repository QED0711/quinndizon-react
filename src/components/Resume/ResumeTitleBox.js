import React from 'react';

const ResumeTitleBox = (props) => {

    return(
        <div className={`main-title main-title-${props.focus}`}>
            <div className="main-title-align">
                <h2 id="resume-name">{props.content.name}</h2>
                <h5 id="resume-title">{props.content.title}</h5>
            </div>
        </div>             
    )

}

export default ResumeTitleBox;