import React from 'react';
import './aboutCWC.css';
import cwcss from './cwc-ss.png';
import 'tachyons';

class aboutCWC extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className = 'aboutCWC'>
                <div className = 'description-cwc'>
                    <h2><b>Cope with Covid</b></h2>
                    <p>Cope with Covid is a web-applicaiton developed to enable interaction
                        between medium/small businesses and residents of a locality/society. 
                    </p>
                    <p>
                        <b>Accolades</b><br/> 
                        1st Position, hackCOVID hackathon (out of 4,500 submissions)<br/>
                        Shortlisted for Pre-Incubation by a leading B-School
                    </p>
                    <p>
                        <b>Tech-Stack</b><br/> 
                        FrontEnd: ReactJS<br/>
                        BackEnd: NodeJS, Heroku<br/>
                        Database: PostgreSQL<br/>
                    </p>
                    <p>
                        <b>Features</b><br/> 
                        Dynamic Covid-19 Dashboard<br/>
                        Product & Services Portal<br/>
                        Vulnerability Analysis<br/>
                    </p>
                </div>

                <div className = 'ss-cwc grow pointer '>
                        <p>
                            <img className = 'img-ss' src = {cwcss}/>
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

export default aboutCWC;