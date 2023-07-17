import React, { useCallback, useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import Trans from './transition.js';
import './menu.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import {Animated} from "react-animated-css";
import TrunkBG_Alt from './background-trunk/background-trunk.js';

function Menu(){

    const [enableTransition, setEnableTransition] = useState(false)
    

    const onClickTransition = useCallback(async() => {
      setEnableTransition(true);
      setTimeout(() => {
        setEnableTransition(false);
      }, 1000);
    }, [])

    return(
        <div className = 'about'>
            {
                enableTransition
                ?
                (
                    <div>
                    <CSSTransition
                    in = {enableTransition}
                    timeout = {1500}
                    classNames = "loaderTransition">
                    <Trans duration = {enableTransition}/>
                    </CSSTransition>
                    </div>
                )
                : (
                    <div className='about-component'>

                        <div className = 'about-me'>
                        <span className = 'about-me-1'><u className = 'onClick-text'>Hi, I’m Lakshya</u></span><span className = 'about-body'>. I am a solutions engineer @ Cisco, based out of Bangalore, India. I transform how organisations communicate, 
                        collaborate, provision and grow. My day-to-day involves conversations with account teams and <u className = 'onClick-text'>customers</u> to understand how code 
                        can solve their business challenges, and then developing customised PoVs to directly influence massive deals.</span>
                        <span className = 'about-me-1'> I am a consultant, developer and innovator, all in one.</span><span className = 'about-body'>When not at work, I am ideating, 
                        or building <u className = 'onClick-text'>side projects</u>, <u className = 'onClick-text'>teaching machine learning</u>, working on 
                        research projects or using my body to transcend my perceived limits. I am never free but never busy. At my very core, I am a soldier, 
                        driven by the need to serve something larger than myself, and fascinated by anything martial. Most of my <u className = 'onClick-text'>research work</u> explores the 
                        applications of machine learning and soft-computing to manage the fog of war. I am also an avid <u className = 'onClick-text'>gearhead</u>, and need my tech to be on-point, 
                        always. With Mac at work and <u className = 'onClick-text'>PC</u> at home, I have made technology an extension of my capabilities. Let’s talk tech and collaborative opportunities. 
                        <u className = 'onClick-text'>Reach out!</u></span>
                        </div>

                    </div>
                )
            }


      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Forum&display=swap" rel="stylesheet"/>
            
        </div>
    );
}


export default Menu;