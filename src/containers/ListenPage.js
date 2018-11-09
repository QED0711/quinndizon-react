import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route } from "react-router-dom";

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

    render(){
        const content = this.props.state.route === "listen" ? this.props.state.content.map((c, i) => <CompositionTitleBox key={i} content={c} handleCompositionClick={this.handleCompositionClick}/>) : {};
        const heading = this.props.state.heading;
        const currentComposition = this.props.state.currentComposition;
        // const currentComposition = 
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
                {console.log(this.props.match)}
                <Route path={`${this.props.match.path}/:id`} render={console.log("rendered")} />
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
