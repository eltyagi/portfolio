import React from 'react';
import './aboutR3.css';

class aboutR3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className = 'aboutR3' style = {{display: 'flex', flexWrap: 'wrap'}}>
                <div className = 'description-R3'>
                    <h2><b>MOPP Open Time Prediction</b></h2>
                    <p>A hierarchal adaptive neuro-fuzzy inference system (HANFIS) model is proposed 
                        to predict worst case MOPP open times for surfaces covered with 
                        chemical agent resistant coating (CARC). The model can provide 
                        decision support for commanders when determining MOPP open or 
                        unmasking time. From the HANFIS simulation results it was concluded 
                        that the model can accurately predict MOPP open times according to data present 
                        in military field manuals. 
                    </p>
                    <p>
                        <b>Tech-Stack</b><br/> 
                        MATLAB & Simulink, Python<br/>
                        Soft-Computing, Neuro-Fuzzy Systems<br/>
                        Expert Systems, Descision Support<br/>
                    </p>
                    <br></br>
                    <b>Accolades</b><br/> 
                        Published in International Journal of Fuzzy Systems Application (SCOPUS, eSCI)<br/>
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

export default aboutR3;