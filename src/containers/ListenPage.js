import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getListenContent} from '../actions/content'



class ListenPage extends Component {
    
    componentWillMount(){
        this.props.udateContent();
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
    return {udateContent: () => dispatch(getListenContent())};
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListenPage);
