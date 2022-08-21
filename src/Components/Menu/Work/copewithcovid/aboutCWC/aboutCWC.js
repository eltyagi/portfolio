import React from 'react';
import './aboutCWC.css';
import cwcss from './cwc-ss.png';
import 'tachyons';

class aboutCWC extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div className = 'description-cwc'>
                    <h2><b>Cope with Covid</b></h2>

                    <b>The Story</b>
                    <br/><br/>
                    <p>

                        Peak of COVID-19 Lockdown was rampant with out-of-stock groceries,
                        crunched E-Commerce sites and lack of customers for small businesses.
                        While sites like <i>Amazon</i> and <i>Big Basket</i> failed to deliver,
                        small business were stocked with supplies but had no customers due to the lockdown.
                        <br/><br/>
                        Cope With Covid was developed to meet grocery requirements of residents within a 
                        5km radius while enabling small business owners to post and publicise their stocks.
                        <br/><br/>

                        Cope with Covid was developed as a web-application with a stock portal, Covid-19
                        dashboard and a Vulnerability analysis. 
                        <br/><br/>
                    </p>


                    <a href = "https://github.com/Lakshya3190/cope-with-covid">
                        <u><b>View Project Repository</b></u>
                    </a>
                    <br/><br/>
                    
                    <p>
                        <b>Accolades</b><br/> 
                        x Awarded 1st Position, hackCOVID hackathon (out of 4,500 submissions)<br/>
                        x Shortlisted for Pre-Incubation by a leading B-School.
                        <br/><br/>
                    </p>
                    <p>
                        <b>Tech-Stack</b><br/> 
                        FrontEnd: ReactJS<br/>
                        BackEnd: NodeJS, Heroku<br/>
                        Database: PostgreSQL<br/>
                        <br/>
                    </p>
                    <p>
                        <b>Features</b><br/> 
                        Dynamic Covid-19 Dashboard<br/>
                        Product and Services Portal<br/>
                        Vulnerability Analysis<br/>
                        <br/>
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

export default aboutCWC;