import React from 'react';
import 'tachyons';
import {Animated} from "react-animated-css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './home.css';
import Particles from 'react-tsparticles';
import Deer from './small-deer.svg';
import "pathseg";


class Home extends React.Component {
  constructor(props){
    super(props);
    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
    this.state = {
      route: ''
    }
  }

  particlesInit(main) {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    console.log(container);
  }

  render(){
  return (
    <div className="Home">
    <Particles 
    className="particles"
     id="tsparticles"
     options={{
      background: {
        color: {
          value: "#fff",
        },
      },
      detectRetina: false,
      fpsLimit: 60,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: false,
            mode: "push"
          },
          onDiv: {
            elementId: "repulse-div",
            enable: false,
            mode: "repulse"
          },
          onHover: {
            enable: true,
            mode: "bubble",
            parallax: {
              enable: false,
              force: 2,
              smooth: 10
            }
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 100,
            duration: 2,
            opacity: 8,
            size: 6,
            speed: 3
          },
          connect: {
            distance: 80,
            lineLinked: { opacity: 0.5 },
            radius: 60
          },
          grab: {
            distance: 400,
            lineLinked: { opacity: 1 }
          },
          push: { quantity: 4 },
          remove: { quantity: 2 },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          slow: {
            active: false,
            radius: 0,
            factor: 1
          }
        }
      },
      particles: {
        color: { value: "rgba(240,25,0,0.3)" },
        lineLinked: {
          blink: false,
          color: "rgba(240,25,0,0.3)",
          consent: false,
          distance: 30,
          enable: true,
          opacity: 0.7,
          width: 1
        },
        move: {
          attract: {
            enable: false,
            rotate: {
              x: 600,
              y: 1200
            }
          },
          bounce: false,
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: false,
            area: 6000
          },
          limit: 0,
          value: 400
        },
        opacity: {
          animation: {
            enable: true,
            minimumValue: 0.05,
            speed: 2,
            sync: false
          },
          random: false,
          value: 0.4
        },
        shape: {
          character: {
            fill: false,
            font: "Verdana",
            style: "",
            value: "*",
            weight: "400"
          },
          image: {
            height: 100,
            replaceColor: true,
            src: "images/github.svg",
            width: 100
          },
          polygon: { sides: 5 },
          stroke: {
            color: "#000000",
            width: 0
          },
          type: "circle"
        },
        size: {
          animation: {
            enable: false,
            minimumValue: 0.1,
            speed: 40,
            sync: false
          },
          random: true,
          value: 3
        }
      },
      polygon: {
        draw: {
          enable: true,
          lineColor: "rgba(240,25,0,0.3)",
          lineWidth: 0.8,
        },
        move: {
          radius: 50,
        },
        inlineArrangement: "equidistant",
        scale: 0.9,
        type: "inline",
        //url: {polygonmasklogo},
        url: "https://cdn.matteobruni.it/images/particles/smalldeer.svg",
      },
    }} />
  
      <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={2000} animationOutDuration={1000} isVisible={true}>
        <div className = 'lp-body' style = {{display: 'flex', justifyContent: 'space-between'}}>


            <div className = 'name name-wrapper'>
              <p className = 'name'>Lakshya<br/></p>
              
              <div className = 'name-p2' style = {{display: 'flex'}}>
                <div>
                  <ul className = 'desig-list'>
                    <li>Writer</li>
                    <li>Mentor</li>
                    <li>Engineer</li>
                    <li>Researcher</li>
                  </ul>
                </div>
                <div class="vl"></div>
                <div className = 'sname'>Tyagi<br/></div>
                

              </div>
          </div>



          <div className = 'projects'>
              <div className = 'proj-unit'>
                <p className = 'proj-name f6'>Experience</p>
                <p className = 'proj-no pointer grow'><Link to = "/experience" style={{ textDecoration: 'none', color: 'black' }}>01</Link></p>
              </div>

              <div className = 'proj-unit'>
                <p className = 'proj-name f6'>CopeWithCovid</p>
                <p className = 'proj-no pointer grow'><Link to = "/work/copewithcovid" style={{ textDecoration: 'none', color: 'black' }}>02</Link></p>
              </div>

              <div className = 'proj-unit'>
              <p className = 'proj-name f6'>Journie</p>
              <p className = 'proj-no pointer grow'><Link to = "/work/journie" style={{ textDecoration: 'none', color: 'black' }}>03</Link></p>
              </div>

              <div className = 'proj-unit'>
              <p className = 'proj-name f6'>Research I</p>
              <p className = 'proj-no pointer grow'><Link to = "/work/research1" style={{ textDecoration: 'none', color: 'black' }}>04</Link></p>
              </div>

              <div className = 'proj-unit'>
              <p className = 'proj-name f6'>Research II</p>
              <p className = 'proj-no pointer grow proj-no-5'><Link to = "/work/research2" style={{ textDecoration: 'none'}}>05</Link></p>
              </div>

              <div className = 'proj-unit'>
              <p className = 'proj-name f6'>Research III</p>
              <p className = 'proj-no pointer grow'><Link to = "/work/research3" style={{ textDecoration: 'none', color: 'black' }}>06</Link></p>
              </div>

              <div className = 'proj-unit'>
              <p className = 'proj-name f6'>Resume</p>
              <p className = 'proj-no pointer grow'>07</p>
              </div>

              <div className = 'proj-unit'>
              <p className = 'proj-name f6'>About</p>
              <p className = 'proj-no pointer grow'><Link to = "/about" style={{ textDecoration: 'none', color: 'black' }}>08</Link></p>
              </div>

              <div className = 'proj-unit'>
              <p className = 'proj-name f6'>Contact</p>
              <p className = 'proj-no pointer grow'><Link to = "/contact" style={{ textDecoration: 'none', color: 'black' }}>09</Link></p>
              </div>
              
          </div>

        </div>
      </Animated>
      <div className = "hl"></div>

          
      
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Play&display=swap" rel="stylesheet"></link>
        <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
    </div>



  );
  }
}

export default Home;
