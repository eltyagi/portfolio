import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './home.css';
import "pathseg";
import Shape from './threejs.js'


class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      route: ''
    }
  }

  render(){
  return (
    <div className="home">
      
      <div className = 'home-text center'>
        Resilient. Driven. Bold.
      <div className = 'home-text-sub'>
        I build digital experiences.<br/>
        Enable competence, merit and ethics.<br/>
        Bridge technology with business outcomes.<br/>
      </div>
      <br/>
      

      </div>
      <div className='sphere center'>
        <Shape/>
      </div>
    

          
      
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap" rel="stylesheet"></link>
    </div>



  );
  }
}

export default Home;
