import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getResumeContent, setResumeFocusMusic, setResumeFocusProgramming} from '../actions/content';

import SectionBanner from '../components/sectionBanner'
import ResumeFocus from '../components/ResumeFocus';
import ResumeTemplate from '../components/ResumeTemplate'

class Resume extends Component {
    constructor(props){
        super(props);

        this.handleFocusMusic = this.handleFocusMusic.bind(this);
        this.handleFocusProgramming = this.handleFocusProgramming.bind(this);
    }
    
    componentWillMount(){
        this.props.updateContent();
    }

    handleFocusMusic = () => {
        this.props.focusMusic();
    }

    handleFocusProgramming(){
        this.props.focusProgramming();
    }

    render(){
        const content = this.props.state.route === "resume" ? this.props.state.content : undefined;
        const heading = this.props.state.heading;
        return(
            <section id="content">
                <div className="content-heading">
                    <SectionBanner heading={heading} />
                </div>
                <div>
                    <ResumeFocus handleFocusMusic={this.handleFocusMusic} handleFocusProgramming={this.handleFocusProgramming} />
                </div>
                <div className="resume-content">
                    {this.props.state.focus === "music" ? <ResumeTemplate content={content} focus={"music"} /> : <ResumeTemplate content={content} focus={"programming"} />}
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