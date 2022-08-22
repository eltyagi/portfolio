import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './home.css';
import "pathseg";
import Shape from './threejs.js'
import {Animated} from "react-animated-css";


class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      route: ''
    }
  }

  render(){
  return (
    <div className="home">
      
      <div className = 'home-text center'>
        <Animated animationInDelay = "300" animationInDuration = "1200" animationIn="slideInLeft" animationOut="fadeOut" isVisible={true}>
          <span>Resilient.</span><br/>
        </Animated>
        <Animated animationInDelay = "600" animationInDuration = "1200" animationIn="slideInLeft" animationOut="fadeOut" isVisible={true}>
          <span>Driven.</span><br/>
        </Animated>
        <Animated animationInDelay = "900" animationInDuration = "1200" animationIn="slideInLeft" animationOut="fadeOut" isVisible={true}>
          <span>Bold.</span>
        </Animated>
      <div className = 'home-text-sub'>
        <Animated animationInDelay = "300" animationInDuration = "1000" animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
          <span>I build digital experiences.</span><br/>
        </Animated>
        <Animated animationInDelay = "600" animationInDuration = "1000" animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
          <span>Enable competence, merit and ethics.</span><br/>
        </Animated>
        <Animated animationInDelay = "900" animationInDuration = "1000" animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
          <span>Bridge technology with business outcomes.</span><br/>
        </Animated>
      </div>
      <br/>
      </div>
      <Animated animationInDelay = "50" animationInDuration = "1100" animationIn="slideInLeft" animationOut="fadeOut" isVisible={true}>
        <div className='sphere center'>
          <Shape/>
        </div>
      </Animated>

          
      
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap" rel="stylesheet"></link>
    </div>



  );
  }
}

export default Home;
