import React, { useEffect } from 'react';
import { ArrowPathIcon, BookmarkIcon, UserGroupIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    name: '행사명',
    description: '도·농 ESG 활성화를 위한 전략과 방안',
    icon: BookmarkIcon,
  },
  {
    name: '개최일자/장소',
    description: '2024년 11월 11일(월) 오전11시~오후4시, 양재동 엘타워B1(중식 포함)',
    icon: MapPinIcon,
  },
  {
    name: '추진 기관',
    description: '도시재생안전협회',
    icon: UserGroupIcon,
  },
  {
    name: '행사 목적',
    description: '도시와 농촌의 탄소배출 절감을 통한 ESG 역할 수행 방안 마련',
    icon: ArrowPathIcon,
  },
];

export default function Carding() {
  useEffect(() => {
    const elements = gsap.utils.toArray('.feature-item'); // Select all feature items

    // Create a GSAP animation for each feature item
    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, scale: 0}, // Start state
        {
          opacity: 1,
          y: 0, // End state
          scale: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: 'top 75%', // Trigger the animation when the top of the element hits 75% of the viewport height
       
           
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-white py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            도·농 ESG 활성화를 위한 전략과 방안 세미나
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">탄소중립 중심으로 추진</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 feature-item"> {/* Add a class for the animation */}
                <dt className="text-base font-semibold leading-7 text-headerGreen">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-0 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
