import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getContactContent} from '../actions/content'

import SectionBanner from '../components/sectionBanner'

class ContactPage extends Component {
    componentWillMount(){
        this.props.dispatch(getContactContent())
    }

    render(){
        const content = this.props.state.content;
        const heading = this.props.state.heading;
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
    return {dispatch: dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage)