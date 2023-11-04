import React from 'react';
import './projects.css';

function Projects(){
    return(
        <div className = 'projects'>
            <div className = 'title'>
                Projects
            </div>
            <div className = 'body'>
            As an engineer, I read, a lot. I write a bunch, design a whole lot and build all day. 
            We can change the world with a laptop and some code, there is immense power in that. 
            If you’d like to collaborate, or checkout my work, here is my <a style={{ textDecoration: 'none', color: 'black' }} href = "https://github.com/Lakshya3190">Github</a>!
            </div>
        </div>

    );   
}

export default Projects;