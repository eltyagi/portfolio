import React from 'react';
import './contact.css';
import linkedin from './linkedin.png';
import github from './github.png';
import instagram from './instagram.png';
import wordpress from './wordpress.png';
import medium from './medium.png';
import 'tachyons';

class contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className = 'contact'>
                <div className = 'email'>
                    lakshya_tyagi@icloud.com
                </div>
                <div className = 'logos' style = {{display: 'flex'}}>
        
                        <div className = 'logo-op'>
                        <p className = 'logo-overlay'>Linkedin</p>
                        <a href = "https://www.linkedin.com/in/lakshya-tyagi-45237b11b/"><img className = 'logo-img dim pointer' alt = "" src = {linkedin} width = '50px' height = 'auto'/></a>
                        </div>

                        <div className = 'logo-op'>
                        <p className = 'logo-overlay'>Github</p>
                        <a href = "https://github.com/Lakshya3190"><img className = 'logo-img dim pointer' alt = "" src = {github} width = '50px' height = 'auto'/></a>
                        </div>

                        <div className = 'logo-op'>
                        <p className = 'logo-overlay'>Instagram</p>
                        <a href = "https://www.instagram.com/lakshya1406/?hl=en"><img className = 'logo-img dim pointer' alt = "" src = {instagram} width = '50px' height = 'auto'/></a>
                        </div>

                        <div className = 'logo-op'>
                        <p className = 'logo-overlay'>Wordpress</p>
                        <a href = "https://warriorsway98.wordpress.com/"><img className = 'logo-img dim pointer' alt = "" src = {wordpress} width = '50px' height = 'auto'/></a>
                        </div>

                        <div className = 'logo-op'>
                        <p className = 'logo-overlay'>Medium</p>
                        <a href = "https://medium.com/lakshya-tyagi"><img className = 'logo-img dim pointer' alt = "" src = {medium} width = '50px' height = 'auto'/></a>
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

export default contact;