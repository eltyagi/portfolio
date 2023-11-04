import React, { useCallback, useEffect, useState } from 'react';
import './landing_page.css';
import {Animated} from "react-animated-css";
import Newsletter from './newsletter_link/newsletter_link.js';

function LandingPage(){
    return(
        <div className = 'landingPage'>

          
            <div className = 'first-name'>
                Lakshya
            </div>
          
          <div className = 'last'>
            <div className = 'last-name'>
                Tyagi
            </div>
          
            <div className = 'desc'>
              Solutions Engineer @ Cisco <br/>
              Educator @ MyCaptain
              <div className='hr'></div>
            </div>

            <div className = 'newsletter'>
              <Newsletter/>
            </div>
          </div>
        

          <div className = 'page-list'>
            <div className = 'projects page-list-box'>
            <a style={{ textDecoration: 'none', color: 'black' }} href='https://github.com/Lakshya3190'>
            <span className = 'page-list-num'>01</span><br/>
            Projects
            </a>
            </div>
            
            <div className = 'research page-list-box'>
            <a style={{ textDecoration: 'none', color: 'black' }} href = "https://www.researchgate.net/scientific-contributions/Lakshya-Tyagi-2160566907">
            <span className = 'page-list-num'>02</span><br/>
            Research
            </a>
            </div>

            <div className = 'resume page-list-box'>
            <a style={{ textDecoration: 'none', color: 'black' }} href = 'https://drive.google.com/file/d/1ofZxv1Vs9qZVKwJZOkUOPrVCkRtACDLl/view?usp=sharing'>
            <span className = 'page-list-num'>03</span><br/>
            Resume
            </a>
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