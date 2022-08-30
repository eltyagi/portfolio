import React from 'react';
import './work.css';
import {Animated} from "react-animated-css";
import Experience from './experience/experience.js'

class work extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
 
    render(){
        return(
            <div className = 'work' >
                <div className = 'sidebar-projects'>
                    <div className = 'sidebar-item'>
                        Experience
                        <div className="vl"></div>
                    </div>
                    <div className = 'sidebar-item'>
                        Research
                        <div className="vl"></div>
                    </div>
                    <div className = 'sidebar-item'>
                        Projects
                        <div className="vl"></div>
                    </div>
                </div>

                <div className = 'work-viewport'>
                    <Experience/>
                </div>
              
            </div>
        );
    }
}

export default work;