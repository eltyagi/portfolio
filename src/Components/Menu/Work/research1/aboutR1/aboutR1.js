import React from 'react';
import './aboutR1.css';
import sim from './simulink.png';

class aboutR1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className = 'aboutR1'>
                <div className = 'description-R1'>
                    <h2><b>Explosion Consequence Analysis</b></h2>
                    <b>The Story</b>
                    <br/><br/>
                    <p> It's no secret to anyone who knows me that I am deeply passionate about
                        defence sciences. Not only am I constantly updating myself on the latest in defence
                        research and development, I also actively pursue research projects. 
                        <br/><br/>
                       
                        This project proposes the implementation of adaptive neuro-fuzzy inference
                        system (ANFIS) for accurate and
                        effective explosion consequence analysis on brick structures over a range of twenty
                        meters. 
                        <br/><br/>

                        Not only can you predict damage to brick structures but also analyse exactly what kind
                        of damage is to be expected. It was an interesting project which required data-processing
                        of over 40,000 explosive tests carried out since World War 2.<br/><br/>
                    </p>

                    <p>
                        <a href = "https://github.com/Lakshya3190/Adaptive-Neuro-Fuzzy-Inference-System-for-Consequence-Analysis">
                            <u><b>View Project Repository</b></u>
                        </a>
                        <br/><br/>
                    </p>

                    <p>
                        <a href = "https://ieeexplore.ieee.org/document/9058024">
                            <u><b>View Publication</b></u>
                        </a>
                        <br/><br/>
                    </p>



                    <p>
                        <b>Tech-Stack</b><br/> 
                        MATLAB and SIMULINK<br/>
                        Neural Networks<br/>
                        Fuzzy Inference Systems<br/>
                        <br/><br/>
                        <b>Accolades</b><br/> 
                        Published in 10TH International Conference on Cloud Computing, Data Science & Engineering.<br/><br/><br/><br/><br/><br/><br/><br/>
                        
                    </p>
                </div>

                

                





            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap" rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Play&display=swap" rel="stylesheet"></link>
            </div>
        );
    }
}

export default aboutR1;