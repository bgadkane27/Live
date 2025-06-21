import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const ThreeModel = () => {
  const { scene } = useGLTF('/models/paradox.glb');
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= 0.002;
    }
  })
  return <primitive 
      ref={meshRef} 
      object={scene} 
      scale={1.2} 
      position={[0, 0, 0]} 
    />
};

export default ThreeModel;