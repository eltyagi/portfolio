import React from 'react';
import './work.css';
import 'tachyons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import arrow from './expand-arrow.png';
import {Animated} from "react-animated-css";

class experience extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className = 'work'>
                <div className = 'work-desc'>
                    <div className = 'desc'>
                        <span className = 'work-desc-title-sup'>Current Role<br/></span>
                        <span className = 'work-desc-title'>As a Technical Solutions Specialist @ Cisco<br/></span>
                        
                        <div>
                        I build innovative software
                        prototypes for Cisco's customers, enabling their business outcomes through
                        technology and innovation.
                        </div>

                    </div>

                    <div className = 'desc'>
                        <span className = 'work-desc-title-sup'>Giving Back<br/></span>
                        <span className = 'work-desc-title'>As an Educator @ MyCaptain<br/></span>
                        I mentor budding developers in the domains of machine learning, data science and 
                        web development through month-long hands on workshops.
                    </div>

                    <div className = 'desc'>
                        <span className = 'work-desc-title-sup'>Research Work<br/></span>
                        <span className = 'work-desc-title'>As a Passionate Researcher<br/></span>
                        I have worked on and published research in the domains of soft-computing
                        and machine learning, with their application to defence sciences. 
                    </div>
                </div>


            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&family=Poppins:wght@300&display=swap" rel="stylesheet"/>    
            </div>
        );
    }
}

export default experience;