import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import { Avatar } from "./Avatar";
import Model from "./Model";

export default function Scene() {
  const [isGreeting, setIsGreeting] = useState(false);
  const [greetingMessage, setGreetingMessage] = useState("");

  const handlePlayClick = () => {
    setIsGreeting(true);
    setGreetingMessage("Bonjour !"); // Affiche un message de salut
  };

  const handleAnimationEnd = () => {
    setIsGreeting(false);
    setGreetingMessage(""); // Réinitialise le message
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, 10, -10]} intensity={0.5} />

          {/* Salle de classe */}
          <Model position={[0, -1, 0]} scale={[0.5, 0.5, 0.5]} />

          {/* Avatar */}
          <Avatar
            position={[2, -0.3, -1]}
            scale={[1.5, 1.5, 1.5]}
            onAnimationEnd={handleAnimationEnd}
            currentAnimation={isGreeting ? "greet" : "idle"} // Passez la prop currentAnimation
          />

          <Environment preset="sunset" />
          <OrbitControls
            minDistance={2}
            maxDistance={10}
            maxPolarAngle={Math.PI / 2.1}
          />
        </Suspense>
      </Canvas>

      <button
        onClick={handlePlayClick}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          padding: "10px 20px",
          fontSize: "16px",
          zIndex: 1000,
        }}
      >
        Play
      </button>

      {greetingMessage && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "24px",
            color: "white",
            zIndex: 1000,
          }}
        >
          {greetingMessage}
        </div>
      )}
    </div>
  );
}
