import React from 'react';
import './work.css';
import 'tachyons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import arrow from './expand-arrow.png';
import {Animated} from "react-animated-css";

class experience extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className = 'work'>
                <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <p className = 'exp-title'><b>Experience</b></p>
                </Animated>
                <div className = '' style = {{display: 'flex'}}>
                    <div className = 'exp-block' style = {{display: 'flex', flexWrap: 'wrap'}}>

                    <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1200} animationOutDuration={1000} isVisible={true}>
                        <div className = 'exp-op'>
                        <p className = 'exp-op-title'><b>SDE Intern</b></p>
                            <div className="op" style = {{display: 'flex'}}>
                                <div className="vl-op2"></div>
                                <div className = "op-content">
                                    <p className = 'op-surface f3'><b>Sept 2019 - Jan 2020</b></p>
                                    <p className = 'op-surface f4'><b>x AFS, Bahrain</b></p>
                                    <p className = 'op-surface f4'>x Docker, DevOps</p>
                                    <p className = 'op-surface f4'>x PostgreSQL, DBMS</p>
                                    <p className = 'op-surface f4'>x Web Development</p>
                                </div>
                            </div>
                        </div>
                    </Animated>


                    <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1200} animationOutDuration={1000} isVisible={true}>
                        <div className = 'exp-op'>
                        <p className = 'exp-op-title'><b>Researcher</b></p>
                            <div className="op" style = {{display: 'flex'}}>
                                <div className="vl-op3"></div>
                                <div className = "op-content">
                                    <p className = 'op-surface f3'><b>Jan 2018 - Present</b></p>
                                    <p className = 'op-surface f4'><b>x Amity University, Noida</b></p>
                                    <p className = 'op-surface f4'>x 3 Conference Publications</p>
                                    <p className = 'op-surface f4'>x 1 Journal Publication</p>
                                    <p className = 'op-surface f4'>x ML, Soft Computing</p>
                                </div>
                            </div>
                        </div>
                    </Animated>


                    <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1600} animationOutDuration={1000} isVisible={true}>
                        <div className = 'exp-op'>
                            <p className = 'exp-op-title'><b>Youth Mentor</b></p>
                                <div className="op" style = {{display: 'flex'}}>
                                    <div className="vl-op3"></div>
                                    <div className = "op-content">
                                        <p className = 'op-surface f3'><b>Apr 2019 - Present</b></p>
                                        <p className = 'op-surface f4'><b>x MyCaptain, The Climbers</b></p>
                                        <p className = 'op-surface f4'>x Artificial Intelligence</p>
                                        <p className = 'op-surface f4'>x Content Writing and SEO</p>
                                        <p className = 'op-surface f4'>x 2,500 Mentees</p>
                                    </div>
                                </div>    
                        </div>
                    </Animated>

                    <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1600} animationOutDuration={1000} isVisible={true}>
                        <div className = 'exp-op'>
                            <p className = 'exp-op-title'><b>Content Writer</b></p>
                                <div className="op" style = {{display: 'flex'}}>
                                    <div className="vl-op3"></div>
                                    <div className = "op-content">
                                        <p className = 'op-surface f3'><b>Jan 2018 - Jan 2020</b></p>
                                        <p className = 'op-surface f4'>x 9 Projects</p>
                                        <p className = 'op-surface f4'>x 5 Domains</p>
                                        <p className = 'op-surface f4'>x 70 published articles</p>
                                        <p className = 'op-surface f4'>x 60,000 Content Hits</p>
                                    </div>
                                    
                                </div>  
                        </div>
                    </Animated>

                    <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={2000} animationOutDuration={1000} isVisible={true}>
                        <div className = 'exp-op'>
                        <p className = 'exp-op-title'><b>Education</b></p>
                            <div className="op" style = {{display: 'flex'}}>
                                <div className="vl-op1"></div>
                                <div className = "op-content">
                                    <p className = 'op-surface f3'><b>2017-2021</b></p>
                                    <p className = 'op-surface f4'>x B.Tech Computer Science</p>
                                    <p className = 'op-surface f4'>x Specialisation in AI</p>
                                    <p className = 'op-surface f4'>x 3 Merit Scholarships</p>
                                    <p className = 'op-surface f4'>x Amity University, Noida</p>
                                </div>
                            </div>
                        </div>
                    </Animated>

                    </div>

                    
                    <div className = 'skill-block' style = {{display: 'flex', flexWrap: 'wrap'}}>

                    <Animated animationIn="fadeInLeft" animationInDelay = {2000} animationOut="fadeInOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                            <div className = 'skill-op'>
                                <p className = 'exp-op-title'><b>Languages</b></p>
                                    <div className="op" style = {{display: 'flex'}}>
                                        <div className="vl-op4"></div>
                                        <div className = "op-content">
                                            <p className = 'op-surface f4'>x C++</p>
                                            <p className = 'op-surface f4'>x Python</p>
                                            <p className = 'op-surface f4'>x JavaScript</p>
                                            
                                        </div>
                                    </div>
                            </div>

                            <div className = 'skill-op'>
                                <p className = 'exp-op-title'><b>Web Development</b></p>
                                    <div className="op" style = {{display: 'flex'}}>
                                        <div className="vl-op4"></div>
                                        <div className = "op-content">
                                            <p className = 'op-surface f4'>x ReactJS</p>
                                            <p className = 'op-surface f4'>x SQL-NoSQL</p>
                                            <p className = 'op-surface f4'>x NodeJS-ElectronJS</p>
                                            
                                        </div>
                                    </div>
                            </div>

                            <div className = 'skill-op'>
                                <p className = 'exp-op-title'><b>ML/AI</b></p>
                                    <div className="op" style = {{display: 'flex'}}>
                                        <div className="vl-op4"></div>
                                        <div className = "op-content">
                                            <p className = 'op-surface f4'>x Soft-Computing</p>
                                            <p className = 'op-surface f4'>x Deep Learing</p>
                                            <p className = 'op-surface f4'>x PyTorch</p>
                                            
                                        </div>
                                    </div>
                            </div>

                            <div className = 'skill-op'>
                                <p className = 'exp-op-title'><b>Others</b></p>
                                    <div className="op" style = {{display: 'flex'}}>
                                        <div className="vl-op4"></div>
                                        <div className = "op-content">
                                            <p className = 'op-surface f4'>x Docker, Git</p>
                                            <p className = 'op-surface f4'>x SEO</p>
                                            <p className = 'op-surface f4'>x Wordpress, Heroku</p>
                                            
                                        </div>
                                    </div>
                            </div>
                            </Animated>
                    </div>
                    

                    <div>
                        <p className = 'arrow grow pointer dim'>
                        <Animated animationIn="fadeInRight" animationInDelay = {2000} animationOut="fadeInOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                            <Link to = "/work/copewithcovid" style={{ textDecoration: 'none', color: 'black' }}>
                                <img src = {arrow} width = '150px' height = 'auto'/>
                            </Link>
                        </Animated>
                        </p>
                        
                    </div>

                   



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

export default experience;