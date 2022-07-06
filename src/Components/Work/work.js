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
            <div className = 'work' style = {{display: 'flex'}}>
                
                <div className = 'work-page'>

                    <div className = 'exp-block'>
                        <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                            <p className = 'exp-title'>Experience</p>
                        </Animated>

                        <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1200} animationOutDuration={1000} isVisible={true}>
                            <div className = 'exp-op'>
                            <p className = 'exp-op-title'>Associate Systems Engineer</p>
                                <div className="op" style = {{display: 'flex'}}>
                                    <div className="vl-op2"></div>
                                    <div className = "op-content">
                                        <p className = 'exp-name op-surface f4 pointer dim'><a href = "https://www.cisco.com/c/en_in/index.html"><b>Cisco Systems</b></a></p>
                                        <p className = 'exp-date op-surface f3'>Aug 2021 - Present</p>
                                        <br/>
                                        <p className = 'op-surface f4'>x Coveted CSAP Program</p>
                                        <p className = 'op-surface f4'>x Networking, Security</p>
                                        <p className = 'op-surface f4'>x CCNA, DevNet Asc</p>
                                    </div>
                                </div>
                            </div>
                        </Animated>

                        <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1200} animationOutDuration={1000} isVisible={true}>
                            <div className = 'exp-op'>
                            <p className = 'exp-op-title'>SDET Intern</p>
                                <div className="op" style = {{display: 'flex'}}>
                                    <div className="vl-op2"></div>
                                    <div className = "op-content">
                                        <p className = 'exp-name op-surface f4 pointer dim'><a href = "https://www.zs.com/"><b>ZS Associates</b></a></p>
                                        <p className = 'exp-date op-surface f3'>Jan 2021 - July 2021</p>
                                        <br/>
                                        <p className = 'op-surface f4'>x Quality Assurance</p>
                                        <p className = 'op-surface f4'>x ETL, Big data</p>
                                        <p className = 'op-surface f4'>x Web Development</p>
                                    </div>
                                </div>
                            </div>
                        </Animated>

                        <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1200} animationOutDuration={1000} isVisible={true}>
                        <div className = 'exp-op'>
                        <p className = 'exp-op-title'>Researcher</p>
                            <div className="op" style = {{display: 'flex'}}>
                                <div className="vl-op3"></div>
                                <div className = "op-content">
                                    <p className = 'exp-name op-surface f4 pointer dim'><a href = "https://www.amity.edu/"><b>Amity University</b></a></p>
                                    <p className = 'op-surface f3'>Jan 2018 - Jan 2021</p>
                                    <br/>
                                    <p className = 'op-surface f4'>x 5 Publications</p>
                                    <p className = 'op-surface f4'>x 1 Journal Publication</p>
                                    <p className = 'op-surface f4'>x ML, Soft Computing</p>
                                </div>
                            </div>
                        </div>
                    </Animated>

                        <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1200} animationOutDuration={1000} isVisible={true}>
                            <div className = 'exp-op'>
                            <p className = 'exp-op-title'>SDE Intern</p>
                                <div className="op" style = {{display: 'flex'}}>
                                    <div className="vl-op2"></div>
                                    <div className = "op-content">
                                        <p className = 'exp-name op-surface f4 pointer dim'><a href = "https://www.mds-afs.com/"><b>AFS, Bahrain</b></a></p>
                                        <p className = 'exp-date op-surface f3'>Sept 2019 - Jan 2020</p>
                                        <br/>
                                        <p className = 'op-surface f4'>x Docker, DevOps</p>
                                        <p className = 'op-surface f4'>x PostgreSQL, DBMS</p>
                                        <p className = 'op-surface f4'>x Web Development</p>
                                    </div>
                                </div>
                            </div>
                        </Animated>

                    </div>

                    <div className = 'exp-block'>

                        <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                        <p className = 'exp-title'>Freelancing</p>
                    </Animated>

                        <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1600} animationOutDuration={1000} isVisible={true}>
                        <div className = 'exp-op'>
                            <p className = 'exp-op-title'>Educator</p>
                                <div className="op" style = {{display: 'flex'}}>
                                    <div className="vl-op3"></div>
                                    <div className = "op-content">
                                        <p className = ' exp-name op-surface f4 pointer dim'><a href = "https://www.mycaptain.in/"><b>The Climbers</b></a></p>
                                        <p className = 'op-surface f3'>Apr 2019 - Present</p>
                                        <br/>
                                        <p className = 'op-surface f4'>x Artificial Intelligence</p>
                                        <p className = 'op-surface f4'>x SEO</p>
                                        <p className = 'op-surface f4'>x 3,500 Mentees</p>
                                    </div>
                                </div>    
                        </div>
                    </Animated>

                        <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1600} animationOutDuration={1000} isVisible={true}>
                        <div className = 'exp-op'>
                            <p className = 'exp-op-title'>Writer</p>
                                <div className="op" style = {{display: 'flex'}}>
                                    <div className="vl-op3"></div>
                                    <div className = "op-content">
                                        <p className = ' exp-name op-surface f4 pointer dim'><a href = "https://www.mycaptain.in/"><b>Freelance</b></a></p>
                                        <p className = 'op-surface f3'>Jan 2018 - Jan 2020</p>
                                        <br/>
                                        <p className = 'op-surface f4'>x 9 Projects</p>
                                        <p className = 'op-surface f4'>x 70 published articles</p>
                                        <p className = 'op-surface f4'>x 60,000 Content Hits</p>
                                    </div>
                                    
                                </div>  
                        </div>
                    </Animated>
                    </div>

                    <div className = 'exp-block'>

                        <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                            <p className = 'exp-title'>Skills</p>
                        </Animated>

                        <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1600} animationOutDuration={1000} isVisible={true}>
                            <div className = 'exp-op'>
                                <p className = 'exp-op-title'>Languages</p>
                                    <div className="op" style = {{display: 'flex'}}>
                                        <div className="vl-op5"></div>
                                        <div className = "op-content">
                                            <p className = 'op-surface f4'>x C++</p>
                                            <p className = 'op-surface f4'>x Python</p>
                                            <p className = 'op-surface f4'>x JavaScript</p>
                                        </div>
                                    </div>    
                            </div>
                        </Animated>
                        
                        <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1600} animationOutDuration={1000} isVisible={true}>
                            <div className = 'exp-op'>
                                <p className = 'exp-op-title'>Web</p>
                                    <div className="op" style = {{display: 'flex'}}>
                                        <div className="vl-op5"></div>
                                        <div className = "op-content">
                                            <p className = 'op-surface f4'>x ReactJS</p>
                                            <p className = 'op-surface f4'>x SQL-NoSQL</p>
                                            <p className = 'op-surface f4'>x NodeJS - ElectronJS</p>
                                        </div>
                                    </div>    
                            </div>
                        </Animated>

                        <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1600} animationOutDuration={1000} isVisible={true}>
                        <div className = 'exp-op'>
                            <p className = 'exp-op-title'>ML/AI</p>
                                <div className="op" style = {{display: 'flex'}}>
                                    <div className="vl-op5"></div>
                                    <div className = "op-content">
                                        <p className = 'op-surface f4'>x Soft-Computing</p>
                                        <p className = 'op-surface f4'>x Deep Learning</p>
                                        <p className = 'op-surface f4'>x Reinforcement Learning</p>
                                    </div>
                                    
                                </div>  
                        </div>
                    </Animated>

                    <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1600} animationOutDuration={1000} isVisible={true}>
                        <div className = 'exp-op'>
                            <p className = 'exp-op-title'>Tools</p>
                                <div className="op" style = {{display: 'flex'}}>
                                    <div className="vl-op5"></div>
                                    <div className = "op-content">
                                        <p className = 'op-surface f4'>x Docker, Git</p>
                                        <p className = 'op-surface f4'>x Jira</p>
                                        <p className = 'op-surface f4'>x Selenium</p>
                                    </div>
                                    
                                </div>  
                        </div>
                    </Animated>
                    </div>    

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
           
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap" rel="stylesheet"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Play&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap" rel="stylesheet"></link>    
            </div>
        );
    }
}

export default experience;