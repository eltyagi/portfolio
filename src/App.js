import React from 'react';
import './App.css';
import 'tachyons';
import {Animated} from "react-animated-css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About/about.js';
import Home from './Components/Home/home.js';
import Contact from './Components/Contact/contact.js';
import Experience from './Components/Work/work.js';
import CopeWithCovid from './Components/Work/copewithcovid/copewithcovid.js';
import Journie from './Components/Work/journie/journie.js';
import Research1 from './Components/Work/research1/research1.js';
import Research2 from './Components/Work/research2/research2.js';
import Research3 from './Components/Work/research3/research3.js';
import Logo from './logo.png';
import Trans from './transition.js';
import useEffect from 'react';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      transitionOn: true,
    }

  }

  componentDidMount(){
    setTimeout(()=> this.setState({transitionOn: !this.state.transitionOn}), 2000)
  }

  handleClick = (e) => {
    this.setState({transitionOn: true})
    this.componentDidMount();
  }

  
  

  render(){
    return (
      <div>
        {
          
          this.state.transitionOn === true
          ? <div>
          <Animated animationIn="slideInDown" animationOut="slideOutDown" animationOutDelay={1000} animationOutDuration={1000} isVisible={this.state.transitionOn}>
          <Trans/>
          </Animated>
          </div>
          :<div>
            <Router>
        <div className = 'nav-bar'>
          <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
            <p  className = 'logo-tag'>
              <Link to = "/">
                <img onClick = {this.handleClick} className = 'logo grow' alt = 'logo' src = {Logo} height = 'auto' width = '80'></img>
              </Link></p>
          </Animated>

              <div className = 'sub-nav-bar'>
                <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1200} animationOutDuration={1000} isVisible={true}>
                  <p onClick = {this.handleClick} className = 'nav-op pointer grow dim'>
                    <Link to = "/about" style={{ textDecoration: 'none', color: 'black' }}>
                      About
                    </Link>
                  </p>
                </Animated>

                <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1400} animationOutDuration={1000} isVisible={true}>
                  <p onClick = {this.handleClick} className = 'nav-op pointer grow dim'>
                    <Link to = "/experience" style={{ textDecoration: 'none', color: 'black' }}>
                      Experience
                    </Link>
                  </p>
                </Animated>

                <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1600} animationOutDuration={1000} isVisible={true}>
                  <p className = 'nav-op pointer grow dim'>
                    Resume
                  </p>
                </Animated>

                <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1800} animationOutDuration={1000} isVisible={true}>
                  <p onClick = {this.handleClick} className = 'nav-op pointer grow dim'>
                    <Link to = "/contact" style={{ textDecoration: 'none', color: 'black' }}>
                      Contact
                    </Link>
                  </p>
                </Animated>

                <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1800} animationOutDuration={1000} isVisible={true}>
                  <p className = 'nav-op pointer grow dim hide-op'>
                    <Link to = "/work/copewithcovid" style={{ textDecoration: 'none', color: 'black' }}>
                      CopeWithCovid
                    </Link>
                  </p>
                </Animated>

                <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1800} animationOutDuration={1000} isVisible={true}>
                  <p className = 'nav-op pointer grow dim hide-op'>
                    <Link to = "/work/journie" style={{ textDecoration: 'none', color: 'black' }}>
                      Journie
                    </Link>
                  </p>
                </Animated>

                <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1800} animationOutDuration={1000} isVisible={true}>
                  <p className = 'nav-op pointer grow dim hide-op'>
                    <Link to = "/work/research1" style={{ textDecoration: 'none', color: 'black' }}>
                      Research1
                    </Link>
                  </p>
                </Animated>

                <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1800} animationOutDuration={1000} isVisible={true}>
                  <p className = 'nav-op pointer grow dim hide-op'>
                    <Link to = "/work/research1" style={{ textDecoration: 'none', color: 'black' }}>
                      Research2
                    </Link>
                  </p>
                </Animated>

                <Animated animationIn="fadeInDown" animationOut="fadeInOut" animationInDuration={1800} animationOutDuration={1000} isVisible={true}>
                  <p className = 'nav-op pointer grow dim hide-op'>
                    <Link to = "/work/research3" style={{ textDecoration: 'none', color: 'black' }}>
                      Research3
                    </Link>
                  </p>
                </Animated>
              </div>

              <div className = 'res-nav-bar dropdown'>
                <button className = 'dropbtn'>MENU</button>
                <div className = 'dropdown-content'>
                    <p onClick = {this.handleClick} className = 'pointer drop-op'><Link to = "/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link></p>
                    <p onClick = {this.handleClick} className = 'pointer drop-op' ><Link to = "/experience" style={{ textDecoration: 'none', color: 'black' }}>Work</Link></p>
                    <p className = 'pointer drop-op' >Resume</p>
                    <p onClick = {this.handleClick} className = 'pointer drop-op' ><Link to = "/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></p>

                </div>
              </div>          
        </div>
        <div>
        
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
            {/*<Animated animationIn="fadeInUp" animationOut="fadeInOut" animationInDuration={1000} animationOutDuration={1000} isVisible = {true}>*/}
            <About />
            {/*</Animated>*/}
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/experience">
            {/*<Animated animationIn="fadeInUp" animationOut="fadeInOut" animationInDuration={1000} animationOutDuration={1000} isVisible = {true}>*/}
              <Experience />
            {/*</Animated>*/}
            </Route>
            <Route path="/work/copewithcovid">
            <Animated animationIn="fadeInUp" animationOut="fadeInOut" animationInDuration={1000} animationOutDuration={1000} isVisible = {this.state.transitionOn}>
              <CopeWithCovid />
              </Animated>
            </Route>
            <Route path="/work/journie">
              <Journie />
            </Route>
            <Route path="/work/research1">
              <Research1 />
            </Route>
            <Route path="/work/research2">
              <Research2 />
            </Route>
            <Route path="/work/research3">
              <Research3 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>


        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Play&display=swap" rel="stylesheet"></link>
      </div>

            
        }
      </div>
    );
  }
}

export default App;
