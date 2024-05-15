import React, { useCallback, useEffect, useState } from 'react';
import './about_page.css';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
  } from "framer-motion";
import Asterick from './asterick.png';
import ParallaxText from './paralax_text/paralax_text.js';

function AboutPage(){
    return(
        <div className = 'pg-about'>
          <section className='about-sup-title'>
          <ParallaxText baseVelocity={-1}>Welcome to my Portfolio!</ParallaxText>
          <ParallaxText baseVelocity={1}>Welcome to my Portfolio!</ParallaxText>
          </section>

          <div className = 'about'>
            <motion.div className = 'about-label'>
              About
            </motion.div>
            <motion.div className = 'about-desc'>
              A soldier at heart and an engineer by profession, 
              I strive daily to persevere, innovate, educate and grow. 
            </motion.div>
            <motion.div className = 'about-desc-2'>
              I started my career at 19 as a cadet training to join the Indian Army.
              Fast forward 7 years, I now work with organisations across the 
              globe to facilitate their digital transformation using innovative software.
            </motion.div>

            <div className = 'about-curr-roles'>

            <div className = 'curr-role-1'>
                <div className = 'role-name'>
                  Solutions Engineer @ GitHub
                </div>
                <div className = 'role-date'>
                  May 2024 - Present
                </div>
              </div>

              <div className = 'curr-role-1'>
                <div className = 'role-name'>
                  Solutions Engineer @ Cisco
                </div>
                <div className = 'role-date'>
                  Aug 2021 - May 2024
                </div>
              </div>

              <div className = 'curr-role-2'>
                <div className = 'role-name'>
                  Educator @ MyCaptain
                </div>
                <div className = 'role-date'>
                  Apr 2019 - Present
                </div>
              </div>
            </div>

            <div className = 'about-add'>
              <div className= 'add-interest'>
                <div className = 'ast'>
                  <img className = 'ast-img' src = {Asterick}/>
                </div>
                <div className = 'add-int-body'>
                  Based in<br/>
                  Bengaluru, India
                </div>
              </div>

              <div className= 'add-interest'>
                <div className = 'ast'>
                  <img className = 'ast-img' src = {Asterick}/>
                </div>
                <div className = 'add-int-body'>
                  Golf<br/>
                  Basketball, MMA
                </div>
              </div>

              <div className= 'add-interest'>
                <div className = 'ast'>
                  <img className = 'ast-img' src = {Asterick}/>
                </div>
                <div className = 'add-int-body'>
                  Writer,<br/>
                  Published Researcher
                </div>
              </div>
            </div>
          </div>
        </div>

    );
}

export default AboutPage