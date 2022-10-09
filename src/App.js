import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { TransitionGroup, CSSTransition} from 'react-transition-group'
import { useLocation } from 'react-router-dom'
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import Home from './Components/Home/home.js';
import About from './Components/About/about.js';
import Trans from './transition.js';
import Projects from './Components/Work/work.js'
import {Animated} from "react-animated-css";
import CopeWithCovid from './Components/Work/copewithcovid/copewithcovid.js';
import Journie from './Components/Work/journie/journie.js';
import Research1 from './Components/Work/research1/research1.js';
import Research2 from './Components/Work/research2/research2.js';
import Research3 from './Components/Work/research3/research3.js';
import Contact from './Components/Contact/contact.js';
import Menu from './Components/Menu/menu.js';


const trackingId = "UA-186285153-3";




function App(){


    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);
  

    const location = useLocation()
    const [enableTransition, setEnableTransition] = useState(false)
    
    useEffect(() => {
      setEnableTransition(true);
      setTimeout(() => {
        setEnableTransition(false);
      }, 1000);
    }, []);

    const onClickTransition = useCallback(async() => {
      setEnableTransition(true);
      setTimeout(() => {
        setEnableTransition(false);
      }, 1000);
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
            <div className = 'nav'>
            
            <Animated animationInDelay = "100" animationInDuration = "1200" animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
              <Link to = "/" style={{ textDecoration: 'none', color: 'black' }}>
                <div onClick = {onClickTransition} className = 'nav-point logo-name'>LakshyaTyagi.</div>
              </Link>
            </Animated>
            <div className = 'nav-content'>
            
            <Animated animationInDelay = "100" animationInDuration = "1200" animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
                <div className = 'nav-point-menu inner-nav menu'>
                    <Link to = "/about" style={{ textDecoration: 'none', color: 'black' }}>
                      <div onClick = {onClickTransition} className = 'nav-point-menu about-opt'>ABOUT<div className = 'underline'></div></div>
                    </Link>
                      <div className = 'nav-point-menu blog-opt'>BLOG<div className = 'underline'></div></div>
                    <Link to = "/contact" style={{ textDecoration: 'none', color: 'black' }}>
                      <div onClick = {onClickTransition} className = 'nav-point-menu contact-opt'>RESUME<div className = 'underline'></div></div>
                    </Link>
                    <div className = 'nav-point-menu blog-opt'>CONTACT<div className = 'underline'></div></div>
                  </div>
            </Animated>
            
            <Link to = "/menu" style={{ textDecoration: 'none', color: 'black' }}>
              <Animated animationInDelay = "100" animationInDuration = "1200" animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
                  <div onClick = {onClickTransition} className = 'nav-point menu-page'><div id = 'line1' className = 'line1'></div><div id = 'line2' className = 'line2'></div></div>
              </Animated>
            </Link>
              </div>
          </div>

            <TransitionGroup>
            <CSSTransition timeout={30} classNames='fade' key={location.key}>
              <Routes location={location} style = {{margin: "0px"}}>
                <Route style = {{margin: "0px"}} path="/menu" element={<Menu/>}/>
                <Route style = {{margin: "0px"}} path="/contact" element={<Contact/>}/>
                <Route style = {{margin: "0px"}} path="/projects" element={<Projects/>}/>
                <Route style = {{margin: "0px"}} path="/about" element={<About/>}/>
                <Route style = {{margin: "0px"}} path="/" element={<Home/>}/>
              </Routes>
            </CSSTransition>
            </TransitionGroup>
          </div>
        )}

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&family=Poppins:wght@300&display=swap" rel="stylesheet"/>
      </div>
    )
}


export default App;