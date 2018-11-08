import React from 'react';

const CompositionTitleBox = (props) => {
    const content = props.content
    const style = {
        backgroundImage: `url(${content.imgSrc})`,
    }
    return(
        <div className="composition-title-box" style={style} onClick={props.handleCompositionClick(content)}>
            <div className="composition-title-box-overlay">
                <h4>{content.title}</h4>
            </div>
        </div>
    )
}

export default CompositionTitleBox;