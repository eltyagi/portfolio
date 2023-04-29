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
import TrunkBG from './background-trunk/background-trunk.js';
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

      <div className = 'title-home'>
        LAKSHYA TYAGI
      </div>
      <div className = 'sub-title-home'>
        PORTFOLIO
      </div>

      <div className = 'home-content'>
        <div className = 'social-media-buttons'>
          <div className = 'social-media-icons'>Instagram</div>
          <div className = 'social-media-icons'>Github</div>
          <div className = 'social-media-icons'>LinkedIn</div>
        </div>

        <div className = 'trunk'>
          <TrunkBG/>
        </div>
      </div>

      <div className = 'sub-sub-title-home'>
        SOLUTIONS ENGINEER & DEVELOPER
      </div>
  

        {/*<div className = 'sphere'>
          <Animated animationInDelay = "900" animationInDuration = "900" animationIn="fadeInRight" animationOut="fadeOut" isVisible={true}>
            <Shape/>
          </Animated>
        </div>*/}  


      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Forum&display=swap" rel="stylesheet"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.trunk.min.js"></script>
    </div>
  );
  }
}

export default Home;
