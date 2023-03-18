import React from 'react';
import './about.css';
import Self from './self-image.JPG';



function About(){

    return(
      <div className = 'about'>

        <div className = 'about-content'>
          <div className = 'about-title'>
            About
          </div>

          <div className = 'about-subtitle'>
            I’m Lakshya. An engineer, educator and researcher.
          </div>

          <div className = 'about-body-1'>
            I take pride in my professional journey for I’ve left no stone unturned. 
            I began my engineering journey as an 11 year old, building digital 3D models of combat aircrafts.<br/><br/>

            Sure enough, upon graduating school, the Army was my first choice. 
            I was one of 90 out of 300,000 applicants selected for Officers Training Academy, Gaya 
            where I underwent basic military training before an injury forced my training to an end.<br/><br/>

            Post this, I spend 4 years completing my Bachelors in Computer Science and Engineering. 
            This was when I truly fell in love with applied computer science. 
            I spent majority of my time working on research projects and published 5 research papers in the 
            domain of applied machine learning and soft computing to defence sciences.<br/><br/>

            Fast forward to 2023, I am working as a solutions engineer @ Cisco, as part of an elite global team of 
            developer advocates and consultants who help businesses achieve their goals through programmability and 
            automation.<br/><br/>

            Be it machine learning, IoT,  cloud native applications, millions of data points, or executive dashboards,
            I have built and demonstrated software prototypes in most domains. Thus, developing an expertise not only 
            in engineering but in effectively selling technology to highly result oriented organizations.<br/><br/>
          </div>

          <div className = 'about-body-2'>
            Perhaps our universe exists the way it does, is because we’re here to measure it. 
          </div>


          <div className = 'about-body-3'>
            This quote by Lawrence Krauss resonated with me deeply, for it pushes us to trespass the 
            facade of our presumptive limitations and enables us to reach something greater.  
          </div>
        </div>

        <div className = 'img'>
          <img src = {Self} width = "70%" height="auto"/>
        </div>
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap" rel="stylesheet"/>      
      </div>
    );
    
}

export default About;