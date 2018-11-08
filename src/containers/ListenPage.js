import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getListenContent} from '../actions/content'

import SectionBanner from '../components/sectionBanner'
import CompositionTitleBox from '../components/CompositionTitleBox'

class ListenPage extends Component {
    constructor(props){
        super(props);
        this.props.updateContent();

        this.handleCompositionClick = this.handleCompositionClick.bind(this);
    }
    
    handleCompositionClick = (composition) => {
        return () => {
            this.props.setCurrentComposition(composition); 
        }
    }

    render(){
        const content = this.props.state.route === "listen" ? this.props.state.content.map((c, i) => <CompositionTitleBox key={i} content={c} handleCompositionClick={this.handleCompositionClick}/>) : {};
        const heading = this.props.state.heading;
        return(
            <section id="content">
                <div className="content-heading">
                    <SectionBanner heading={heading} />
                </div>
                <div id="listen-content-grid">
                    {Array.isArray(content) && content}
                </div>
            </section>
        )
    }
}

function mapStateToProps(state){
    return {state: state}
}

function mapDispatchToProps(dispatch){
    return {
        updateContent: () => dispatch(getListenContent()),
        setCurrentComposition: (composition) => dispatch({
            type: "SET_CURRENT_COMPOSITION", 
            payload: {
                currentCompositionTitle: composition.title,
                currentCompositionScore: composition.scoreSrc,
                currentCompositionAudio: composition.audioSrc
            }
        })
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListenPage);
