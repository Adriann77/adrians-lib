import Link from 'next/link';

export default function FramerMotionPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900 dark:to-rose-900'>
      <div className='container mx-auto px-4 py-16'>
        <div className='mb-8'>
          <Link
            href='/'
            className='inline-flex items-center text-pink-600 dark:text-pink-400 hover:text-pink-900 dark:hover:text-pink-200 transition-colors'
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
            Framer Motion Components
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            A production-ready motion library for React. Create smooth
            animations and interactions with declarative syntax.
          </p>
        </div>

        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-semibold text-gray-900 dark:text-white mb-4'>
            Getting Started
          </h2>
          <p className='text-gray-600 dark:text-gray-300 mb-4'>
            Install Framer Motion in your React project:
          </p>
          <div className='bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4'>
            <code className='text-sm text-gray-800 dark:text-gray-200'>
              npm install framer-motion
            </code>
          </div>
          <p className='text-gray-600 dark:text-gray-300'>
            Then import and use motion components in your JSX:
          </p>
          <div className='bg-gray-100 dark:bg-gray-700 rounded-lg p-4'>
            <code className='text-sm text-gray-800 dark:text-gray-200'>
              import {`{motion}`} from &quot;framer-motion&quot;
            </code>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Basic Animation
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              Simple animations with initial, animate, and exit properties.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Example:
                </div>
                <div className='text-sm font-mono text-gray-800 dark:text-gray-200'>
                  &lt;motion.div animate={`{{x: 100}}`} /&gt;
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Gestures
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              Handle hover, tap, pan, and drag gestures with built-in
              animations.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Example:
                </div>
                <div className='text-sm font-mono text-gray-800 dark:text-gray-200'>
                  &lt;motion.div drag whileHover={`{{scale: 1.1}}`} /&gt;
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Variants
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              Define animation variants for complex, orchestrated animations.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Example:
                </div>
                <div className='text-sm font-mono text-gray-800 dark:text-gray-200'>
                  &lt;motion.div variants={`{variants}`} /&gt;
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Page Transitions
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              Smooth page transitions with AnimatePresence component.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Example:
                </div>
                <div className='text-sm font-mono text-gray-800 dark:text-gray-200'>
                  &lt;AnimatePresence&gt;...&lt;/AnimatePresence&gt;
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Scroll Animations
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              Trigger animations based on scroll position with useScroll hook.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Example:
                </div>
                <div className='text-sm font-mono text-gray-800 dark:text-gray-200'>
                  const {`{scrollY}`} = useScroll()
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Layout Animations
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              Automatic layout animations when elements change position or size.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Example:
                </div>
                <div className='text-sm font-mono text-gray-800 dark:text-gray-200'>
                  &lt;motion.div layout /&gt;
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 text-center'>
          <p className='text-gray-600 dark:text-gray-400 mb-4'>
            Ready to bring your UI to life with smooth animations?
          </p>
          <a
            href='https://www.framer.com/motion/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-colors'
          >
            Visit Framer Motion Documentation
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
