import React, { Component } from 'react';
import {connect} from 'react-redux';

class HomePage extends Component {
    componentWillMount(){
        console.log(this.props)
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
const connector = connect(mapStateToProps)
const connectedComponent = connector(HomePage)

export default connectedComponent;