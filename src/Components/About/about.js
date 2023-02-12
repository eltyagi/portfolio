import React from 'react';
import './about.css';
import AboutMe from './aboutMe/aboutMe.js';
import CurrentRole from './currentRole/currentRole.js';
import GivingBack from './givingBack/givingBack.js';
import Research from './research/research.js';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import { useEffect } from 'react';;

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const aboutMe = () => {

  const control = useAnimation();
  const [ref, inView] = useInView();
}

function About(){

    const control = useAnimation()
    const [ref, inView] = useInView()

    const boxVariant = {
      visible: {opacity: 1, scale: 1, transition: {duration: 1}},
      hidden: {opacity: 0, scale: 0}
    }

    useEffect(() => {
      if (inView){
        control.start("visible")
      }
    }, [control,inView])

    return(
        <div className = 'about'>
         
          <div className = 'content-about'>
            <motion.div
              ref={ref} 
              variants={boxVariant}
              initial="hidden"
              animate={control}
              className = 'about-components'>
            <AboutMe/>
            </motion.div>
            <div className = 'about-components'>
              <CurrentRole/>
            </div>
            <div className = 'about-components'>
              <GivingBack/>
            </div>
            <div className = 'about-components'>
              <Research/>
            </div>
          </div>
        
         
           
        
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap" rel="stylesheet"/>      
        </div>
    );
    
}

export default About;