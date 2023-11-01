import React from "react";
import './contact.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";

function Contact(){
    return(
        <div className = 'contact'>
            <div className = 'contact-title'>
                Let's Connect!
            </div>
            <div className = 'contact-op email'>
                lakshya_tyagi@icloud.com
            </div>
            <div className = 'contact-op insta'>
                instagram
            </div>
            <div className = 'contact-op github'>
                github
            </div>
            <div className = 'contact-op substack'>
                substack
            </div>
            <div className = 'contact-op linkedin'>
                linkedin
            </div>
            <Link to = "/" style={{ textDecoration: 'none', color: 'black' }}>
            <div className = 'contact-op home'>
                home
            </div>
            </Link>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet"/>
        </div>
    )
}

export default Contact;