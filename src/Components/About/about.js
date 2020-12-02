import React from 'react';
import './about.css';
import Self from './self-img.jpg';
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
                <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={2500} animationOutDuration={1000} isVisible={true}>
                <div className = 'image'>
                    <img className = 'self' src = {Self}/>
                </div>
                </Animated>
                <div className = 'about-me'>
                    <Animated animationIn="fadeInDown" animationOut="fadeOut" animationInDuration={2000} animationOutDuration={1000} isVisible={true}>
                        <p className = 'about-title f1'>A bit about <i>myself!</i></p>
                        <p className = 'about-1'>
                            I'm Lakshya - Software developer and researcher based out of India. 
                            I am a military geek, skilled engineer and
                            with a knack for the outdoors, creative writing
                            and productivity.
                        </p>
                    </Animated>

                    <Animated animationIn="fadeInDown" animationOut="fadeOut" animationInDuration={2000} animationOutDuration={1000} isVisible={true}>
                        <p className = 'about-1'><b>Domains</b><br/></p>
                        <p className = 'about-1'>
                        Software Development: ML, Web-Development [PERN Stack]<br/>
                        Research Interests: Soft-Computing, Reinforcement Learning and AI<br/>
                        </p>
                    </Animated>

                    <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={2000} animationOutDuration={1000} isVisible={true}>
                        <p className = 'about-1'><b>Accolades</b><br/></p>
                        <p className = 'about-1'>
                        3x Scholarship Awards<br/>   
                        4x Research Publications<br/>
                        2,500x Developers and Writers Mentored<br/>
                        60,000x Online Content hits
                        </p>
                    </Animated>

                    <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={2000} animationOutDuration={1000} isVisible={true}>
                        <p className = 'about-1'><b>Avocations</b><br/></p>
                        <p className = 'about-1'>
                        Basketball<br/>   
                        Muay Thai<br/>
                        </p>
                    </Animated>

                </div>
                

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap" rel="stylesheet"></link>      
            </div>
        );
    }
}

export default about;