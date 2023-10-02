import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import ReactGA from 'react-ga';
import LandingPage from './Components/newsletter_link/newsletter_link.js'



const trackingId = "UA-186285153-3";




function App(){

    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);
    
    return (      
      <div style = {{margin: "0px"}} className = 'App'>
        <div className = 'menu-top'>
          <div className = 'menu-op op-about'>
            ABOUT
          </div>
        </div>

        <div className = 'landing-page'>
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
              
            </div>
          </div>

        </div>

        <div className = 'menu-bottom'>
          <div className = 'menu-op op-blog'>
            BLOG
          </div>
          <div className = 'menu-op op-contact'>
            CONTACT
          </div>
        </div>
    
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer&display=swap" rel="stylesheet"/>

      </div>
    )
}


export default App;