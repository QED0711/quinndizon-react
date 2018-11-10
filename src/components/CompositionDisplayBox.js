import React from 'react'

const CompositionDisplayBox = (props) => {
    const style = Object.assign({
        backgroundImage: `url(${props.currentComposition.imgSrc})`
    }, props.currentComposition.options)
    // const style = {
    //     backgroundImage: `url(${props.currentComposition.imgSrc})`
    // }
    console.log(props)
    return(
        <div className="composition-display-box">
            <div className="composition-display-heading" style={style}>
                <h3 className="composition-title">{props.currentComposition.title}</h3>
                <h5 className="composition-subtitle">{props.currentComposition.subtitle}</h5>
            </div>
            {props.currentComposition.audio}
            {props.currentComposition.score}
        </div>
    )
}


export default CompositionDisplayBox;
