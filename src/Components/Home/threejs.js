import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { WaveMaterial } from './WaveMaterial.js'
import {
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Sphere
} from "@react-three/drei"; 
import './threejs.css'


function shape() {

    function ShaderPlane() {
        const ref = useRef()
        const { width, height } = useThree((state) => state.viewport)
        useFrame((state, delta) => (ref.current.time += delta))
        
        return (
          <mesh>
            <sphereGeometry args = {[3, 100, 100]}/>
            <MeshDistortMaterial
              distort={0.5} // Strength, 0 disables the effect (default=1)
              speed={2} // Speed (default=1)
              roughness={0}
            />
            <waveMaterial ref={ref} key={WaveMaterial.key} toneMapped={true} colorStart={'white'} colorEnd={'black'} />
          </mesh>
        )
      }

    return(
        <div className = 'canvas-container'>
            <div className = 'bg-shader'> 
                <Canvas style={{"width": "500px"}}>
                <ShaderPlane />
                </Canvas>
            </div>
        </div>
    )
}

export default shape;