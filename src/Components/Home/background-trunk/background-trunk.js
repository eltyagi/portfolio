import React, { useState, useEffect, useRef } from 'react'
import p5 from 'p5';
import TRUNK from 'vanta/dist/vanta.trunk.min';
import { useMediaQuery } from 'react-responsive'


// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

function Trunk_component(){
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  let event_spacing = 0;
  let event_chaos = 0;

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  
  
  isTabletOrMobile
  ? (
  event_spacing = -1
  )
   :
  (
    isBigScreen
    ? 
    event_spacing = 1
    : event_spacing = 0
  )


  isTabletOrMobile
  ? (
  event_chaos = 1
  )
   :
  (
    isBigScreen
    ? 
    event_chaos = 2
    : event_chaos = 1
  )


  console.log(event_spacing)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(TRUNK({
        el: myRef.current,
        p5:p5,
        scale: 2.00,
        scaleMobile: 1.00,
        color: 0xffffff,
        backgroundColor:0x1E1E1E,
        chaos: event_chaos,
        spacing: event_spacing
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div className = 'bg-trunk' style = {{width:'100vw', height:'100vh', backgroundColor:'#1E1E1E'}} ref={myRef}>
  </div>
}
export default Trunk_component;