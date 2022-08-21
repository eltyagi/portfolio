import React from 'react';
import './aboutR2.css';

class aboutR2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className = 'aboutR2'>
                <div className = 'description-R2'>
                    <h2><b>ECA Through SVM</b></h2>
                    <b>The Story</b>
                    <br/><br/>
                    <p>
                    This research project is a follow-up of my work on ECA on brick structures.
                    The key here is extending prediction capabilities to 7 different types of 
                    military targets with differing levels of protection and armour.
        
                    <br/><br/>

                    Another major aspect of this project is the utilization of TNT Equivalent for
                    explosive weight, making the model effective for virtually any kind of explosive.
                    A prediction accuracy of 97.5% was achieved through the use of Support Vector Machines
                    with a Cubic Kernel.
                    <br/><br/>

                    </p>

                    <p>
                        <a href = "https://ieeexplore.ieee.org/document/9197866">
                            <u><b>View Publication</b></u>
                        </a>
                        <br/><br/>
                    </p>

                    <p>
                        <b>Tech-Stack</b><br/><br/>
                        MATLAB & Simulink<br/>
                        Machine Learning, Scikit-Learn<br/>
                        Support Vector Machines<br/>
                    </p>
                    <br></br>
                    <b>Accolades</b><br/><br/>
                        Published in IEEE 8th INTERNATIONAL CONFERENCE on Reliability, Infocom Technologies and Optimization (ICRITO'2020)<br/>
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

export default aboutR2;