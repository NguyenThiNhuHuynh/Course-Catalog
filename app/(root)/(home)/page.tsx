"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

export default function HomePage() {
  const pathRef = useRef<SVGPathElement>(null);
  const flowerRef = useRef<SVGPathElement>(null);
  const dotsRef = useRef<SVGCircleElement[]>([]);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();

      pathRef.current.style.strokeDasharray = `${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;

      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
    }

    if (flowerRef.current && pathRef.current) {
      gsap.to(flowerRef.current, {
        duration: 6,
        repeat: -1,
        ease: "none",
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          alignOrigin: [0.5, 0.5],
        },
        rotation: 360,
      });
    }

    dotsRef.current.forEach((dot, i) => {
      gsap.to(dot, {
        scale: 1.6,
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        delay: i * 0.3,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex flex-col items-center justify-center flex-1 gap-8 text-center">
        <div className="text-[60px] font-extrabold text-gradient">
          Courses Catalog
        </div>

        <svg width="80%" height="200" viewBox="0 0 800 200" fill="none">
          <path
            ref={pathRef}
            d="M 0 100 C 100 0, 200 200, 300 100 S 500 200, 600 100 S 800 0, 800 100"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
          />

          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffcb67" />
              <stop offset="30%" stopColor="#ED5409" />
              <stop offset="70%" stopColor="#506179" />
              <stop offset="100%" stopColor="#214E81" />
            </linearGradient>

            <linearGradient
              id="flowerGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ffcb67" />
              <stop offset="100%" stopColor="#FF9933" />
            </linearGradient>

            <radialGradient id="dotGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffcb67" />
              <stop offset="100%" stopColor="#214E81" />
            </radialGradient>
          </defs>

          <path
            ref={flowerRef}
            d="M12 2 L15 10 L24 10 L17 15 L20 24 L12 18 L4 24 L7 15 L0 10 L9 10 Z"
            fill="url(#flowerGradient)"
            stroke="#FF994D"
            strokeWidth="1"
          />

          {[...Array(6)].map((_, i) => (
            <circle
              key={i}
              ref={(el) => {
                if (el) dotsRef.current[i] = el;
              }}
              cx={100 + i * 120}
              cy={100}
              r="6"
              fill="url(#dotGradient)"
            />
          ))}
        </svg>
      </main>
    </div>
  );
}
