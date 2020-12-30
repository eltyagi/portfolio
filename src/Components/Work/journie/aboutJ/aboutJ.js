import React from 'react';
import './aboutJ.css';
import Jou from './Journie.png';

class aboutJ extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className = 'aboutJ'>
                <div className = 'description-j'>
                    <h2><b>Journie</b></h2>
                    <b>The Story</b>
                    <br/><br/>
                    <p>
                        I am a productivity freak, my time in basic military training has taught me just how much
                        one can achieve in a day. Therefore, I use my time well and make an attempt to make the most
                        out of my day.
                        <br/><br/>
                        Naturally, I looked for software alternatives to creating a productivity journal. Unfortunately,
                        I found them to be bland, rigid and ineffective in creating a personalized experience.
                        <br/><br/>
                        In an attempt to develop the ideal journal for myself, I started working on Journie. It's developed
                        as a desktop application with cross-platform compatibility (Windows/MacOS) achieved through the amazing
                        ElectronJS framework.
                        <br/><br/>
                    </p>

                    <p>
                        <a href = "https://github.com/Lakshya3190/journie">
                            <u><b>View Project Repository</b></u>
                        </a>
                        <br/><br/>
                    </p>

                    <p>
                        <b>Tech-Stack</b><br/> 
                        FrontEnd: ReactJS<br/>
                        BackEnd: NodeJS, ElectronJS<br/>
                        Database: PostgreSQL, MongoDB<br/>
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

export default aboutJ;