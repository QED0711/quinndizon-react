import React, {Component} from 'react'

class CompositionDisplayBox extends Component{
    
    render(){
        const style = Object.assign({
            backgroundImage: `url(${this.props.currentComposition.imgSrc})`
        }, this.props.currentComposition.options)
        
        return(
            <div className="composition-display-box">
                <div className="composition-display-heading" style={style}>
                    <h3 className="composition-title">{this.props.currentComposition.title}</h3>
                    <h5 className="composition-subtitle">{this.props.currentComposition.subtitle}</h5>
                </div>
                {this.props.currentComposition.audio}
                {this.props.currentComposition.score}
            </div>
        )
    }
}


export default CompositionDisplayBox;
