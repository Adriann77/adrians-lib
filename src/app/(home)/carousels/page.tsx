'use client';
import Carousel3D from '@/components/Carousel/Carousel';
import SectionWrapper from '@/components/SectionWrapper';
import React, { useState } from 'react';

// Definiowanie danych bezpośrednio w komponencie, aby uniknąć problemów z importem
const carouselData = [
  { id: 1, content: 'Slide 1', bgColor: 'bg-red-500' },
  { id: 2, content: 'Slide 2', bgColor: 'bg-blue-500' },
  { id: 3, content: 'Slide 3', bgColor: 'bg-green-500' },
  { id: 4, content: 'Slide 4', bgColor: 'bg-purple-500' },
  { id: 5, content: 'Slide 5', bgColor: 'bg-yellow-500' },
  { id: 6, content: 'Slide 6', bgColor: 'bg-black' },
  { id: 7, content: 'Slide 7', bgColor: 'bg-pink-500' },
  { id: 8, content: 'Slide 8', bgColor: 'bg-orange-500' },
  { id: 9, content: 'Slide 9', bgColor: 'bg-cyan-500' },
];

const CarouselsPage = () => {
  // Stany dla kontroli parametrów karuzeli
  const [cardWidth, setCardWidth] = useState(350);
  const [cardHeight, setCardHeight] = useState(220);
  const [radius, setRadius] = useState(420);
  const [cardGap, setCardGap] = useState(90);
  const [animationDuration, setAnimationDuration] = useState(500);
  const [autoRotationSpeed, setAutoRotationSpeed] = useState(9);
  const [autoRotation, setAutoRotation] = useState(true);
  const [showNavigation, setShowNavigation] = useState(true);
  const [showDots, setShowDots] = useState(true);

  return (
    <SectionWrapper>
      <div className='space-y-12 mt-16'>
        {/* Panel kontrolny */}
        <div className='bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700'>
          <h2 className='text-2xl font-bold text-center mb-6 text-white'>
            🎛️ Panel Kontrolny Karuzeli
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Wymiary */}
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold text-white mb-3'>
                📐 Wymiary
              </h3>

              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>
                  Szerokość karty: {cardWidth}px
                </label>
                <input
                  type='range'
                  min='200'
                  max='600'
                  value={cardWidth}
                  onChange={(e) => setCardWidth(Number(e.target.value))}
                  className='w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>
                  Wysokość karty: {cardHeight}px
                </label>
                <input
                  type='range'
                  min='150'
                  max='400'
                  value={cardHeight}
                  onChange={(e) => setCardHeight(Number(e.target.value))}
                  className='w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>
                  Promień okręgu: {radius}px
                </label>
                <input
                  type='range'
                  min='300'
                  max='800'
                  value={radius}
                  onChange={(e) => setRadius(Number(e.target.value))}
                  className='w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>
                  Odstęp między kartami: {cardGap}px
                </label>
                <input
                  type='range'
                  min='0'
                  max='200'
                  value={cardGap}
                  onChange={(e) => setCardGap(Number(e.target.value))}
                  className='w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider'
                />
              </div>
            </div>

            {/* Animacje */}
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold text-white mb-3'>
                ⚡ Animacje
              </h3>

              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>
                  Czas animacji: {animationDuration}ms
                </label>
                <input
                  type='range'
                  min='100'
                  max='2000'
                  step='50'
                  value={animationDuration}
                  onChange={(e) => setAnimationDuration(Number(e.target.value))}
                  className='w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-300 mb-2'>
                  Prędkość auto-rotacji: {autoRotationSpeed}°/s
                </label>
                <input
                  type='range'
                  min='0'
                  max='30'
                  step='1'
                  value={autoRotationSpeed}
                  onChange={(e) => setAutoRotationSpeed(Number(e.target.value))}
                  className='w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider'
                />
              </div>
            </div>

            {/* Opcje */}
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold text-white mb-3'>
                ⚙️ Opcje
              </h3>

              <div className='flex items-center space-x-3'>
                <input
                  type='checkbox'
                  id='autoRotation'
                  checked={autoRotation}
                  onChange={(e) => setAutoRotation(e.target.checked)}
                  className='w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500'
                />
                <label
                  htmlFor='autoRotation'
                  className='text-sm font-medium text-gray-300'
                >
                  🔄 Auto-rotacja
                </label>
              </div>

              <div className='flex items-center space-x-3'>
                <input
                  type='checkbox'
                  id='showNavigation'
                  checked={showNavigation}
                  onChange={(e) => setShowNavigation(e.target.checked)}
                  className='w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500'
                />
                <label
                  htmlFor='showNavigation'
                  className='text-sm font-medium text-gray-300'
                >
                  ◀️▶️ Strzałki nawigacyjne
                </label>
              </div>

              <div className='flex items-center space-x-3'>
                <input
                  type='checkbox'
                  id='showDots'
                  checked={showDots}
                  onChange={(e) => setShowDots(e.target.checked)}
                  className='w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500'
                />
                <label
                  htmlFor='showDots'
                  className='text-sm font-medium text-gray-300'
                >
                  ⚪ Kropki nawigacyjne
                </label>
              </div>

              {/* Reset button */}
              <button
                onClick={() => {
                  setCardWidth(350);
                  setCardHeight(220);
                  setRadius(420);
                  setCardGap(90);
                  setAnimationDuration(500);
                  setAutoRotationSpeed(9);
                  setAutoRotation(true);
                  setShowNavigation(true);
                  setShowDots(true);
                }}
                className='w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200'
              >
                🔄 Reset do domyślnych
              </button>
            </div>
          </div>
        </div>

        {/* Karuzela z kontrolowanymi parametrami */}
        <div>
          <h2 className='text-2xl font-bold text-center mb-8 text-white'>
            🎠 Interaktywna Karuzela 3D
          </h2>
          <Carousel3D
            slides={carouselData}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            radius={radius}
            cardGap={cardGap}
            animationDuration={animationDuration}
            autoRotationSpeed={autoRotationSpeed}
            autoRotation={autoRotation}
            showNavigation={showNavigation}
            showDots={showDots}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CarouselsPage;
