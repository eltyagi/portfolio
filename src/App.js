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
import Trans from './transition.js';
import {Animated} from "react-animated-css";
import Contact from './Components/Contact/contact.js';
import About from './Components/About/about.js';
import logo from './logo_main.png'


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
            <div className = 'nav'>
            
              <div className = 'menu-top'>
                <div>
                    <Link to = "/" style={{ textDecoration: 'none', color: 'black' }}>
                      <Animated animationInDelay = "100" animationInDuration = "1200" animationIn="fadeInDown" isVisible={true}>
                        <img src = {logo} onClick = {onClickTransition} className = 'nav-point logo-name'/>
                      </Animated>
                    </Link>
                  
                </div>

                <div>
                      <Link to = "/about" style={{ textDecoration: 'none', color: 'black' }}>
                        <Animated animationInDelay = "100" animationInDuration = "1200" animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
                          <div  onClick = {onClickTransition} className = 'about-op'>ABOUT<br/><span className = 'op-reveal-responsive'>ABOUT</span></div>
                        </Animated>
                      </Link>
                </div>
              </div>

              <div className = 'menu-bottom'>
                <div>
                  <Animated animationInDelay = "100" animationInDuration = "1200" animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                      <div className = 'blog-op'><a  style = {{textDecoration: 'None', color: "white"}} className = 'blog-link' href = "https://warriorsway98.wordpress.com/">BLOG</a><br/><span className = 'op-reveal-responsive'>BLOG</span></div>
                  </Animated>
                </div>

                <div>
                  <Link to = "/contact" style={{ textDecoration: 'none', color: 'black' }}>
                    <Animated animationInDelay = "100" animationInDuration = "1200" animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                      <div onClick = {onClickTransition} className = 'contact-op'>CONTACT<br/><span className = 'op-reveal-responsive'>CONTACT</span></div>
                    </Animated>
                  </Link>
                </div>
              </div>
              
          </div>

            <TransitionGroup>
              <CSSTransition timeout={30} classNames='fade' key={location.key}>
                <Routes location={location} style = {{margin: "0px"}}>
                  <Route style = {{margin: "0px"}} path="/contact" element={<Contact/>}/>
                  <Route style = {{margin: "0px"}} path="/about" element={<About/>}/>
                  <Route style = {{margin: "0px"}} path="/" element={<Home/>}/>
                </Routes>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )}

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Forum&display=swap" rel="stylesheet"/>
      </div>
    )
}


export default App;