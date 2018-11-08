import React, { Component } from 'react';
import {connect} from 'react-redux'

import {getEventsContent} from '../actions/content';

import SectionBanner from '../components/sectionBanner'
import EventBox from '../components/EventBox';

class EventsPage extends Component {
    constructor(props){
        super(props)
        this.props.updateContent();
    }

    render(){
        const content = this.props.state.route !== "events" ? undefined : this.props.state.content.map((event, i) => {
            return <EventBox key ={i} event={event} />
        }) ;
        
        const heading = this.props.state.heading;
        return(
            
            <section id="content">
                <div className="content-heading">
                    <SectionBanner heading={heading} />
                </div>
                <div id="event-content-grid">
                    {content}
                </div>
            </section>
        )
    }
}

function mapStateToProps(state){
    return {state: state}
}

function mapDispatchToProps(dispatch){
    return{
        updateContent: () => dispatch(getEventsContent()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);