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
            <span className = 'page-list-num'>01</span><br/>
            Projects
            </div>
            
            <div className = 'research page-list-box'>
            <span className = 'page-list-num'>02</span><br/>
            Research
            </div>

            <div className = 'resume page-list-box'>
            <span className = 'page-list-num'>03</span><br/>
            Resume
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