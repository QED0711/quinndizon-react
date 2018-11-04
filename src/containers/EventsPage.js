import React, { Component } from 'react';
import {connect} from 'react-redux'

import {getEventsContent} from '../actions/content';

class EventsPage extends Component {
    componentWillMount(){
        this.props.updateContent();
    }

    render(){
        const content = this.props.state.content;
        const heading = this.props.state.heading;
        return(
            <div>
                <h1>{heading.title}</h1>
                <h3>{heading.subtitle}</h3>
            </div>
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