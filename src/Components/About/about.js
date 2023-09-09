import React, { useCallback, useEffect, useState } from 'react';
import './about.css';
import "animate.css/animate.min.css";
import AboutLanding from './about_landing/about_landing.js';
import Current from './current/current.js';
import Research from './research/research.js'
import { AnimationOnScroll } from 'react-animation-on-scroll';


function Menu(){

    return(
        <div className = 'about'>

          
            <div className = 'aboutlanding-component'>
              <AboutLanding/>
            </div>
          

          <div className = 'current-component'>
              <Current/>
          </div>
        

          <div className = 'research-component'>
              <Research/>
          </div>
          


                    


        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Forum&display=swap" rel="stylesheet"/>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&family=Ubuntu:wght@700&display=swap" rel="stylesheet"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans:wght@100&family=Rubik:wght@300&family=Ubuntu:wght@700&display=swap" rel="stylesheet"></link>
            
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans:wght@100;600&family=Great+Vibes&family=Nunito+Sans:opsz,wght@6..12,800&family=Rubik:wght@300&family=Ubuntu:wght@700&display=swap" rel="stylesheet"></link>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

        </div>
    );
}


export default Menu;