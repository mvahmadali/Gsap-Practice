import React from "react";
import RotatingCube from "./components/RotatingCube";
import AnimatedDiv from "./components/AnimatedDiv";
import ThreeDScene from "./components/ThreeDScene";
import gsap from "gsap";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   // animate the box after it's in the DOM
  //   gsap.to(".box", { x: 200, duration: 1 });
  // }, []); // empty deps = run once on mount
  return (
    <div className="relative w-full h-screen bg-zinc-900">
      <div className="absolute w-full h-full">
        <RotatingCube />
      </div>
      {/* <AnimatedDiv /> */}
      <ThreeDScene />
    </div>
  );
}

export default App;
