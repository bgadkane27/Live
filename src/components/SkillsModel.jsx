import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const model = useGLTF("/models/planet/scene.gltf");
  return <primitive object={model.scene} scale={1} />;
};

const SkillsModel = () => {
  return (
    <Canvas camera={{ position: [10, 0, 2], fov: 25 }}
    className="absolute inset-0 z-50">
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 5, 5]} />
      <OrbitControls enableZoom={true} />
      <Model />
    </Canvas>
  );
};

export default SkillsModel;
