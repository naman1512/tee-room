import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      scale={10}
      alphaTest={0.2}
      rotation={[Math.PI / 2, 0, 0]}
      position={[1, 1, -0.28]}
    >
      <RandomizedLight 
        amount={10}
        radius={10}
        intensity={0.20}
        ambient={0.15}
        position={[14, 2, -10]}
      />
      <RandomizedLight 
        amount={5}
        radius={10}
        intensity={0.85}
        ambient={0.15}
        position={[-9, 5, -10]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop