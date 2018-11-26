import React from "react";

const ResumeIntro = (props) => {

    const contentFocus = props.contentFocus

    return(
        <div className="main-section resume-intro">
            <p>{contentFocus.intro}</p>
        </div>  
    )

}

export default ResumeIntro;