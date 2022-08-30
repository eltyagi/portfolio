import React from 'react';
import './experience.css';
import {Animated} from "react-animated-css";

class experience extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
 
    render(){
        return(
            <div className = 'experience' >
                <div className = 'experience-item'>
                    <div className = 'experience-title'>
                        Cisco Systems<br/>  
                        Technical Solutions Specialist
                    </div>
                    <div className = 'experience-content'>
                        Aug 2021-Present
                    </div>
                    <div className = 'experience-title'>
                        MyCaptain<br/> 
                        Educator/Mentor
                    </div>
                    <div className = 'experience-content'>
                        April 2019-Present
                    </div>
                    <div className = 'experience-title'>
                        ZS Associates<br/> 
                        Software Engineer Intern
                    </div>
                    <div className = 'experience-content'>
                        Jan 2021-June 2021
                    </div>
                    <div className = 'experience-title'>
                        AFS, Bahrain<br/> 
                        Software Engineer Intern
                    </div>
                    <div className = 'experience-content'>
                        Jan 2020-May 2020
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default experience;