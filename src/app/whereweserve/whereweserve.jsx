"use client";
import React from "react";
import Tippy from "@tippyjs/react";
import { motion } from "framer-motion";
import "tippy.js/dist/tippy.css";
import 'tippy.js/themes/light.css';
import "./whereweserve.scss";

const points = [
  { id: "point1",  x: 67.79, y: 57.33 },
  { id: "point2",  x: 137.24, y: 124.33 },
  { id: "point3",  x: 293.57, y: 235.11 },
  { id: "point4",  x: 379.69, y: 113.95 },
  { id: "point5",  x: 399.72, y: 85.54 },
  { id: "point6",  x: 571.58, y: 136.41 },
  { id: "point7",  x: 693.14, y: 104.15 },
  { id: "point8",  x: 481.83, y: 202.87 }
];

const connections = [
  { from: "point1", to: "point2" },
  { from: "point1", to: "point3" },
  { from: "point3", to: "point4" },
  { from: "point5", to: "point6" },
  { from: "point6", to: "point7" },
  { from: "point6", to: "point8" }
];

function WhereWeServe() {
  const getPoint = (id) => points.find(p => p.id === id);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      
      <h2 className="text-3xl md:text-5xl font-bold text-blue-800 dark:text-blue-400 mb-4">
          Our Global Network
        </h2>
        <p className="text-lg text-black-600 dark:text-black-300">
          Connecting continents with seamless logistics Globally   
        </p>
      <div className="relative w-full max-w-[1500px] p-[3.2vw_0.8vw] md:p-[3vw_0.5vw] sm:p-[2vw_0] mx-auto map-container">
        <img
          src="http://res.cloudinary.com/slzr/image/upload/v1500321012/world-map-1500_vvekl5.png"
          alt="World Map"
          className="w-full h-auto block rounded-[0.5rem] sm:rounded-[0.2rem]"
          draggable={false}
        />
        
        <svg viewBox="0 0 800 400" className="w-full h-full absolute inset-0 z-10">
          <defs>
            <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity="1" />
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#0ea5e9" />
            </marker>
          </defs>
          
          <g>
            {connections.map((conn, index) => {
              const from = getPoint(conn.from);
              const to = getPoint(conn.to);
              if (!from || !to) return null;
              
              const cpx = (from.x + to.x) / 2;
              const cpy = Math.min(from.y, to.y) - 50;
              
              return (
                <motion.path
                  key={`path-${index}`}
                  d={`M ${from.x} ${from.y} Q ${cpx} ${cpy} ${to.x} ${to.y}`}
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ 
                    duration: 1,
                    delay: index * 0.3,
                    ease: "easeOut"
                  }}
                  markerEnd="url(#arrowhead)"
                />
              );
            })}
          </g>
          
          <g>
            {points.map((point) => (
              <Tippy key={point.id}  theme="light">
                <g>
                  <circle 
                    cx={point.x} 
                    cy={point.y} 
                    r="2" 
                    fill="#0ea5e9" 
                  />
                  <circle 
                    cx={point.x} 
                    cy={point.y} 
                    r="2" 
                    fill="#0ea5e9" 
                    opacity="0.5"
                  >
                    <animate 
                      attributeName="r" 
                      from="2" 
                      to="8" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                    />
                    <animate 
                      attributeName="opacity" 
                      from="0.5" 
                      to="0" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                    />
                  </circle>
                </g>
              </Tippy>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}

export default WhereWeServe;