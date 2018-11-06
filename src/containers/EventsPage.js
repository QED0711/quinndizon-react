import React, { Component } from 'react';
import {connect} from 'react-redux'

import {getEventsContent} from '../actions/content';

import SectionBanner from '../components/sectionBanner'

class EventsPage extends Component {
    componentWillMount(){
        this.props.updateContent();
    }

    render(){
        const content = this.props.state.route === "events" ? this.props.state.content : undefined;
        console.log(content)
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
    return{updateContent: () => dispatch(getEventsContent())};
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);