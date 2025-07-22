import React from 'react';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className=' bg-gradient-to-br min-h-[calc(100vh)] -mt-[70px] flex items-center justify-center'>
      <div className=' '>{children}</div>
    </section>
  );
};

export default SectionWrapper;
