import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css';
import ReactGA from 'react-ga';
import {Animated} from "react-animated-css";
import { TransitionGroup, CSSTransition} from 'react-transition-group'
import Landingpage from './Components/landing_page/landing_page.js';
import Trans from './transition.js';
import { motion } from "framer-motion"

const trackingId = "UA-186285153-3";

function App(){

    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);

    const loc = useLocation()

    return (      
      <div style = {{margin: "0px"}} className = 'App center'>

         
        <div>
              <div className = 'menu-top'>
                  <div className = 'menu-op'>
                    Portfolio '24
                  </div>

                  <div className = 'menu-op'>
                    <a style={{ textDecoration: 'none', color: 'black' }} href=''>
                      Get in Touch
                    </a>
                  </div>
              </div>
        </div>
        

        <Routes style = {{margin: "0px"}}>
          <Route style = {{margin: "0px"}} className = 'center' path="/portfolio" element={<Landingpage/>}/>
        </Routes>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet"/>



      </div>
    )
}


export default App;