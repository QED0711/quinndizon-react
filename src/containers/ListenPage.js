import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { Route, Link } from "react-router-dom";

import {getListenContent, setCurrentComposition} from '../actions/content'

import SectionBanner from '../components/sectionBanner'
import CompositionTitleBox from '../components/CompositionTitleBox'
import CompositionDisplayBox from '../components/CompositionDisplayBox'

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

    findCompositionByTitle = (title) => {
        if(title){
            return this.props.state.content.filter(composition => {
                if(composition.title){
                    return composition.title.toLowerCase().split(' ').join("-") === title;
                }
            })
        }
    }

    render(){
        const content = this.props.state.route === "listen" ? this.props.state.content.map((c, i) => <CompositionTitleBox key={i} content={c} handleCompositionClick={this.handleCompositionClick}/>) : {};
        const heading = this.props.state.heading;
        const compositionPath = this.findCompositionByTitle(this.props.match.params.title) 
        const currentComposition = compositionPath ? compositionPath[0] : this.props.state.currentComposition
        console.log(compositionPath)
        return(
            <section id="content">
                <div className="content-heading">
                    <SectionBanner heading={heading} />
                </div>
                <div id="listen-content-grid">
                    {Array.isArray(content) && content}
                </div>
                <div id="current-composition">
                    {currentComposition && <CompositionDisplayBox currentComposition={currentComposition} />}
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
        setCurrentComposition: (composition) => dispatch(setCurrentComposition(composition))
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListenPage);
