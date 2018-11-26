import React from 'react'

const ResumeEducationBox = (props) => {
    const education = props.education
    console.log(props)

    return(
        <div className="education-box">
            <div className="education-box-dates">
                <h5>{education.dates}</h5>
            </div>
            <div className="education-box-info">
                <h3>{education.degree}</h3>
                <h4 className="education-school">{education.school}</h4>
            </div>
        </div>
    )
}

export default ResumeEducationBox;