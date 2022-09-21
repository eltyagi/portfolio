import React from 'react';
import './about.css';
import Self from './self-img.png';
import {Animated} from "react-animated-css";

class about extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className = 'about'>
                <div className = 'about-me'>
                    
                        <p className = 'about-title f1'>A bit about <i>myself!</i></p>

                        <Animated animationIn="fadeInLeft" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                            <p className = 'about-1'>
                                I'm Lakshya - A Technical Solutions Specialist (GVE DevNet) @ Cisco. 
                                <br/> I am a purpose driven engineer, with a passion for technology powered<br/>
                                problem solving, outdoors, defence sciences and more..<br/><br/>

                                I am a CSAP alumni, operating as a trusted technical advisor<br/>
                                to Cisco's customers, enabling their business outcomes with<br/>
                                focus on Trust, Security and Flexibility.
                            </p>
                        </Animated>

                    <Animated animationIn="fadeInLeft" animationInDuration={1200} animationOutDuration={1000} isVisible={true}>
                        <p className = 'about-1'><b>Domains</b><br/></p>
                        <p className = 'about-1'>
                        Software Development: ML, Web-Development [PERN Stack]<br/>
                        Research Interests: Soft-Computing and AI/ML<br/>
                        Network Engineering: CCNA, CCNP<br/>
                        
                        </p>
                    </Animated>

                    <Animated animationIn="fadeInLeft" animationInDuration={1400} animationOutDuration={1000} isVisible={true}>
                        <p className = 'about-1'><b>Accolades</b><br/></p>
                        <p className = 'about-1'>
                        4,500x Developers and Writers Mentored<br/>
                        ASE of the Quarter, Q3 FY22<br/>
                        5x Research Publications<br/>
                        3x Scholarship Awards<br/>   
                        </p>
                    </Animated>

                    <Animated animationIn="fadeInLeft" animationInDuration={1600} isVisible={true}>
                        <p className = 'about-1'><b>Avocations</b><br/></p>
                        <p className = 'about-1'>
                        Basketball<br/>   
                        Muay Thai<br/>
                        </p>
                    </Animated>

                    

                </div>
                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={2000} animationOutDuration={1000} isVisible={true}>
                <div className = 'image'>
                    <img className = 'self' src = {Self}/>
                </div>
                </Animated>
                

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap" rel="stylesheet"/>      
            </div>
        );
    }
}

export default about;