import React from "react";
import './currentRole.css';


class currentRole extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className = 'currentRole'>

                <div className = 'label'>
                    Current Role
                </div>

                <div className = 'label-Title'>
                    I am a Technical Solutions Specialist @ Cisco<br/><br/>
                </div>
                
                <div className="label-Desc">
                    A trusted technical advisor, who forms the bridge between 
                    business needs and outcomes through technology and innovative
                    software.

                    <br/><br/>

                    I am also a CSAP Graduate, one of 136 ASEs and ASRs from Cisco's
                    FY22 CSAP Cohort, with deep exposure to Security, Collaboration,
                    Data Center and Enterprise Networking, the 4 pillars of any enterprise.<br/><br/>
                </div>

                <div className = 'label-achievements'>
                    Achievements
                    <br/> x ASE of the Quarter, Q3 FY22

                </div>
                
            </div>
        );
    }
}

export default currentRole;