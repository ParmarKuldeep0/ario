"use client";
import { useEffect, useRef, useState } from "react";
import './carousel.scss' 
 import Image from 'next/image';

const Slider = () => {
  const slides = [
    { id: 1, src: "/carousel/ario_1.png" },
    { id: 2, src: "/carousel/ario_2.png" },
    { id: 3, src: "/carousel/ario_3.png" },
    { id: 4, src: "/carousel/ario_4.png" },
    { id: 5, src: "/carousel/ario_5.png" },
    { id: 6, src: "/carousel/ario_6.png" },
    { id: 7, src: "/carousel/ario_7.png" },
    { id: 8, src: "/carousel/ario_8.png" },
    { id: 9, src: "/carousel/ario_9.png" },
  ];

  // Duplicate the slides to create the infinite loop effect
  const duplicatedSlides = [...slides, ...slides];

  return (
    <>
         <div className="carousel-section mt-15">
      {/* Added heading section */}
      <div className="carousel-heading">
        <h2>Our Growing Network</h2>
        <p>Trusted by industry leaders worldwide</p>  
      </div>

      <div className="slider-container">
        <div className="slide-track">
          {duplicatedSlides.map((slide, index) => (
            <div className="slide" key={`${slide.id}-${index}`}>
              <Image
                src={slide.src}
                alt={`Slide ${slide.id}`}
                width={550}
                height={250}
                quality={80}
                style={{ objectFit: "contain" }}
                unoptimized={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>

    </>
  );
};

export default Slider;
 