import React from 'react';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='fixed top-0 h-[70px] w-full flex items-center justify-around p-4 bg-white/30 backdrop-blur-sm'>
      <Link
        href='/'
        className='flex items-center gap-2 text-gray-800 dark:text-gray-200'
      >
        <ChevronLeft />
      </Link>
      <p>Adrian Library</p>
    </nav>
  );
};

export default Navbar;
