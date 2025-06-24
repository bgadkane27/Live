import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";

const Model = () => {
  const model = useGLTF("/models/planet/scene.gltf"); 

  return <primitive 
  object={model.scene} 
  scale={1} 
  />;
};

const ModelViewer = () => {
  return (
    <Canvas camera={{ position: [1, 0, 2], fov: 60 }}
      className="w-full h-[400px] md:h-[500px]">
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 5, 5]} />
      <Stars radius={50} depth={50} count={800} factor={4} />
      <OrbitControls 
      autoRotate
      autoRotateSpeed={1.5}
      enableZoom={true}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
      minDistance={2}
      maxDistance={4}
      />
      <Model />
    </Canvas>
  );
};

export default ModelViewer;
