import React from 'react';
import './aboutR2.css';

class aboutR2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className = 'aboutR2' style = {{display: 'flex', flexWrap: 'wrap'}}>
                <div className = 'description-R'>
                    <h3><b>Explosion Consequence Analysis</b></h3>
                    <p>Journie’ is intended to be a productivity application with smart features and an aim
                        of optimizing the experience of writing and organizing journals, sharing important
                        events and encouraging productivity. The application exists as a cross-platform
                        software which will support Windows and Mac PC as a desktop application as well
                        as a mobile application which will support android OS. 
                    </p>
                    <p>
                        <b>Tech-Stack</b><br/> 
                        FrontEnd: ReactJS<br/>
                        BackEnd: NodeJS, ElectronJS<br/>
                        Database: PostgreSQL, MongoDB<br/>
                    </p>
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

export default aboutR2;