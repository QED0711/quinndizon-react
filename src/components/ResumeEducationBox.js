import React from 'react'

const ResumeEducationBox = (props) => {
    const education = props.education
    console.log(props)

    return(
        <div className="education-box">
            <div className="education-box-dates">
                <h4>{education.dates}</h4>
            </div>
            <div className="education-box-info">
                <h3>{education.degree}</h3>
            </div>
        </div>
    )
}

export default ResumeEducationBox;