import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getResumeContent} from '../actions/content';

import SectionBanner from '../components/sectionBanner'


class Resume extends Component {
    componentWillMount(){
        this.props.updateContent();
    }

    render(){
        const content = this.props.state.content;
        const heading = this.props.state.heading;

        return(
            <section id="content">
                <div className="content-heading">
                    <SectionBanner heading={heading} />
                </div>
            </section>
        )
    }
}


function mapStateToProps(state){
    return {state: state};
}

function mapDispatchToProps(dispatch){
    return {updateContent: () => dispatch(getResumeContent())};
  }

export default connect(mapStateToProps, mapDispatchToProps)(Resume);