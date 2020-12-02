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
                    <p>This
                    paper proposes the implementation of support vector
                    machines, a supervised machine learning algorithm in
                    decision support for accurate and effective explosion
                    consequence analysis. 
                    </p>
                    <p>
                        <b>Tech-Stack</b><br/> 
                        MATLAB & Simulink<br/>
                        Machine Learning, Scikit-Learn<br/>
                        Support Vector Machines<br/>
                    </p>
                    <br></br>
                    <b>Accolades</b><br/> 
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