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
import github from './github.png';
import instagram from './instagram.png';
import linkedin from './linkedin.png';
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
          <a style = {{textDecoration: 'None'}} href = "https://github.com/Lakshya3190">
            <img className = 'social-media-icons icon-1' src = {github} width='40px' height='40px'/>
          </a>

          <a style = {{textDecoration: 'None'}} href = "https://instagram.com/lakshya_cozi?igshid=MmIzYWVlNDQ5Yg==">
            <img className = 'social-media-icons icon-2' src = {instagram} width='40px' height='40px'/>
          </a>

          <a style = {{textDecoration: 'None'}} href = "https://www.linkedin.com/in/lakshyatyagi/">
            <img className = 'social-media-icons icon-3' src = {linkedin} width='40px' height='40px'/>
          </a>
        </div>

        <div className = 'trunk'>
          <TrunkBG/>
        </div>

        <div className = 'label-icons'>
          <div className = 'labels-hp icon-1'>01</div>
          <div className = 'labels-hp icon-2'>02</div>
          <div className = 'labels-hp icon-3'>03</div>
        </div>
      </div>

      <div className = 'sub-sub-title-home'>
        Solutions Engineer & Developer
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
