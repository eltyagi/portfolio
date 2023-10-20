import React, { useCallback, useEffect, useState } from 'react';
import './about.css';
import './about_content'
import './about_content'
import content from './about_content';
import AboutCard from './card/about_card.js';
function About(){
    return(
        <div className = 'about'>
            <div className = 'list'>
                {
                    content.map((about_content) => {
                        
                        return <AboutCard className = 'about-card' title = {about_content.title} key = {about_content.id} body = {about_content.body}/>
                    })
                }
            </div>
        </div>
    );
}

export default About;