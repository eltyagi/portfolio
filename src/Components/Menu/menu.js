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
import TrunkBG_Alt from './background-trunk/background-trunk.js';

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
                    <div className='about-component'>
                        <div className = 'trunk-alt'>
                          <TrunkBG_Alt/>
                        </div>

                        <div className = 'about-title-1'>
                          ABOUT
                        </div>
                        <div className = 'about-title-2'>
                          ABOUT
                        </div>
                        <div className = 'about-title-3'>
                          ABOUT
                        </div>
                        <div className = 'about-strike'>
                        
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