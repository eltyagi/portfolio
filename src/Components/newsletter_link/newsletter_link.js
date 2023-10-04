import React, { useCallback, useEffect, useState } from 'react';
import './newsletter_link.css';
import NewsLetterLink from './link.png'

function LandingPage(){
    return(
        <div className = "newsletter">
            <img className = 'newsletter-link' src = {NewsLetterLink}/>
        </div>
    );
}

export default LandingPage;