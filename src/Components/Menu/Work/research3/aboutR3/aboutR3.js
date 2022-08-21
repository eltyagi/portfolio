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
                    <h2><b>MOPP Open Time Prediction</b></h2><br/><br/>
                    <b>The Story</b>
                    <br/><br/>
                    <p>
                        This research project is probably my best work yet. I came up with this concept
                        randomly while watching a documentary on Chernobyl.
                        <br/><br/>

                        The project incorporates learning capabilities of artificial neural networks, tolerance
                        for uncertainity offered by fuzzy inference systems and computational efficiency of cascading
                        fuzzy trees.
                        <br/><br/>
                        
                        A hierarchal adaptive neuro-fuzzy inference system (HANFIS) model is proposed 
                        to predict worst case MOPP open times for surfaces covered with 
                        chemical agent resistant coating (CARC). The model can provide 
                        decision support for commanders when determining MOPP open or 
                        unmasking time. 
                        <br/><br/>

                        MOPP or Mission Oriented Protective Posture referes to multiple levels of protective gear that 
                        soldiers are expected to wear in CBRN environments. 
                        
                        <br/><br/>From the HANFIS simulation results it was concluded 
                        that the model can accurately predict MOPP open times according to data present 
                        in military field manuals.
                        <br/><br/> 
                    </p>
                    <p>
                        <b>Tech-Stack</b><br/> 
                        <br/><br/>
                        MATLAB & Simulink, Python<br/>
                        Soft-Computing, Neuro-Fuzzy Systems<br/>
                        Expert Systems, Descision Support<br/>
                    </p>
                    <br/><br/>
                    <b>Accolades</b><br/> 
                    <br/><br/>
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