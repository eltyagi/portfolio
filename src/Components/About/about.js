import React from 'react';
import './about.css';
import Self from './self-img.png';
import Research from './research/research.js';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import { useEffect } from 'react';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};



const AboutMe = () => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return(
    <motion.div 
    className = 'aboutMe'
    ref={ref}
    variants={boxVariant}
    initial="hidden"
    animate={control}
    >

    <div className = 'aboutMe-Content'>
      <div className = 'aboutMe-Title'>
        about Me
      </div>
    </div>
      
                
            

    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap" rel="stylesheet"/>      
    </motion.div>
  );
}

const CurrentRole = () => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return(
    <motion.div 
    className = 'currentRole'
    ref={ref}
    variants={boxVariant}
    initial="hidden"
    animate={control}
    >
      <div className = 'currentRole-title'>
        Current Role
      </div>
      <div className = 'role'>
        <div className = 'role-tag'>
          About Me.
          <br/><br/>
        </div>

        <div className = 'role-title'>
          Technical Solutions Specialist, GVE DevNet
          <br/><br/>
        </div>

        <div className = 'role-desc'>
          I am a solutions engineer, trusted technical advisor & developer who leverages 
          automation and programmability to achieve business outcomes for Cisco's customers.
          <br/><br/>
          I am also a CSAP graduate, one of 136 ASEs and ASRs from Cisco's FY22
          CSAP cohort, with deep exposure to security, collaboration, data center and
          enterprise networking, the 4 pillars of any organization.
        </div>

        <div className = 'role-icons'>

        </div>
      </div>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap" rel="stylesheet"/>      
      </motion.div>
  );
}

const GivingBack = () => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return(
    <motion.div 
    className = 'currentRole'
    ref={ref}
    variants={boxVariant}
    initial="hidden"
    animate={control}
    >
      <div className = 'currentRole-title'>
        Giving Back
      </div>
      <div className = 'role'>
        <div className = 'role-tag'>
          About Me.
          <br/><br/>
        </div>

        <div className = 'role-title'>
          Mentor, Machine Learing & Data Analytics
          <br/><br/>
        </div>

        <div className = 'role-desc'>
          I am a solutions engineer, trusted technical advisor & developer who leverages 
          automation and programmability to achieve business outcomes for Cisco's customers.
          <br/><br/>
          I am also a CSAP graduate, one of 136 ASEs and ASRs from Cisco's FY22
          CSAP cohort, with deep exposure to security, collaboration, data center and
          enterprise networking, the 4 pillars of any organization.
        </div>

        <div className = 'role-icons'>

        </div>
      </div>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap" rel="stylesheet"/>      
      </motion.div>
  );
}

function About(){

    return(
        <div className = 'about'>
         
          <div className = 'content-about'>
            <div className = 'about-components'>
              <AboutMe/>
            </div>
            {/*<div className = 'about-components'>
              <CurrentRole/>
            </div>
            <div className = 'about-components'>
              <GivingBack/>
            </div>
            <div className = 'about-components'>
              <Research/>
            </div>*/}
          </div>


        <div className = 'about-content'>
          
        </div>
        
         
           
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap" rel="stylesheet"/>      
      </div>
    );
    
}

export default About;