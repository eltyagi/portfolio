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


      <div className = 'home-content'>

        <div className = 'social-media-buttons'>
          <div className = 'social-media-icons'>Instagram</div>
          <div className = 'social-media-icons'>Github</div>
          <div className = 'social-media-icons'>LinkedIn</div>
        </div>

        <div className = 'home-intro'>
          <span className = 'home-intro-1'>Hi, I'm</span><br/>
          <span className = 'home-intro-2'>Lakshya</span><br/>
          <span className = 'home-intro-3'>A solutions engineer, educator and researcher.</span>

          <div className = 'newsletter-button'>
            Check out my newsletter!
          </div>
        </div>

        <div className = 'home-sphere'>
          <Shape/>
        </div>

        <div className = 'home-message'>
          I teach competence.<br/>
          I build seamless digital experiences.<br/>
          I bridge technology with business outcomes.<br/>
        </div>
      </div>
  

        {/*<div className = 'sphere'>
          <Animated animationInDelay = "900" animationInDuration = "900" animationIn="fadeInRight" animationOut="fadeOut" isVisible={true}>
            <Shape/>
          </Animated>
        </div>*/}  


      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Forum&display=swap" rel="stylesheet"/>

    </div>
  );
  }
}

export default Home;