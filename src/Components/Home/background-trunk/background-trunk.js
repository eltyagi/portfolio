import React, { useState, useEffect, useRef } from 'react'
import p5 from 'p5';
import TRUNK from 'vanta/dist/vanta.trunk.min';
import { useMediaQuery } from 'react-responsive'


// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

function Trunk_component(){
  const [spacingValue, setSpacingValue] = useState(0)
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)


  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(TRUNK({
        el: myRef.current,
        p5:p5,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffffff,
        backgroundColor:0x1E1E1E,
        spacing: spacingValue
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div className = 'bg-trunk' style = {{width:'60vh', height:'35vw', backgroundColor:'#1E1E1E'}} ref={myRef}>
  </div>
}
export default Trunk_component;