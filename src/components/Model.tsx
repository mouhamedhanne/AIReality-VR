import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";

interface ModelProps {
  position?: [number, number, number];
  scale?: [number, number, number];
}

export default function Model({
  position = [0, 0, 0],
  scale = [1, 1, 1],
}: ModelProps) {
  const { scene } = useGLTF("/models/class_room_01.glb") as { scene: Object3D };
  return <primitive object={scene} position={position} scale={scale} />;
}
