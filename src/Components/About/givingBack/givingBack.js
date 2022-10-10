import React from "react";
import './givingBack.css';


class givingBack extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className = 'givingBack'>
                <div className = 'label'>
                    Giving Back
                </div>

                <div className = 'label-Title'>
                    I am an Educator @ MyCaptain<br/><br/>
                </div>
                
                <div className="label-Desc">
                    In my free time, I often find myself curating and conducting
                    live, hands-on workshops for budding engineers and students across
                    the country. 

                    <br/><br/>

                    The workshops include domains like Machine Learning, Full-Stack Web 
                    Development, Data Analytics etc. There is a wide gap between industry needs
                    and what students are taught in college. I hope to fill that gap with hands-on
                    knowledge and competence.<br/><br/>
                </div>

                <div className = 'label-achievements'>
                    Achievements
                    <br/> x 5025 Mentees Mentored
                    <br/> x 1005 Live Sessions Conducted 

                </div>
                
            </div>
        );
    }
}

export default givingBack;