'use client'
import React, { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add('shadow-md');
        } else {
          navbar.classList.remove('shadow-md');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className='fixed top-0 h-[70px] z-50 w-full flex items-center justify-around p-4 bg-white/30 backdrop-blur-sm'>
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
