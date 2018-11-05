import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getHomeContent} from '../actions/content'

import SectionBanner from '../components/sectionBanner'

class HomePage extends Component {
    
    componentWillMount(){
        this.props.updateContent();    
    }
    
    render(){
        const content = this.props.state.content;
        const heading = this.props.state.heading 
        return(
            <div>
                <SectionBanner heading={heading} />
            </div>
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

