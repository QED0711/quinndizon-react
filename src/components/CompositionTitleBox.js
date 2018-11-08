import React from 'react';

const CompositionTitleBox = (props) => {
    // console.log(props.content)
    const content = props.content
    const style = {
        // background: "rgba(255, 0, 0, 0.25)",
        backgroundImage: `url(${content.imgSrc})`,
    }
    return(
        <div className="composition-title-box" style={style}>
            <div className="composition-title-box-overlay">
                <h4>{content.title}</h4>
            </div>
        </div>
    )
}

export default CompositionTitleBox;