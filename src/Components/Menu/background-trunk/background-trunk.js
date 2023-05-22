import React from 'react'
import p5 from 'p5';
import TRUNK from 'vanta/dist/vanta.trunk.min';

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

class MyComponent extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = TRUNK({
      el: this.vantaRef.current,
      p5: p5, // use a custom p5 when initializing
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      spacing: -1,
      color: 0xffffff,
      backgroundColor:0x1E1E1E
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div style = {{width:'60vh', height:'35vw', backgroundColor:'#1E1E1E'}} ref={this.vantaRef}>
    </div>
  }
}
export default MyComponent;