'use client';
import SectionWrapper from '@/components/SectionWrapper';
import React, { useState } from 'react';

import Card1 from '@/components/examples/Card1';

const cardsData = [
  {
    id: 'card1',
    name: 'Simple Card',
    description: 'Basic card with simple styling and button',
    component: Card1,
    category: 'Basic',
    tags: ['simple', 'basic', 'button'],
  },
];

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const getSelectedCardData = () => {
    return cardsData.find((card) => card.id === selectedCard) || null;
  };

  const selectedCardData = getSelectedCardData();

  return (
    <SectionWrapper>
      <div className='mb-8'>
        <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
          Cards
        </h1>
        <p className='text-xl text-gray-600 dark:text-gray-300'>
          Beautifully designed card components that you can copy and paste into
          your apps
        </p>
      </div>

      <div className='flex gap-8'>
        {/* Sidebar z listą komponentów */}
        <div className='w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
          <h2 className='text-2xl font-semibold text-gray-900 dark:text-white mb-4'>
            Available Cards
          </h2>
          <div className='space-y-3'>
            {cardsData.map((card) => (
              <button
                key={card.id}
                onClick={() => setSelectedCard(card.id)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  selectedCard === card.id
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <div className='flex items-center justify-between mb-2'>
                  <h3 className='font-semibold text-gray-900 dark:text-white'>
                    {card.name}
                  </h3>
                  <span className='text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded'>
                    {card.category}
                  </span>
                </div>
                <p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>
                  {card.description}
                </p>
                <div className='flex gap-1'>
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className='text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className='flex-1'>
          {!selectedCardData ? (
            <div className='bg-gray-50 dark:bg-gray-800 rounded-lg p-12 text-center'>
              <div className='w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                Select a Card Component
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Choose a card from the sidebar to preview it here
              </p>
            </div>
          ) : (
            <div className='space-y-6'>
              <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
                <h2 className='text-2xl font-semibold text-gray-900 dark:text-white mb-2'>
                  {selectedCardData.name}
                </h2>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>
                  {selectedCardData.description}
                </p>
                <div className='flex gap-2'>
                  <span className='text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded'>
                    {selectedCardData.category}
                  </span>
                  {selectedCardData.tags.map((tag) => (
                    <span
                      key={tag}
                      className='text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                  Preview
                </h3>
                <div className='bg-gray-50 dark:bg-gray-900 rounded-lg p-8 flex items-center justify-center'>
                  <selectedCardData.component />
                </div>
              </div>

              <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                  Code
                </h3>
                <div className='bg-gray-100 dark:bg-gray-900 rounded-lg p-4'>
                  <code className='text-sm text-gray-800 dark:text-gray-200'>
                    {`<${selectedCardData.component.name} />`}
                  </code>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Cards;
