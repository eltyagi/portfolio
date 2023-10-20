import React, { useCallback, useEffect, useState } from 'react';
import './landing_page.css';
import {Animated} from "react-animated-css";
import Newsletter from './newsletter_link/newsletter_link.js';

function LandingPage(){
    return(
        <div className = 'landingPage'>

          
            <div className = 'first-name'>
              <Animated animationInDuration = '1500' animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                Lakshya
              </Animated>
            </div>
          
          <div className = 'last'>
            <div className = 'last-name'>
              <Animated animationInDelay = '400' animationInDuration = '1500' animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                Tyagi
              </Animated>
            </div>
            

            <div className = 'desc'>
            <Animated animationInDelay = '700' animationInDuration = '1500' animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
              Solutions Engineer @ Cisco <br/>
              Educator @ MyCaptain
              <div className='hr'></div>
            </Animated>
            </div>

            <div className = 'newsletter'>
            <Animated animationInDelay = '1000' animationInDuration = '1500' animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
              <Newsletter/>
            </Animated>
            </div>
          </div>
        

          <div className = 'page-list'>
            <div className = 'projects page-list-box'>
            <Animated animationInDuration = '1000' animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <span className = 'page-list-num'>01</span><br/>
            Projects
            </Animated>
            </div>
            
            <div className = 'research page-list-box'>
            <Animated animationInDelay = '400' animationInDuration = '1000' animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <span className = 'page-list-num'>02</span><br/>
            Research
            </Animated>
            </div>

            <div className = 'resume page-list-box'>
            <Animated animationInDelay = '700' animationInDuration = '1000' animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <span className = 'page-list-num'>03</span><br/>
            Resume
            </Animated>
            </div>
          
          </div>
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet"/>
        </div>
    );
}

export default LandingPage;