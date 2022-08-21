import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { TransitionGroup, CSSTransition} from 'react-transition-group'
import { useLocation } from 'react-router-dom'
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import Menu from './Components/Menu/menu.js';
import Home from './Components/Menu/Home/home.js';




const trackingId = "UA-186285153-3";




function App(){

  {/*//Google analytics initizalization
  const initGA = () => {
    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }*/}

  

    const location = useLocation()
    
    return (
      <div style = {{margin: "0px"}} className = 'App'>

       
          <div className = 'nav'>
            <div className = 'nav-content'>
              <div className = 'nav-point logo-name'>LakshyaTyagi.</div>
                <div className = 'nav-point menu' onClick={() => {this.onOpenMenu(); this.onToggleComponentAnimation()}}>
                    <Link to = "/menu" style={{ textDecoration: 'none', color: 'black' }}>
                      <div className = 'nav-point dot'></div>
                      <div className = 'nav-point dot'></div>
                      <div className = 'nav-point dot'></div>
                    </Link>
                  </div>
                <div className = 'nav-point logo-name'>VanGuard.</div>
              </div>
          </div>

            <TransitionGroup>
            <CSSTransition
            timeout={300}
            classNames='fade'
            key={location.key}
            >
              <Routes location={location} style = {{margin: "0px"}}>
                <Route style = {{margin: "0px"}} path="/menu" element={<Menu/>}/>
                <Route style = {{margin: "0px"}} path="/" element={<Home/>}/>
              </Routes>
            </CSSTransition>
            </TransitionGroup>
      
        


        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&family=Poppins:wght@300&display=swap" rel="stylesheet"/>
      </div>
    )
}

export default App;
