import React from 'react';
import './about.css';
import {Animated} from "react-animated-css";
import { animated, useSpring } from '@react-spring/web'
import AboutMe from './aboutMe/aboutMe.js';
import CurrentRole from './currentRole/currentRole.js';
import GivingBack from './givingBack/givingBack.js';
import Research from './research/research.js';
import { useScroll } from "react-use-gesture";



function About(){


    return(
        <div className = 'about'>
         
         <div className = 'about-components'>
         <AboutMe/>
         </div>
        <div className = 'about-components'>
          <CurrentRole/>
        </div>
        <div className = 'about-components'>
          <GivingBack/>
        </div>
        <div className = 'about-components'>
          <Research/>
        </div>
         
           
        
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap" rel="stylesheet"/>      
        </div>
    );
    
}

export default About;