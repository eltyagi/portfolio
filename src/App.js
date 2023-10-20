import React, { useCallback, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css';
import ReactGA from 'react-ga';
import {Animated} from "react-animated-css";
import About from './Components/about/about.js';
import Landingpage from './Components/landing_page/landing_page.js';
 
const trackingId = "UA-186285153-3";

function App(){

    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);
    
    return (      
      <div style = {{margin: "0px"}} className = 'App'>
        <div className = 'menu-top'>
        <Link to = "/about" style={{ textDecoration: 'none', color: 'black' }}>
          <div className = 'menu-op op-about'>
            ABOUT
          </div>
        </Link>
        </div>

        <div className = 'menu-bottom'>
          <div className = 'menu-op op-blog'>
            BLOG
          </div>
          <div className = 'menu-op op-contact'>
            CONTACT
          </div>
        </div>

        <Routes style = {{margin: "0px"}}>
          <Route style = {{margin: "0px"}} path="/about" element={<About/>}/>
          <Route style = {{margin: "0px"}} path="/" element={<Landingpage/>}/>
        </Routes>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet"/>



      </div>
    )
}


export default App;