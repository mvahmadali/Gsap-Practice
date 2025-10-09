import React, { useRef, useEffect } from 'react';

export default function Simple3DScroll() {
  const cubeRef = useRef();
  const sphereRef = useRef();
  const torusRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollY / maxScroll;

      // Rotate cube
      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateY(${progress * 720}deg) rotateX(${progress * 360}deg)`;
      }

      // Show/hide and animate sphere
      if (sphereRef.current) {
        const sphereProgress = Math.max(0, (progress - 0.25) * 2);
        sphereRef.current.style.opacity = sphereProgress;
        sphereRef.current.style.transform = `translateY(${(1 - sphereProgress) * 100}px) scale(${0.5 + sphereProgress * 0.5})`;
      }

      // Show/hide and animate torus
      if (torusRef.current) {
        const torusProgress = Math.max(0, (progress - 0.6) * 2.5);
        torusRef.current.style.opacity = torusProgress;
        torusRef.current.style.transform = `translateY(${(1 - torusProgress) * 100}px) rotateX(${torusProgress * 360}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-black text-white">
      {/* Fixed 3D viewport */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none perspective-1000">
        {/* Cube */}
        <div
          ref={cubeRef}
          className="absolute w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 shadow-2xl"
          style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s linear' }}
        />
        
        {/* Sphere */}
        <div
          ref={sphereRef}
          className="absolute w-28 h-28 rounded-full bg-gradient-to-br from-sky-300 to-sky-500 shadow-2xl opacity-0"
          style={{ transition: 'opacity 0.1s linear, transform 0.1s linear' }}
        />
        
        {/* Torus */}
        <div
          ref={torusRef}
          className="absolute w-36 h-36 rounded-full border-[24px] border-lime-400 shadow-2xl opacity-0"
          style={{ transformStyle: 'preserve-3d', transition: 'opacity 0.1s linear, transform 0.1s linear' }}
        />
      </div>

      {/* Content sections */}
      <section className="h-screen flex items-center justify-center">
        <h2 className="text-5xl font-bold">Section 1 🚀<br/><span className="text-2xl text-gray-400">Cube visible</span></h2>
      </section>
      
      <section className="h-screen flex items-center justify-center">
        <h2 className="text-5xl font-bold">Section 2 ✨<br/><span className="text-2xl text-gray-400">Sphere appears</span></h2>
      </section>
      
      <section className="h-screen flex items-center justify-center">
        <h2 className="text-5xl font-bold">Section 3 🎉<br/><span className="text-2xl text-gray-400">Torus appears</span></h2>
      </section>
    </div>
  );
}