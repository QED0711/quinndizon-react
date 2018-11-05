import React from 'react';

const WorkTitleBox = (props) => {
    const content = props.content
    return(
        <div className="title-box">
            <h4>{content.title}</h4>
        </div>
    )
}

export default WorkTitleBox;