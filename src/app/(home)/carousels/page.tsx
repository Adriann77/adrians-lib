import Carousel3D from '@/components/Carousel/Carousel';
import SectionWrapper from '@/components/SectionWrapper';
import React from 'react';

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

const page = () => {
  return (
    <SectionWrapper>
      {/* Przykład użycia z domyślnymi ustawieniami */}

      <Carousel3D slides={carouselData} />

      {/* Przykład z niestandardowymi ustawieniami */}
      <div className='mb-16'>
        <h2 className='text-2xl font-bold text-center mb-8'>
          Karuzela z większymi kartami i szybszą animacją
        </h2>
        <Carousel3D
          slides={carouselData}
          cardWidth={400}
          cardHeight={280}
          radius={500}
          cardGap={120}
          animationDuration={300}
          autoRotationSpeed={15}
          autoRotation={true}
          showNavigation={true}
          showDots={true}
        />
      </div>

      {/* Przykład bez auto-rotacji i tylko z kropkami */}
      {/* <div>
        <h2 className='text-2xl font-bold text-center mb-8'>
          Karuzela manualna (tylko kropki)
        </h2>
        <Carousel3D
          slides={carouselData.slice(0, 5)} // tylko 5 slajdów
          cardWidth={300}
          cardHeight={200}
          radius={350}
          cardGap={60}
          animationDuration={400}
          autoRotationSpeed={0}
          autoRotation={false}
          showNavigation={false}
          showDots={true}
        />
      </div> */}
    </SectionWrapper>
  );
};

export default page;
