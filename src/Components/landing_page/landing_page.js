import React, { useCallback, useEffect, useState } from 'react';
import './landing_page.css';
import {Animated} from "react-animated-css";
import Linkedin from './icons/linkedin.png';
import Medium from './icons/medium.png'
import Instagram from './icons/instagram.png';
import ccna from './icons/ccna.png';
import encor from './icons/encor.png';
import ccnp from './icons/ccnp.png';
import enauto from './icons/enauto.png';
import devassoc from './icons/devassoc.png';
import "animate.css/animate.min.css";
import { motion } from "framer-motion"
import AboutPage from './about_page/about_page';

function LandingPage(){
    return(
        <div className = 'portfolio'>
        
        <div className = 'pg-landingPage'>
          <div className = 'sup-title'>
            Solutions Engineer @ GitHub
          </div>

          <div className = 'title-nm'>
            <span className = 'title-fn'>
              LAKSHYA <br/>
            </span>
            <span className = 'title-ln'>
              TYAGI
            </span>
          </div>

          <div className = 'sub-title'>
            I simplify the complicated, <br/>endorse independence of 
            thought and teach competence.
          </div>

          <div className = 'social-icons'>
            <div className = 'icon linkedin'>
              <img className = 'icon-socials' src = {Linkedin}></img>
            </div>
            <div className = 'icon medium'>
              <img className = 'icon-socials' src = {Medium}></img>
            </div>
            <div className = 'icon linkedin'>
              <img className = 'icon-socials' src = {Instagram}></img>
            </div>
          </div>

          <div className = 'arrow'>

          </div>
        </div>

        <div className = 'pg-about'>
          <AboutPage/>
        </div>

        <div className = 'pg-accolades'>
          <div className = 'acco-label'>
            Accolades
          </div>

          <div className = 'acco-nums'>
            <div className = 'acco-nums-1'>
              <div className = 'num'>
                500+
              </div>
              <div className = 'num-context'>
                Hours of live coding sessions as an educator and 
                mentor to budding engineers.
              </div>
            </div>

            <div className = 'acco-nums-2'>
              <div className = 'num'>
                6000+
              </div>
              <div className = 'num-context'>
              Mentees in the domains of Machine Learning and Data Analytics.
              </div>
            </div>
          </div>


          <div className = 'cert-label'>
            Certifications
          </div>

          <div className = 'certs'>
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
            
          </div>
        </div>
        
        <div className = 'pg-footer'>
          <div className = 'footer-sup-title'>
            Want to talk tech, sales, military, life or just say hi?
          </div>

          <div className = 'footer-title'>
            GET IN TOUCH!
          </div>

          <div className = 'footer-sub-title'>
            <div className = 'social'>Linkedin</div>
            <div className = 'social'>Instagram</div>
            <div className = 'social'>Medium</div>
            <div className = 'social'>Github</div>
          </div>

          <div className = 'footer-creds'>
            @ 2024<br/>
            Lakshya Tyagi
          </div>
        </div>
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Forum&display=swap" rel="stylesheet"/>
        </div>
    );
}

export default LandingPage;