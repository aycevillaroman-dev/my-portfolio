"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = ({
  text,
  duration = 0.15,
}: {
  text: string;
  duration?: number;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const [maskPosition, setMaskPosition] = useState({
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    if (!svgRef.current) return;

    const rect = svgRef.current.getBoundingClientRect();

    const cx = ((cursor.x - rect.left) / rect.width) * 100;
    const cy = ((cursor.y - rect.top) / rect.height) * 100;

    setMaskPosition({
      cx: `${cx}%`,
      cy: `${cy}%`,
    });
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseMove={(e) =>
        setCursor({
          x: e.clientX,
          y: e.clientY,
        })
      }
      className="select-none"
    >
      <defs>
        {/* White reveal */}
        <linearGradient
          id="revealGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#fafafa" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>

        {/* Cursor-following mask */}
        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="24%"
          initial={{
            cx: "50%",
            cy: "50%",
          }}
          animate={maskPosition}
          transition={{
            duration,
            ease: "easeOut",
          }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="65%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>

      {/* Base metallic silver text */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#a3a3a3"
        stroke="#a3a3a3"
        strokeWidth="0.25"
        className="font-[helvetica] text-7xl font-bold"
        initial={{
          strokeDashoffset: 1000,
          strokeDasharray: 1000,
        }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>

      {/* White reveal under cursor */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="url(#revealGradient)"
        stroke="url(#revealGradient)"
        strokeWidth="0.25"
        mask="url(#textMask)"
        className="font-[helvetica] text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};