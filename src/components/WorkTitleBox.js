import React from 'react';

const WorkTitleBox = (props) => {
    console.log(props.content)
    const content = props.content
    const style = {
        background: `url(${content.imgSrc})`,
    }
    return(
        <div className="work-title-box" style={style}>
            <h4>{content.title}</h4>
        </div>
    )
}

export default WorkTitleBox;