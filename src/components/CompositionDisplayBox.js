import React from 'react'

const CompositionDisplayBox = (props) => {
    console.log(props)
    return(
        <div className="composition-display-box">
            <h3>{props.currentComposition.title}</h3>
            {props.currentComposition.audio}
            {props.currentComposition.score}
        </div>
    )
}


export default CompositionDisplayBox;
