import React from 'react';
import './research1.css';
import 'tachyons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import al from './arrow-left.png';
import ar from './arrow-right.png';
import ad from './arrow-down.png';
import {Animated} from "react-animated-css";
import { Link as Link1, animateScroll as scroll } from "react-scroll";
import AboutR1 from './aboutR1/aboutR1.js';

class research1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
            <div className = 'research1'>
               <div>
                        <p className = 'arrow-r1 grow pointer dim'>
                        <Animated animationIn="fadeInRight" animationInDelay = {1300} animationOut="fadeInOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                            <Link to = "/work/journie" style={{ textDecoration: 'none', color: 'black' }}>
                                <img src = {al} width = '70px' height = 'auto'/>
                            </Link>
                        </Animated>
                        </p>
                        
                </div>

                <Animated animationIn="fadeInRight" animationInDelay = {500} animationOut="fadeInLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <div className = 'res1'>Explosion Consequence Analysis</div>
                </Animated>


               <div>
                    <p className = 'arrow-r1 grow pointer dim'>
                    <Animated animationIn="fadeInLeft" animationInDelay = {1300} animationOut="fadeInOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                        <Link to = "/work/research2" style={{ textDecoration: 'none', color: 'black' }}>
                            <img src = {ar} width = '70px' height = 'auto'/>
                        </Link>
                    </Animated>
                    </p>
                        
                </div>
            </div>

            <div>
            <div>
                <p className = 'arrow-down grow pointer dim'>
                <Animated animationIn="fadeInDown" animationInDelay = {1300} animationOut="fadeInOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <Link1 activeClass= 'active' to = 'aboutR1' smooth = {true} duration = {600} style={{ textDecoration: 'none', color: 'black' }}>
                            <img className = 'img-ad' src = {ad} width = '60px' height = 'auto'/>
                    </Link1>
                </Animated>
                </p>
                        
            </div>
            </div>

            <div className = 'aboutR1'>
                <AboutR1/>
            </div>





            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap" rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Play&display=swap" rel="stylesheet"></link>
        </div>
        );
    }
}

export default research1;