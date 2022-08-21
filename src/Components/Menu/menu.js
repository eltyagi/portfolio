import React from 'react'
import './menu.css'
import Picture from './img.jpg'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import { TransitionGroup, CSSTransition} from 'react-transition-group'
  import { useLocation } from 'react-router-dom'
import ReactDOM from 'react-dom';
import {Animated} from "react-animated-css";



function Menu(){

    const location = useLocation()
        return(
            <div className = 'menu'>
                <div className = 'menu-options'>
                    <Animated animationInDelay = {100} animationInDuration = {500} animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                        <Link to = "/" style={{ textDecoration: 'none', color: 'white' }}>
                            <div className = 'menu-opt'>
                                Home
                            </div>
                        </Link>
                    </Animated>
                    <Animated animationInDelay = {600}  animationInDuration = {500} animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                    <div className = 'menu-opt'>
                        About Me
                    </div>
                    </Animated>
                    <div className = 'menu-opt'>
                        Projects
                    </div>
                    <div className = 'menu-opt'>
                        Blog
                    </div>
                    <div className = 'menu-opt'>
                        Contact
                    </div>
                </div>

                <div className = 'image'>
                    <img className = 'picture' src = {Picture}/>
                </div>


                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"></link>
            </div>
        )
}

export default Menu;