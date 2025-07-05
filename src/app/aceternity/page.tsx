import Link from 'next/link';

export default function AceternityPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900'>
      <div className='container mx-auto px-4 py-16'>
        <div className='mb-8'>
          <Link
            href='/'
            className='inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-200 transition-colors'
          >
            <svg
              className='w-5 h-5 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold text-gray-900 dark:text-white mb-4'>
            Aceternity UI Components
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Modern and animated React components for your next project.
            Beautiful animations and effects built with Framer Motion.
          </p>
        </div>

        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-semibold text-gray-900 dark:text-white mb-4'>
            Getting Started
          </h2>
          <p className='text-gray-600 dark:text-gray-300 mb-4'>
            Aceternity UI provides copy-paste components with beautiful
            animations. Simply copy the component code and paste it into your
            project.
          </p>
          <div className='bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4'>
            <code className='text-sm text-gray-800 dark:text-gray-200'>
              npm install framer-motion clsx tailwind-merge
            </code>
          </div>
          <p className='text-gray-600 dark:text-gray-300'>
            Most components require Framer Motion for animations and some
            utility libraries.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              3D Card Effect
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              A card component with 3D hover effects and smooth animations.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Features:
                </div>
                <div className='text-sm text-gray-800 dark:text-gray-200'>
                  Mouse tracking, 3D rotation, smooth animations
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Floating Navbar
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              A modern floating navigation bar with smooth transitions.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Features:
                </div>
                <div className='text-sm text-gray-800 dark:text-gray-200'>
                  Blur backdrop, floating design, active states
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Spotlight Effect
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              A spotlight effect that follows the mouse cursor.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Features:
                </div>
                <div className='text-sm text-gray-800 dark:text-gray-200'>
                  Mouse tracking, gradient effects, customizable colors
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Animated Tabs
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              Tab component with smooth animations and transitions.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Features:
                </div>
                <div className='text-sm text-gray-800 dark:text-gray-200'>
                  Smooth transitions, customizable styling, keyboard support
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Infinite Scroll
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              Infinite scrolling component with smooth animations.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Features:
                </div>
                <div className='text-sm text-gray-800 dark:text-gray-200'>
                  Auto-scroll, pause on hover, customizable speed
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Background Beams
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              Animated background beams effect for hero sections.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Features:
                </div>
                <div className='text-sm text-gray-800 dark:text-gray-200'>
                  SVG animations, customizable colors, performance optimized
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 text-center'>
          <p className='text-gray-600 dark:text-gray-400 mb-4'>
            Ready to add stunning animations to your project?
          </p>
          <a
            href='https://ui.aceternity.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors'
          >
            Visit Aceternity UI Documentation
            <svg
              className='w-5 h-5 ml-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
