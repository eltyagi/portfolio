import React from "react";
import './aboutMe.css';
import Self from './self-img.png';


class aboutMe extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className = 'aboutMe'>
                <div className = 'aboutMe-title'>
                    About Me
                </div>
                <div className = 'role'>
                    <div className = 'role-tag'>
                        About Me.
                        <br/><br/>
                    </div>

                    <div className = 'role-title'>
                        Focus. Resilience. Commitment.
                        <br/><br/>
                    </div>

                    <div className = 'role-desc'>
                        I am a solutions engineer, trusted technical advisor & developer who leverages 
                        automation and programmability to achieve business outcomes for Cisco's customers.
                        <br/><br/>
                        I am also a CSAP graduate, one of 136 ASEs and ASRs from Cisco's FY22
                        CSAP cohort, with deep exposure to security, collaboration, data center and
                        enterprise networking, the 4 pillars of any organization.
                    </div>

                    <div className = 'role-icons'>

                    </div>
                </div>

                <div className = 'role-image'>
                    <img width = '500px' src={Self}></img>
                </div>
                
            

 <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap" rel="stylesheet"/>      
            </div>
        );
    }
}

export default aboutMe;