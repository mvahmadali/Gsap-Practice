import React, { useState, useEffect } from "react";
import gsap from "gsap";

function AnimatedDiv() {
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    if (showText) {
      gsap.from(
        ".heading",
        { opacity: 0, x: 400 } // start
      );
    }
  }, [showText]);
  return (
    <>
      <div className="relative z-1">
        <div
          className="box w-24 h-24 rounded-2xl p-2 bg-amber-400"
          onClick={() => {
            setShowText(!showText);
            gsap.to(".box", { x: 400, duration: 2, backgroundColor: "red" });
          }}
        >
          Hello
        </div>

        {showText && (
          <h1 className="heading text-white text-2xl">
            Hello bhai mai slide mari
          </h1>
        )}
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
    </>
  );
}

export default AnimatedDiv;
