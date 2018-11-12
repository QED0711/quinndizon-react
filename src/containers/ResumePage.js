import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getResumeContent, setResumeFocusMusic, setResumeFocusProgramming} from '../actions/content';

import SectionBanner from '../components/sectionBanner'
import ResumeFocus from '../components/ResumeFocus';
import ResumeTemplate from '../components/ResumeTemplate'

class Resume extends Component {
    constructor(props){
        super(props);
    }
    
    componentWillMount(){
        this.props.updateContent();
    }

    render(){
        const content = this.props.state.route === "resume" ? this.props.state.content : undefined;
        const heading = this.props.state.heading;
        const focus = this.props.match.params.focus
        return(
            <section id="content">
                <div className="content-heading">
                    <SectionBanner heading={heading} />
                </div>
                <div>
                    <ResumeFocus focus={focus} />
                </div>
                <div className="resume-content">
                    <ResumeTemplate content={content} focus={focus} />
                </div>
            </section>
        )
    }
}


function mapStateToProps(state){
    return {state: state};
}

function mapDispatchToProps(dispatch){
    return {
        updateContent: () => dispatch(getResumeContent()),
        focusMusic: () => dispatch(setResumeFocusMusic()),
        focusProgramming: () => dispatch(setResumeFocusProgramming())
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Resume);