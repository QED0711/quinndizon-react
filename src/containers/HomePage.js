import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getHomeContent} from '../actions/content'

import SectionBanner from '../components/sectionBanner'

import {TextBlock} from '../components/ContentBoxes';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.props.updateContent();
    }
    
    render(){
        const content = this.props.state.route === "home" ? this.props.state.content : {};
        const heading = this.props.state.heading; 
        return(
            <section id="content">
                <div className="content-heading">
                    <SectionBanner heading={heading} />
                </div>
                    {Array.isArray(content) && content.map((text, i) => <p key={i}>{text}</p>)}
            </section>
        )
    }
}

function mapStateToProps(state){
    return {state: state}
}

function mapDispatchToProps(dispatch){
    return {updateContent: () => dispatch(getHomeContent())}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

