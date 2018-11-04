import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getListenContent} from '../actions/content'
import listenContent from '../content/listenContent';


class ListenPage extends Component {
    
    componentWillMount(){
        this.props.udateContent();
    }
    
    render(){
        const content = this.props.state.content;
        return(
            <div>
                <h1>{content.title}</h1>
                <h3>{content.subtitle}</h3>
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
