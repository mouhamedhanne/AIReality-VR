import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Vector3 } from "three";

// Types pour notre système de dialogue
interface Dialogue {
  text: string;
  animation: AnimationType;
  duration: number;
  translation?: string;
}

interface AvatarProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  currentLesson?: string;
  onDialogueEnd?: () => void;
}

type AnimationType = "float" | "dance" | "teach" | "explain" | "idle";

// Dictionnaire de leçons
const LESSONS_DATA: Record<string, Dialogue[]> = {
  greeting: [
    {
      text: "Hello! I'm your English teacher.",
      animation: "teach",
      duration: 3000,
      translation: "Bonjour ! Je suis votre professeur d'anglais.",
    },
    {
      text: "Are you ready to learn?",
      animation: "teach",
      duration: 2500,
      translation: "Êtes-vous prêt à apprendre ?",
    },
  ],
  basicPhrases: [
    {
      text: "Let's practice some basic phrases.",
      animation: "explain",
      duration: 3000,
      translation: "Pratiquons quelques phrases de base.",
    },
    {
      text: "Repeat after me: 'How are you?'",
      animation: "teach",
      duration: 3000,
      translation: "Répétez après moi : 'Comment allez-vous ?'",
    },
  ],
};

export const Avatar = ({
  position = [0, 0, 0],
  scale = [1, 1, 1],
  currentLesson,
  onDialogueEnd,
}: AvatarProps) => {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF("/models/instructor.glb");
  const [currentAnimation, setCurrentAnimation] =
    useState<AnimationType>("idle");
  const [dialogueIndex, setDialogueIndex] = useState(0);

  const danceTime = useRef(0);
  const teachTime = useRef(0);
  const explainTime = useRef(0);
  const originalPosition = useRef(new Vector3(...position));

  // Reset dialogue when lesson changes
  useEffect(() => {
    setDialogueIndex(0);
  }, [currentLesson]);

  // Handle dialogue progression
  useEffect(() => {
    if (!currentLesson) return;

    const currentDialogues = LESSONS_DATA[currentLesson];
    if (!currentDialogues || dialogueIndex >= currentDialogues.length) return;

    const dialogue = currentDialogues[dialogueIndex];
    setCurrentAnimation(dialogue.animation);

    const timer = setTimeout(() => {
      if (dialogueIndex < currentDialogues.length - 1) {
        setDialogueIndex((prev) => prev + 1);
      } else {
        setCurrentAnimation("idle");
        setDialogueIndex(0);
        onDialogueEnd?.();
      }
    }, dialogue.duration);

    return () => clearTimeout(timer);
  }, [currentLesson, dialogueIndex, onDialogueEnd]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const time = state.clock.elapsedTime;

    groupRef.current.position.copy(originalPosition.current);
    groupRef.current.rotation.set(0, 0, 0);

    switch (currentAnimation) {
      case "teach":
        teachTime.current += delta;
        groupRef.current.rotation.y = Math.sin(teachTime.current * 0.5) * 0.2;
        groupRef.current.position.y += Math.sin(time * 0.5) * 0.05;
        break;

      case "explain":
        explainTime.current += delta;
        groupRef.current.rotation.z = Math.sin(explainTime.current) * 0.15;
        groupRef.current.rotation.y = Math.cos(explainTime.current * 0.5) * 0.2;
        break;

      case "float":
        groupRef.current.position.y += Math.sin(time * 2) * 0.2;
        break;

      case "dance":
        danceTime.current += delta;
        groupRef.current.position.y +=
          Math.abs(Math.sin(danceTime.current * 4)) * 0.2;
        groupRef.current.rotation.y = Math.sin(danceTime.current * 2) * 0.5;
        groupRef.current.position.x += Math.sin(danceTime.current) * 0.1;
        break;

      case "idle":
      default:
        groupRef.current.position.y += Math.sin(time) * 0.05;
        break;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <primitive object={scene} />
    </group>
  );
};
