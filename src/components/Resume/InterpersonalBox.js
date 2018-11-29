import React from "react";

const InterpersonalBox = (props) => {
    const skill = props.skill;
    return (
        <div className="skill-box">
            <p className="skill-main">- {skill}</p>
        </div>
    )

}

export default InterpersonalBox;