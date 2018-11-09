import React from 'react';
import { Route, Link } from "react-router-dom";

const CompositionTitleBox = (props) => {
    const content = props.content
    const style = {
        backgroundImage: `url(${content.imgSrc})`,
    }
    return(
        <div className="composition-title-box" style={style}>
            <Link to={`/listen/${content.title.toLowerCase().split(' ').join("-")}`} >
                <div className="composition-title-box-overlay">
                    <h2>{content.title}</h2>
                </div>
            </Link>
        </div>
    )
}

export default CompositionTitleBox;