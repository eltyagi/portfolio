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
import About from './Components/about/about.js';
import Landingpage from './Components/landing_page/landing_page.js';
import Contact from './Components/contact/contact.js';
import Trans from './transition.js';

const trackingId = "UA-186285153-3";

function App(){

    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);

    const loc = useLocation()
    const [enableTransition, setEnableTransition] = useState(false)
    
    useEffect(() => {
      setEnableTransition(true);
      setTimeout(() => {
        setEnableTransition(false);
      }, 2000);
    }, []);

    const onClickTransition = useCallback(async() => {
      setEnableTransition(true);
      setTimeout(() => {
        setEnableTransition(false);
      }, 2000);
    }, [])

    return (      
      <div style = {{margin: "0px"}} className = 'App'>

          {
            enableTransition 
            ?
            (<div>
              <CSSTransition
                in = {enableTransition}
                timeout = {1500}
                classNames = "loaderTransition">
                <Trans duration = {enableTransition}/>
              </CSSTransition>
            </div>)  
          :
            (<div>
               <div className = 'menu-top'>
                <Link to = "/about" style={{ textDecoration: 'none', color: 'black' }}>
                  <div onClick = {onClickTransition} className = 'menu-op op-about'>
                    ABOUT
                  </div>
                </Link>
                </div>

                <div className = 'menu-bottom'>
                  <div className = 'menu-op op-blog'>
                    <a style={{ textDecoration: 'none', color: 'black' }} href='https://warriorsway98.wordpress.com/'>
                      BLOG
                    </a>
                  </div>
                  <Link style={{ textDecoration: 'none', color: 'black' }} to = "/contact">
                  <div onClick = {onClickTransition} className = 'menu-op op-contact'>
                    CONTACT
                  </div>
                  </Link>
                </div>
            </div>)
        }

        <TransitionGroup>
        <CSSTransition classNames='fade' key={loc.key}>
        <Routes style = {{margin: "0px"}}>
          <Route style = {{margin: "0px"}} path="/about" element={<About/>}/>
          <Route style = {{margin: "0px"}} path="/contact" element={<Contact/>}/>
          <Route style = {{margin: "0px"}} path="/" element={<Landingpage/>}/>
        </Routes>
        </CSSTransition>
        </TransitionGroup>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet"/>



      </div>
    )
}


export default App;