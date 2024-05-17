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
            <div className = 'about-sec'>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 1] }}
                className = 'about-label'>
                about me.
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 1] }}
                className = 'about-desc'>
                A soldier at heart and an engineer by profession, 
                I strive daily to persevere, innovate, educate and grow. 
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 1] }}
                className = 'about-desc-2'>
                I started my career at 19 as a cadet training to join the Indian Army.
                Fast forward 7 years, I now work with organisations across the 
                globe to facilitate their digital transformation using innovative software.
              </motion.div>
            </div>

            <motion.div 
              className = 'about-img'
              initial = {{y: 300}}
              whileInView = {{y: 50,
                            rotate: -10,
                            transition: {
                              type: "spring",
                              bounce: 0.4,
                              duration: 0.8
                            }}}>
            </motion.div>
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

          <div className = 'experience'>
            <motion.div 
              className = 'experience-title'
              initial = {{ opacity: 0 }}
              whileInView={{ opacity: [0, 1] }}
            >
              experience.
            </motion.div>


            <div className = 'experience-content'>

                <div className = 'blocks'>
                  <motion.div 
                    className = 'block-1'
                    initial = {{y: 300}}
                    whileInView = {{y: 50,
                            rotate: -10,
                            transition: {
                              type: "spring",
                              bounce: 0.4,
                              duration: 0.8}}}>
                  </motion.div>

                  <motion.div 
                    className = 'block-2'
                    initial = {{y: 200}}
                    whileInView = {{y: 30,
                            rotate: -10,
                            transition: {
                              type: "spring",
                              bounce: 0.4,
                              duration: 0.8}}}>
                  </motion.div>
                </div>

                <div className = 'roles'>
                  <div className = 'role'>
                    <div className = 'role-details'>
                      <div className = 'company'>
                        GitHub
                      </div>
                      <div className = 'company-role'>
                        Solutions Engineer - Corporate
                      </div>
                    </div>
                    <div className = 'role-period'>
                      May 2024 - Present
                    </div>
                  </div>

                  <div className = 'role'>
                  <div className = 'role-details'>
                      <div className = 'company'>
                        Cisco
                      </div>
                      <div className = 'company-role'>
                        Solutions Engineer - DevNet
                      </div>
                    </div>
                    <div className = 'role-period'>
                      Aug 2021 - May 2024
                    </div>
                  </div>

                  <div className = 'role'>
                  <div className = 'role-details'>
                      <div className = 'company'>
                        ZS Associates
                      </div>
                      <div className = 'company-role'>
                        Software Engineer - Intern
                      </div>
                    </div>
                    <div className = 'role-period'>
                      Jan 2021 - Jun 2021
                    </div>
                  </div>
                </div>

            </div>
            
          </div>
        </div>

    );
}

export default AboutPage

