import React, { useCallback, useEffect, useState } from 'react';
import './accolades.css';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
  } from "framer-motion";
import ccna from './icons/ccna.png';
import encor from './icons/encor.png';
import ccnp from './icons/ccnp.png';
import enauto from './icons/enauto.png';
import devassoc from './icons/devassoc.png';

function Accolades(){

    return(
        <div className = 'pg-accolades'>
           <motion.div 
            initial = {{opacity: 0}}
            whileInView={{opacity: [0,1]}}
            className = 'acco-label'>
            accolades.
          </motion.div>

          <div className = 'acco-nums'>
            <div className = 'acco-nums-1'>
              <motion.div className = 'num'>
                500+
              </motion.div>
              <motion.div 
                className = 'num-context'
                initial = {{opacity: 0}}
                whileInView={{opacity: [0,1]}}>
                Hours of live coding sessions as an educator and 
                mentor to budding engineers.
              </motion.div>
            </div>

            <div className = 'acco-nums-2'>
              <motion.div 
                className = 'num'
                initial = {{opacity: 0}}
                whileInView={{opacity: [0,1]}}>
                6000+
              </motion.div>
              <motion.div 
                className = 'num-context'
                initial = {{opacity: 0}}
                whileInView={{opacity: [0,1]}}>
              Mentees in the domains of Machine Learning and Data Analytics.
              </motion.div>
            </div>
          </div>


          <div className = 'cert-label'>
            Certifications
          </div>

          <motion.div 
            className = 'certs'
            initial = {{opacity: 0}}
            whileInView={{opacity: [0,1]}}>
            <div className = 'cert'>
              <img className = 'cert-img' src = {ccna}></img>
            </div>
            <div className = 'cert'>
            <img className = 'cert-img' src = {encor}></img>
            </div>
            <div className = 'cert'>
            <img className = 'cert-img' src = {ccnp}></img>
            </div>
            <div className = 'cert'>
            <img className = 'cert-img' src = {enauto}></img>
            </div>
            <div className = 'cert'>
            <img className = 'cert-img' src = {devassoc}></img>
            </div>
            
          </motion.div>
        </div>

    );
}

export default Accolades;

