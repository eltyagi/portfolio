import React, { useCallback, useEffect, useState } from 'react';
import './about_card.css';

function AboutCard(props){
   

    return(
        <div className = 'about-card'>


            <div className = 'title'>
                {props.title}
            </div>
            <div className = 'body'>
                {props.body}
            </div>

         
        </div>
    );
}

export default AboutCard;