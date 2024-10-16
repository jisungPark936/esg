import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link, Element, animateScroll as scroll } from 'react-scroll';

const Banner = () => {
  const imageRef = useRef(null); // Create a ref for the image

  useEffect(() => {
    // Animate the image when the component mounts
    gsap.fromTo(
      imageRef.current, // Target the image
      { y: 50, opacity: 1 }, // Start position (above) and opacity
      {
        y: 0,
        opacity: 1,
        duration: 5, // Duration for the animation
        repeat: -1, // Repeat indefinitely
        yoyo: true, // Animate back to the starting position
        ease: "power1.inOut", // Ease for a smooth animation
      }
    );
  }, []); // Runs once on mount

  return (
    <div className="relative isolate overflow-hidden bg-white md:bg-[url('https://techworld.speedgabia.com/seminar/ESG/img/bg-hero.jpg')] bg-cover bg-center ">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div className="mx-auto max-w-full px-6 sm:pb-32 lg:flex lg:px-8 lg:pt-5 justify-center">
      <div className="mx-auto max-w-xl sm:max-w-2xl lg:mx-0 lg:max-w-3xl lg:flex-shrink-0 lg:pt-8 pt-6">
  <h1 className="text-3xl font-bold tracking-tight text-titleGreen sm:text-4xl lg:text-5xl lg:mt-40 mt-10">
    도·농 ESG 활성화를 위한 전략과 방안
  </h1>
  <p className="mt-4 text-base sm:text-lg leading-8 text-black">
    2024년 11월 11일(월) 오전11시~오후4시 양재동 엘타워B1
  </p>
  <div className="mt-8 flex items-center gap-x-6">
  <Link to="section2" smooth={true} duration={500}>
    <a
      href="#"
      className="text-white rounded-md bg-headerGreen px-3.5 py-2.5 text-md font-semibold shadow-sm"
    >
      참여 신청 하기 <span aria-hidden="true">→</span>
    </a>
    
    </Link>
  </div>
</div>
<div className="mx-auto lg:mt-16 flex max-w-full sm:mt-2 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-16">
  <div className="w-full flex-none">
    <div className="max-w-full sm:max-w-[300px] lg:max-w-[600px]">
      <img
        className="w-full"
        ref={imageRef}
        alt="App screenshot"
        src="https://techworld.speedgabia.com/seminar/ESG/img/tree.png"
      />
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Banner;
