import React, { useCallback, useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import './current.css';
import {Animated} from "react-animated-css";


function Current(){
    return(
        <div className = 'current'>
            <div className = 'current-title'>
                CURRENT
            </div>

            <div className = 'current-role'>
                <div className = 'current-role-title'>
                    Technical Solutions Specialist @ Cisco
                </div>

                <div className = 'current-role-content'>
                I am a solutions engineer @ Cisco, based out of Bangalore, India. 
                I transform how organisations communicate, collaborate, provision and grow. 
                My day-to-day involves conversations with account teams and customers to 
                understand how code can solve their business challenges, and then develop 
                customised PoVs to directly influence massive deals.  
                <span className = 'current-role-content-span-1'> I am a consultant, developer and innovator, all in one.</span>
                <br/><br/>
                Accolades:<br/>
                x Associate Systems Engineer of the Quarter, Q3 FY22<br/>
                x Systems Engineer of the Quarter, Q2 FY23<br/>
                x CCNA, CCNP,, DevNet Associate
                </div>
            </div>
            


            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans:wght@100;600&family=Rubik:wght@300&family=Ubuntu:wght@700&display=swap" rel="stylesheet"></link>
        </div>
    );
}


export default Current;