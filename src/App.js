import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import Home from './Components/Home/home.js';
import Logo from './logo.png';
import Trans from './transition.js';



const trackingId = "UA-186285153-3";




class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      transitionOn: true,
    }

  }

  //Google analytics initizalization
  initGA = () => {
    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  //Loader transition
  componentDidMount(){
    setTimeout(()=> this.setState({transitionOn: !this.state.transitionOn}), 2000)
    this.initGA();
  }

  handleClick = (e) => {
    this.setState({transitionOn: true})
    this.componentDidMount();
  }

  
  

  render(){
    return (
      <div className = 'App'>

        <div className = 'nav'>
         <div className = 'nav-content'>
          <div className = 'nav-point logo-name'>LakshyaTyagi.</div>
          <div className = 'nav-point menu'>
            <div className = 'nav-point dot'></div>
            <div className = 'nav-point dot'></div>
            <div className = 'nav-point dot'></div>
          </div>
          <div className = 'nav-point logo-name'>VanGuard.</div>
         </div>
        </div>

        <div className = 'view center'>
          <Home/>
        </div>




        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&family=Poppins:wght@300&display=swap" rel="stylesheet"/>
      </div>
    );
  }
}

export default App;
