import React, { useCallback, useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import './about_landing.css';
import {Animated} from "react-animated-css";
import selfimg from './self_img.JPG'

function AboutLanding(){
    const barArray = ["engineering", "", "education", "", "solutions", "", "presales","",  "research", "", "software"]
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      handleScroll();

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return(
        <div className = 'about-landing'>
            <img className = 'self-img' src = {selfimg}/>
            <div className = 'title'>
                ABOUT
            </div>
            <div className = 'bar-animate scroll-bar'>
                {
                barArray.map((i) => {
                return (
                    <div className="scroll-bar-content">
                    {i}
                    </div>
                );
                })}

                {
                barArray.map((i) => {
                return (
                    <div className="scroll-bar-content">
                    {i}
                    </div>
                );
                })}
            </div>
            
            


            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans:wght@100;600&family=Rubik:wght@300&family=Ubuntu:wght@700&display=swap" rel="stylesheet"></link>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans:wght@100;600&family=Great+Vibes&family=Hurricane&family=Nunito+Sans:opsz,wght@6..12,800&family=Rubik:wght@300&family=Ubuntu:wght@700&display=swap" rel="stylesheet"></link>
        </div>
    );
}


export default AboutLanding;