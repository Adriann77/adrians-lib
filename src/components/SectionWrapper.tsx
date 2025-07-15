import React from 'react';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className=' bg-gradient-to-br min-h-screen -mt-[70px] flex items-center justify-center'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 '>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
