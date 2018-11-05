import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getListenContent} from '../actions/content'

import SectionBanner from '../components/sectionBanner'
import WorkTitleBox from '../components/WorkTitleBox'

class ListenPage extends Component {
    
    componentWillMount(){
        this.props.udateContent();
    }
    
    render(){
        const content = this.props.state.route === "listen" ? this.props.state.content.map((c, i) => <WorkTitleBox key={i} content={c} />) : {};
        const heading = this.props.state.heading;
        return(
            <section id="content">
                <div className="content-heading">
                    <SectionBanner heading={heading} />
                </div>
                {Array.isArray(content) && content}
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
