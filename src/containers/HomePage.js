import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getHomeContent} from '../actions/content'

class HomePage extends Component {
    
    componentWillMount(){
        this.props.updateContent();
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
    return {updateContent: () => dispatch(getHomeContent())}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

