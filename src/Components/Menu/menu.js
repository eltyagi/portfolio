import React from 'react'
import './menu.css'
import Picture from './img.jpg'

class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className = 'menu'>
                <div className = 'menu-options'>
                    <div className = 'menu-opt'>
                        Home
                    </div>
                    <div className = 'menu-opt'>
                        About Me
                    </div>
                    <div className = 'menu-opt'>
                        Projects
                    </div>
                    <div className = 'menu-opt'>
                        Blog
                    </div>
                    <div className = 'menu-opt'>
                        Contact
                    </div>
                </div>

                <div className = 'image'>
                    <img className = 'picture' src = {Picture}/>
                </div>

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"></link>
            </div>
        );
    }
}

export default Menu;