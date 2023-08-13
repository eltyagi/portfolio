import React, { useCallback, useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import './research.css';
import {Animated} from "react-animated-css";


function Research(){
    return(
        <div className = 'research'>
            <div className = 'research-title'>
                RESEARCH
            </div>

            <div className = 'research-role'>
                <div className = 'research-role-title'>
                    Deep Learning, Soft Computing
                </div>

                <div className = 'research-role-content'>
                Given the rather abrupt end to my career in the military due to injuries in training, 
                I decided to combine my passion for anything martial with a growing interest in machine 
                learning and deep learning. A lot of my publications explore applications of machine 
                learning, soft-computing and deep learning to defeating the fog of war in combat situations. 
                <br/><br/>
                I continue to explore research problems but have transitioned to a more practical, 
                implement focused approach than my student days. If you have ideas to discuss or 
                conversations around the defence industry’s growth in India, hit me up!
                </div>
            </div>
            


            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans:wght@100;600&family=Rubik:wght@300&family=Ubuntu:wght@700&display=swap" rel="stylesheet"></link>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans:wght@100;600&family=Nunito+Sans:opsz,wght@6..12,800&family=Rubik:wght@300&family=Ubuntu:wght@700&display=swap" rel="stylesheet"></link>
        </div>
    );
}


export default Research;