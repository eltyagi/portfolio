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
                    <p>Journie’ is a productivity application optimize writing and organizing journals, sharing important
                        events and encouraging productivity. It is a cross-platform
                        application with MacOS & Windows support.
                    </p>
                    <p>
                        <b>Tech-Stack</b><br/> 
                        FrontEnd: ReactJS<br/>
                        BackEnd: NodeJS, ElectronJS<br/>
                        Database: PostgreSQL, MongoDB<br/>
                    </p>
                </div>

                <div className = 'ss-jou'>
                    <img alt = '' src = {Jou}/>
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