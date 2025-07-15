'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const CARD_WIDTH = 400;
const CARD_HEIGHT = 210;
const RADIUS = 420; // promień koła karuzeli
const CARD_GAP = 90; // odstęp między kartami w px

const Carousel = () => {
  const slides = CarouselData.slides;
  const slidesCount = slides.length;
  const angleStep = 360 / slidesCount;

  const [rotation, setRotation] = useState(0); // rotation in degrees
  const [mounted, setMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [instant, setInstant] = useState(false); // disables transition for instant snap
  const [isNavigating, setIsNavigating] = useState(false); // prevents spamming navigation
  const pauseTimeout = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Smooth auto-rotation using requestAnimationFrame (fixed step per frame)
  React.useEffect(() => {
    if (isPaused) return;
    let frameId: number;
    const step = 0.15; // degrees per frame (60fps -> 24deg/s)
    const animate = () => {
      setRotation((prev) => prev - step);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused]);

  if (!mounted) return null;

  // Calculate current index (center slide)
  const currentIndex =
    ((Math.round(-rotation / angleStep) % slidesCount) + slidesCount) %
    slidesCount;

  // Snap to center the closest card
  const snapToNearest = () => {
    setInstant(true);
    // Find the closest card index to current rotation
    const raw = -rotation / angleStep;
    const nearestIdx = Math.round(raw);
    setRotation(-nearestIdx * angleStep);
    // Restore transition after snap
    setTimeout(() => setInstant(false), 0);
  };

  // Always rotate by one step (angleStep) from the currently centered card, shortest direction
  const getMinimalDelta = (targetIdx: number) => {
    const currentAngle = -rotation;
    const targetAngle = targetIdx * angleStep;
    const delta = ((targetAngle - currentAngle + 540) % 360) - 180;
    return delta;
  };

  // Swap logic: left chevron moves to next (right), right chevron moves to previous (left)
  const onPrevious = () => {
    if (isNavigating) return; // Prevent spamming
    setIsNavigating(true);
    setInstant(true);
    const nextIdx = (currentIndex + 1) % slidesCount;
    const delta = getMinimalDelta(nextIdx);
    setRotation((prev) => prev + delta);
    setTimeout(() => setInstant(false), 0);
    // Re-enable navigation after animation completes
    setTimeout(() => setIsNavigating(false), 500); // 0.5s animation duration
  };
  const onNext = () => {
    if (isNavigating) return; // Prevent spamming
    setIsNavigating(true);
    setInstant(true);
    const prevIdx = (currentIndex - 1 + slidesCount) % slidesCount;
    const delta = getMinimalDelta(prevIdx);
    setRotation((prev) => prev + delta);
    setTimeout(() => setInstant(false), 0);
    // Re-enable navigation after animation completes
    setTimeout(() => setIsNavigating(false), 500); // 0.5s animation duration
  };
  const goToIndex = (idx: number) => {
    setInstant(true);
    // If already at this index, do nothing
    if (currentIndex === idx) {
      setInstant(false);
      return;
    }
    // Set rotation directly to target index (no minimal delta)
    setRotation(-idx * angleStep);
    setTimeout(() => setInstant(false), 0);
  };

  // Pause on mouse enter, snap to center, resume 0.5s after leave
  const handleCardMouseEnter = () => {
    if (pauseTimeout.current) {
      clearTimeout(pauseTimeout.current);
      pauseTimeout.current = null;
    }
    setIsPaused(true);
    snapToNearest();
  };
  const handleCardMouseLeave = () => {
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => {
      setIsPaused(false);
    }, 500);
  };

  return (
    <div className='w-full flex justify-center'>
      <div className='relative max-w-[1280px] w-full flex flex-col items-center py-8'>
        {/* Karuzela 3D */}
        <div
          className={`relative mx-auto w-[${CARD_WIDTH * 2}px] h-[${
            CARD_HEIGHT * 1.5
          }px] flex items-center justify-center`}
          style={{
            perspective: '1600px',
          }}
        >
          <div
            className='relative w-full h-full'
            style={{
              transformStyle: 'preserve-3d',
              transition: instant
                ? 'none'
                : 'transform 0.5s cubic-bezier(.4,1,.6,1)',
            }}
          >
            {slides.map((slide, i) => {
              const angle = i * angleStep + rotation;
              // Center slide is at angle 0 (modulo 360)
              const normalized = ((angle % 360) + 360) % 360;
              const isCenter =
                normalized < angleStep / 2 || normalized > 360 - angleStep / 2;
              const rad = (Math.PI / 180) * angle;
              const xGap = Math.sin(rad) * CARD_GAP;
              return (
                <div
                  key={slide.id}
                  className={`absolute left-1/2 top-1/2 w-[350px]  h-[220px] flex items-center justify-center rounded-lg shadow-2xl backface-hidden ${slide.bgColor}`}
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      rotateY(${angle}deg)
                      translateZ(${RADIUS}px)
                      translateX(${xGap}px)
                      ${isCenter ? '' : 'scale(0.9)'}
                    `,
                    zIndex: isCenter ? 30 : 10,
                    filter: isCenter ? 'none' : '',
                    boxShadow: isCenter
                      ? '0 8px 32px rgba(0,0,0,0.25)'
                      : '0 2px 8px rgba(0,0,0,0.15)',
                    transition:
                      'transform 1.5s cubic-bezier(.4,1,.6,1), scale 1s cubic-bezier(.4,1,.6,1)',
                  }}
                  onMouseEnter={handleCardMouseEnter}
                  onMouseLeave={handleCardMouseLeave}
                >
                  <p className='text-white text-2xl font-bold'>
                    {slide.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Controls: chevrons and dots below carousel */}
        <div
          className='flex items-center justify-center gap-6 mt-48'
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
          style={{ minHeight: 56 }}
        >
          <button
            onClick={onPrevious}
            disabled={isNavigating}
            className={`z-50 rounded-full p-2 transition-all duration-200 ${
              isNavigating
                ? 'bg-black/20 cursor-not-allowed'
                : 'bg-black/40 hover:bg-black/70'
            }`}
            style={{ minWidth: 48, minHeight: 48 }}
            aria-label='Poprzedni slajd'
          >
            <ChevronLeft
              className={`size-10 transition-colors ${
                isNavigating ? 'text-white/50' : 'text-white'
              }`}
            />
          </button>
          {/* Dots */}
          <div className='flex items-center gap-3'>
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToIndex(idx)}
                aria-label={`Przejdź do slajdu ${idx + 1}`}
                className={`w-4 h-4 rounded-full border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/70
                  ${
                    currentIndex === idx
                      ? 'bg-white border-white shadow-lg'
                      : 'bg-white/30 border-white/50'
                  }`}
              />
            ))}
          </div>
          <button
            onClick={onNext}
            disabled={isNavigating}
            className={`z-50 rounded-full p-2 transition-all duration-200 ${
              isNavigating
                ? 'bg-black/20 cursor-not-allowed'
                : 'bg-black/40 hover:bg-black/70'
            }`}
            style={{ minWidth: 48, minHeight: 48 }}
            aria-label='Następny slajd'
          >
            <ChevronRight
              className={`size-10 transition-colors ${
                isNavigating ? 'text-white/50' : 'text-white'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

// Dane karuzeli
const CarouselData = {
  slides: [
    { id: 1, content: 'Slide 1', bgColor: 'bg-red-500 ' },
    { id: 2, content: 'Slide 2', bgColor: 'bg-blue-500' },
    { id: 3, content: 'Slide 3', bgColor: 'bg-green-500' },
    { id: 4, content: 'Slide 4', bgColor: 'bg-purple-500' },
    { id: 5, content: 'Slide 5', bgColor: 'bg-yellow-500' },
    { id: 6, content: 'Slide 6', bgColor: 'bg-black' },
    { id: 7, content: 'Slide 7', bgColor: 'bg-pink-500' },
    { id: 8, content: 'Slide 8', bgColor: 'bg-orange-500' },
    { id: 9, content: 'Slide 9', bgColor: 'bg-cyan-500' },
  ],
};
