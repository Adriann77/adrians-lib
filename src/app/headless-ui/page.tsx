import Link from 'next/link';

export default function HeadlessUIPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900'>
      <div className='container mx-auto px-4 py-16'>
        <div className='mb-8'>
          <Link
            href='/'
            className='inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-900 dark:hover:text-green-200 transition-colors'
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
            Headless UI Components
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Completely unstyled, fully accessible UI components, designed to
            integrate beautifully with Tailwind CSS.
          </p>
        </div>

        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-semibold text-gray-900 dark:text-white mb-4'>
            Coming Soon
          </h2>
          <p className='text-gray-600 dark:text-gray-300 mb-4'>
            This page will showcase Headless UI components and examples.
          </p>
          <a
            href='https://headlessui.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors'
          >
            Visit Headless UI Documentation
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
