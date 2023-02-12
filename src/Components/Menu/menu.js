import React, { useCallback, useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import Trans from './transition.js';
import './menu.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import {Animated} from "react-animated-css";

function Menu(){

    const [enableTransition, setEnableTransition] = useState(false)
    

    const onClickTransition = useCallback(async() => {
      setEnableTransition(true);
      setTimeout(() => {
        setEnableTransition(false);
      }, 1000);
    }, [])

    return(
        <div className = 'menu-component'>
            {
                enableTransition
                ?
                (
                    <div>
                    <CSSTransition
                    in = {enableTransition}
                    timeout = {1500}
                    classNames = "loaderTransition">
                    <Trans duration = {enableTransition}/>
                    </CSSTransition>
                    </div>
                )
                : (
                    <div className='menu-component-options'>
                        <div className = 'menu-component-opt'>
                        <Animated animationInDelay = "100" animationInDuration = "1200" animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
                            <Link to = "/about" style={{ textDecoration: 'none', color: 'black' }}>
                                <div className = 'menu-component-options-about'>
                                    About
                                    
                                </div>
                            </Link>
                        </Animated>

                        <Animated animationInDelay = "100" animationInDuration = "1200" animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
                            <Link to = "/projects" style={{ textDecoration: 'none', color: 'black' }}>
                                <div onClick = {onClickTransition} className = 'menu-component-options-about'>
                                    My Work
                                </div>
                            </Link>
                        </Animated>

                        <Animated animationInDelay = "100" animationInDuration = "1200" animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
                            <Link to = "/projects" style={{ textDecoration: 'none', color: 'black' }}>
                                <div className = 'menu-component-options-projects'>
                                    Newsletter
                                    
                                </div>
                            </Link>
                        </Animated>

                        <Animated animationInDelay = "100" animationInDuration = "1200" animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
                            <Link to = "/contact" style={{ textDecoration: 'none', color: 'black' }}>
                                <div className = 'menu-component-options-blog'>
                                    Contact
                                </div>
                            </Link>
                        </Animated>

                        <Animated animationInDelay = "100" animationInDuration = "1200" animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
                            <Link to = "/blog" style={{ textDecoration: 'none', color: 'black' }}>
                                <div className = 'menu-component-options-contact'>
                                    Blog
                                    <div className = 'footer' style = {{'display': 'flex'}}>
                                    <div className='all-rights-reserved'>
                                        <br/>© 2022. All Rights Reserved.
                                    </div>

                                </div>
                                    

                                </div>
                            </Link>
                        </Animated>

                        </div>
                    </div>
                )
            }


<link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Forum&display=swap" rel="stylesheet"/>
            
        </div>
    );
}


export default Menu;