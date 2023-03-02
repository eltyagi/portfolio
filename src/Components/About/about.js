import React from 'react';
import './about.css';
import Self from './self-image.JPG';
import Research from './research/research.js';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import { useEffect } from 'react';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
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

      <div className = 'aboutMe-content'>
        <div className = 'aboutMe-content-text'>
          <span className = 'aboutMe-span'>
          <span className = 'invictus'>Out of the night that covers me,<br/></span>
            <span className = 'invictus'>Black as the pit from pole to pole,<br/></span>
            <span className = 'invictus'>I thank whatever gods may be,<br/></span>
            <span className = 'invictus'>For my unconquerable soul.<br/></span><br/>
            <span className = 'invictus'>It matters not how strait the gate,<br/></span>
            <span className = 'invictus'>How charged with punishments the scroll,<br/></span>
            <span className = 'invictus'>I am the master of my fate,<br/></span>
            <span className = 'invictus'>I am the captain of my soul.<br/></span>
          </span>
        </div>

        <div className = 'aboutMe-img'>
          <img className = 'self-image' src = {Self} height="auto" width="600px"/>
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
    
    
    
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap" rel="stylesheet"/>      
    </motion.div>
  );
}

{/*const GivingBack = () => {

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
        Giving Back.
          <br/><br/>
        </div>

        <div className = 'role-title'>
          Mentor, Machine Learing & Data Analytics
          <br/><br/>
        </div>

        <div className = 'role-desc'>
          Since 2019, I have mentored over 5000 mentees in the domains of data analytics and 
          artificial intelligence. This is through month long hands-on workshops on designing,
          building and testing machine learning models.<br/><br/>
          The aim is to instill a passion for engineering, creativity and research within my mentees,
          so that they can grow in their respective careers, and make a positive impact on the world.
        </div>

        <div className = 'role-icons'>

        </div>
      </div>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap" rel="stylesheet"/>      
      </motion.div>
  );
}*/}

function About(){

    return(
        <div className = 'about'>
         
          <div className = 'content-about'>
            <div className = 'about-components'>
              <AboutMe/>
            </div>
            <div className = 'about-components'>
              <CurrentRole/>
            </div>
            {/*<div className = 'about-components'>
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