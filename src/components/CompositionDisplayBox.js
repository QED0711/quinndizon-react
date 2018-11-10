import React from 'react'

const CompositionDisplayBox = (props) => {
    console.log(props)
    return(
        <div className="composition-display-box">
            <h3 className="composition-title">{props.currentComposition.title}</h3>
            <h5 className="composition-subtitle">{props.currentComposition.subtitle}</h5>
            {props.currentComposition.audio}
            {props.currentComposition.score}
        </div>
    )
}


export default CompositionDisplayBox;
