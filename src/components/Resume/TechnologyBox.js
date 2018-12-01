import React from 'react';

const TechnologyBox = (props) => {

    const tech = props.tech;

    return(
        <div className="technology-box" >
            <p className="skill-main">{tech.tech}</p>
            {
                tech.subItems.map((subItem, i) => {
                    return <p key={i} className="skill-info">- {subItem}</p>
                })
            }
            </div>
    )
}

export default TechnologyBox;