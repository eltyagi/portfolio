import React from 'react';
import './transition.css';
import {Animated} from "react-animated-css";

class transition extends React.Component{
    constructor(props){
        super(props);
        console.log("Printing", this.props.duration)
        this.state = {
            transition: true
        }
    }

    componentDidMount(){
        setTimeout(()=> this.setState({transition: !this.state.transition}), 300)
    }

    render(){
        return (

        <Animated animationInDuration = "200" animationIn="slideInLeft" animationOutDelay = "600" animationOut="slideOutRight" animationOutDuration = "200" isVisible = {this.state.transition}>
        <div className = 'transition'></div> 
        </Animated>
        
        );
    }
}

export default transition;