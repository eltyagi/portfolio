import React, { useCallback, useEffect, useState } from 'react';
import './about.css';
import { useRef } from 'react';
import AboutDesc from './aboutMe/aboutMe.js';
import Projects from './projects/projects.js';
import Research from './research/research.js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function About(){
    const about = useRef(null);
    const projects = useRef(null);
    const research = useRef(null);

    function handleScrollToAbout() {
        about.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center'
        });
      }

      function handleScrollToProjects() {
        projects.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center'
        });
      }

      function handleScrollToResearch() {
        research.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center'
        });
      }

    return(
        <div className = 'about-card'>
            <div className = 'home-link'>
            <Link to = "/" style={{ textDecoration: 'none', color: 'black' }}>
              HOME
            </Link>
            </div>
            <div className = 'about-nav'>
                <div className = 'about-nav-op about-nav-1' onClick={handleScrollToAbout}>
                Who Am I?
                </div>
                <div className = 'about-nav-op about-nav-1' onClick={handleScrollToProjects}>
                My Work
                </div>
                <div className = 'about-nav-op about-nav-1' onClick={handleScrollToResearch}>
                My Research
                </div>
            </div>
            <div className = 'about-pages'>
                <div ref={about} className = 'div-about'>
                    <AboutDesc/>
                </div>

                <div ref={projects} className = 'div-projects'>
                    <Projects/>
                </div>

                <div ref={research} className = 'div-research'>
                    <Research/>
                </div>
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet"/>
        </div>
    );
}

export default About;