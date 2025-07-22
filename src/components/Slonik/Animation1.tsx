'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useRef } from 'react';

const Animation1 = () => {
  const slonikRef = useRef<HTMLDivElement>(null);
  const eyeRef = useRef<HTMLDivElement>(null);
  const uchoRef = useRef<HTMLDivElement>(null);
  const [runAnimation, setRunAnimation] = React.useState(true);

  useGSAP(() => {
    if (slonikRef.current && eyeRef.current && uchoRef.current) {
      // Początkowe pojawienie się całego słonika
      gsap.fromTo(
        slonikRef.current,
        { scale: 0.3, opacity: 0.3 },
        { scale: 1, opacity: 1, duration: 3, ease: 'power2.out' },
      );

      // Mruganie oka
      gsap.to(eyeRef.current, {
        scaleY: 0.1, // zamyka oko
        duration: 0.2, // czas zamykania
        ease: 'power2.out',
        yoyo: true, // wraca do normalnego scaleY:1
        repeat: -1, // nieskończona pętla
        repeatDelay: 1.1, // po powrocie czeka 1.1 sekundy => cykl co ok. 1.3s
      });

      // Machanie uchem
      gsap.to(uchoRef.current, {
        rotateX: 3, // lekkie wychylenie
        scaleX: 0.9, // lekki efekt powiększenia

        duration: 0.1, // czas machnięcia
        ease: 'power2.out',
        yoyo: true, // powrót do pozycji wyjściowej
        repeat: -1, // nieskończona pętla
        repeatDelay: 1.1, // po powrocie czeka 1.1s => cykl co ok. 2.1s
      });
    }
  }, []);

  return (
    <div className='flex items-center'>
      <button
        className='bg-blue-500 text-2xl text-white p-4 h-fit rounded-lg hover:bg-blue-600'
        onClick={() => setRunAnimation(!runAnimation)}
      >
        Run animation
      </button>

      <div
        ref={slonikRef}
        className='relative w-[500px] h-[500px] flex items-center justify-center'
      >
        <Image
          src='/slonik/slonik.svg'
          alt='Slonik'
          width={500}
          height={500}
          className=''
        />
        <div
          ref={eyeRef}
          className={`absolute right-1/3 top-[45%] w-[20px] h-[20px]  
          }`}
        >
          <svg
            width='20'
            height='20'
            viewBox='726 440 68 55'
            className='w-full h-full'
          >
            <path
              className='fill-#FFF'
              fill='#FFF'
              d='M760.15,450.94c-.52-.05-1.65-.14-2.99.29-3.26,1.06-4.9,4.33-5.61,6.21-.13.35-.64.35-.77,0-.71-1.89-2.35-5.16-5.61-6.21-1.34-.43-2.47-.34-2.99-.29-5.32.5-15.01,6.89-15.66,15.65-.52,7.03,5.02,12.26,12.86,19.65,4.43,4.18,8.63,7.03,11.57,8.82.13.08.29.08.42,0,2.94-1.79,7.14-4.64,11.57-8.82,7.84-7.39,13.38-12.62,12.86-19.65-.64-8.77-10.33-15.15-15.66-15.65Z'
            />
          </svg>
        </div>
        <div
          ref={uchoRef}
          className='absolute'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1080 1080'
            fill='#FFF'
            width='500'
            height='500'
          >
            <g>
              <path d='M464.94,388.06c1.17-31.25,21.03-66.11,53.28-80.98,9.86-4.54,29.48-13.59,49.24-7.13,12.88,4.21,20.26,13.19,37.04,13.57,7.43.17,11.45-1.47,20.09-3.68,11.48-2.94,37.64-9.65,54.66-6.44,21.99,4.14,45.15,27.91,47.02,51.53,2.38,30.05-31.7,34.5-77.07,95.01-29.15,38.88-39.17,69.17-76.62,93.72-13.65,8.95-27.96,15.18-40.94,10.5-12.57-4.53-19.21-17.62-21.72-22.55-6.65-13.09-4.13-20.43-8.08-36.81-3.8-15.76-9.27-21.96-16.56-36.58-8.18-16.39-21.38-42.83-20.36-70.17Z' />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Animation1;
