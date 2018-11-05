import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getListenContent} from '../actions/content'

import SectionBanner from '../components/sectionBanner'

class ListenPage extends Component {
    
    componentWillMount(){
        this.props.udateContent();
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
    return {state: state}
}

function mapDispatchToProps(dispatch){
    return {udateContent: () => dispatch(getListenContent())};
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListenPage);
