import React from 'react';
import { Route, Link } from "react-router-dom";

const CompositionTitleBox = (props) => {
    const content = props.content
    const style = {
        backgroundImage: `url(${content.imgSrc})`,
        // backgroundPosition: "right 0px bottom -20px"
    }
    return(
        <div className="composition-title-box" style={style}>
            <Link to={`/listen/${content.title.toLowerCase().split(' ').join("-")}`} >
                <div className="composition-title-box-overlay">
                    <h2 className="composition-title">{content.title}</h2>
                    <h5 className="composition-subtitle">{content.subtitle}</h5>
                </div>
            </Link>
        </div>
    )
}

export default CompositionTitleBox;