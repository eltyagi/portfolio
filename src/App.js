import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import ReactGA from 'react-ga';
import LandingPage from './Components/newsletter_link/newsletter_link.js'
import NewsLetter from './Components/newsletter_link/newsletter_link.js'



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
              <NewsLetter/>
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
        <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet"/>



      </div>
    )
}


export default App;