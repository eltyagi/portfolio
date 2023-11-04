import React from 'react';
import './research.css';

function Research(){
    return(
        <div className = 'research'>
            <div className = 'title'>
                Research
            </div>
            <div className = 'body'>
            My published work includes the application of machine learning, deep learning and soft-computing to defence sciences, 
            with a perpetual attempt at blurring the line between academia and applied computer science. Check out my work <a style={{ textDecoration: 'none', color: 'black' }} href = "https://www.researchgate.net/scientific-contributions/Lakshya-Tyagi-2160566907">here</a>. 
            </div>
        </div>

    );   
}

export default Research;