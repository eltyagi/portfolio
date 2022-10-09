import React from "react";
import './aboutMe.css';
import Self from './self-img.png';


class aboutMe extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className = 'aboutMe'>
                 <div className='image'>
                <img src = {Self} className = 'self-img'/>
                </div>

                <div className = 'aboutMe'>
                    Hello!
                    <br/>
                    I am Lakshya.
                </div>

            </div>
        );
    }
}

export default aboutMe;