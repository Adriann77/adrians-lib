import React from 'react';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className=' bg-gradient-to-br min-h-screen from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
