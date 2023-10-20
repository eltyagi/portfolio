import React, { useCallback, useEffect, useState } from 'react';
import './about.css';
import './about_content'
import './about_content'
import content from './about_content';
import AboutCard from './card/about_card.js';
import { useRef } from 'react';

function About(){
    const about = useRef(null);
    const projects = useRef(null);
    const research = useRef(null);

    function handleScrollToAbout() {
        about.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'center'
        });
      }

      function handleScrollToProjects() {
        projects.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'center'
        });
      }

      function handleScrollToResearch() {
        research.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'center'
        });
      }

    return(
        <div className = 'about-card'>
            <nav className = 'about-nav'>
                <button onClick={handleScrollToAbout}>
                About
                </button>
                <button onClick={handleScrollToProjects}>
                Projects
                </button>
                <button onClick={handleScrollToResearch}>
                Research
                </button>
            </nav>

            <div ref={about} className = 'div-about'>
                <div className = 'title'>
                    Hi, I am Lakshya!
                </div>
                <div className = 'body'>
                    I am a Solutions Engineer @ Cisco, I transform how organisations communicate, collaborate, provision and grow. 
                    When not working, I am building side projects, teaching machine learning, and finding new peaks to scale.
                </div>
            </div>

            <div ref={projects} className = 'div-projects'>
                <div className = 'title'>
                    Projects
                </div>
                <div className = 'body'>
                    I am a Solutions Engineer @ Cisco, I transform how organisations communicate, collaborate, provision and grow. 
                    When not working, I am building side projects, teaching machine learning, and finding new peaks to scale.
                </div>
            </div>

            <div ref={research} className = 'div-research'>
                <div className = 'title'>
                    Research
                </div>
                <div className = 'body'>
                    I am a Solutions Engineer @ Cisco, I transform how organisations communicate, collaborate, provision and grow. 
                    When not working, I am building side projects, teaching machine learning, and finding new peaks to scale.
                </div>
            </div>
            
        </div>
    );
}

export default About;