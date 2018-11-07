import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getContactContent} from '../actions/content'

import SectionBanner from '../components/sectionBanner'
import EmailForm from '../components/EmailForm';

class ContactPage extends Component {
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
                <div className="contact-form">
                    <EmailForm />
                </div>
            </section>
        )
    }
}

function mapStateToProps(state){
    return {state: state}    
}

function mapDispatchToProps(dispatch){
    return {updateContent: () => dispatch(getContactContent())};
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage)