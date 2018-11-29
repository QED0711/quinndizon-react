import React from 'react';

const SkillsBox = (props) => {

    const skill = props.skill;
    
    return(
        <div className="skill-box">
            <p className="skill-main">{skill.skill}</p>
            <p className="skill-info">{skill.info}</p>
        </div>
    )

} 

export default SkillsBox;