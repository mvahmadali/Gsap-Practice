import React from "react";
import RotatingCube from "./components/RotatingCube";
import gsap from "gsap";
import { useEffect } from "react";

function App() {
  const [enablecube, setEnablecube] = React.useState(false);
  // useEffect(() => {
  //   // animate the box after it's in the DOM
  //   gsap.to(".box", { x: 200, duration: 1 });
  // }, []); // empty deps = run once on mount
  return (
    <div className="w-full h-screen bg-zinc-900">
      <button
        className="text-2xl text-white border-2 border-white p-4"
        onClick={() => setEnablecube(!enablecube)}
      >
        Click To Toggle Cube
      </button>
      {enablecube && <RotatingCube />}
      <div
        className=" box w-24 h-24 rounded-2xl p-2 bg-amber-400"
        onClick={() => gsap.to(".box", { x: 200, duration: 1 })}
      >
        Hello
      </div>
      <div
        className=" box2 w-24 h-24 rounded-2xl p-2 bg-amber-200"
        onClick={() => gsap.from(".box2", { x: 200, duration: 1 })}
      >
        Hello
      </div>
      <div
        className="box3 w-24 h-24 rounded-2xl p-2 bg-amber-600"
        onClick={() => {
          const tl = gsap.timeline();
          tl.to(".box3", { x: 200, duration: 1 })
            .to(".box3", { y: 100, duration: 1 })
            .to(".box3", { rotation: 360, duration: 1 });
        }}
      >
        Hello
      </div>
    </div>
  );
}

export default App;
