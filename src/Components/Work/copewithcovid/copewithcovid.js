import React from 'react';
import './copewithcovid.css';
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
import CWC from './aboutCWC/aboutCWC.js';

class copewithcovid extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
        <div>
            <div className = 'copewithcovid'>
               <div>
                        <p className = 'arrow grow pointer dim'>
                        <Animated animationIn="fadeInRight" animationInDelay = {1300} animationOut="fadeInOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                            <Link to = "/experience" style={{ textDecoration: 'none', color: 'black' }}>
                                <img alt = "" src = {al} width = '150px' height = 'auto'/>
                            </Link>
                        </Animated>
                        </p>
                        
                </div>

                <Animated animationIn="fadeInRight" animationInDelay = {500} animationOut="fadeInLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <div className = 'cwc'>Cope With Covid</div>
                </Animated>


               <div>
                    <p className = 'arrow grow pointer dim'>
                    <Animated animationIn="fadeInLeft" animationInDelay = {1300} animationOut="fadeInOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                        <Link to = "/work/journie" style={{ textDecoration: 'none', color: 'black' }}>
                            <img alt = "" src = {ar} width = '150px' height = 'auto'/>
                        </Link>
                    </Animated>
                    </p>
                        
                </div>
            </div>


            <div>
            <div>
                <p className = 'arrow-down grow pointer dim'>
                <Animated animationIn="fadeInDown" animationInDelay = {1300} animationOut="fadeInOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                    <Link1 activeClass= 'active' to = 'aboutCWC' smooth = {true} duration = {600} style={{ textDecoration: 'none', color: 'black' }}>
                            <img className = 'img-ad' src = {ad}/>
                    </Link1>
                </Animated>
                </p>
                        
            </div>
            </div>
          
                                                            


            <div className = 'aboutCWC'>
                <CWC/>
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

export default copewithcovid;