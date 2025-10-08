import React from "react";
import gsap from "gsap";

function AnimatedDiv() {
  return (
    <>
      <div className="relative z-1">

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
    </>
  );
}

export default AnimatedDiv;
