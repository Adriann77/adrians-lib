import Link from 'next/link';

export default function RadixPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900'>
      <div className='container mx-auto px-4 py-16'>
        <div className='mb-8'>
          <Link
            href='/'
            className='inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors'
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
            Radix UI Components
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Low-level UI primitives with a focus on accessibility,
            customization, and developer experience. Unstyled and compatible
            with any CSS solution.
          </p>
        </div>

        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-semibold text-gray-900 dark:text-white mb-4'>
            Getting Started
          </h2>
          <p className='text-gray-600 dark:text-gray-300 mb-4'>
            Install individual Radix UI primitives as needed:
          </p>
          <div className='bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4'>
            <code className='text-sm text-gray-800 dark:text-gray-200'>
              npm install @radix-ui/react-dialog
            </code>
          </div>
          <p className='text-gray-600 dark:text-gray-300'>
            Each primitive comes unstyled and ready to be customized with your
            preferred styling solution.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Dialog
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              A modal dialog that interrupts the user with important content.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Features:
                </div>
                <div className='text-sm text-gray-800 dark:text-gray-200'>
                  Focus management, ESC key support, portal rendering
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Dropdown Menu
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              Displays a menu to the user triggered by a button press.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Features:
                </div>
                <div className='text-sm text-gray-800 dark:text-gray-200'>
                  Keyboard navigation, submenu support, collision detection
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Popover
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              Displays rich content in a portal, triggered by a button.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Features:
                </div>
                <div className='text-sm text-gray-800 dark:text-gray-200'>
                  Positioning, collision detection, focus management
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Tabs
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              A set of layered sections of content, known as tab panels.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Features:
                </div>
                <div className='text-sm text-gray-800 dark:text-gray-200'>
                  Keyboard navigation, automatic/manual activation, orientation
                  support
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Accordion
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              A vertically stacked set of interactive headings that each reveal
              a section of content.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Features:
                </div>
                <div className='text-sm text-gray-800 dark:text-gray-200'>
                  Collapsible content, keyboard navigation, multiple/single
                  expand
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
              Slider
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              An input where the user selects a value from within a given range.
            </p>
            <div className='space-y-2'>
              <div className='p-3 bg-gray-50 dark:bg-gray-700 rounded border'>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  Features:
                </div>
                <div className='text-sm text-gray-800 dark:text-gray-200'>
                  Range selection, step support, keyboard navigation
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 text-center'>
          <p className='text-gray-600 dark:text-gray-400 mb-4'>
            Ready to build accessible components with Radix UI?
          </p>
          <a
            href='https://www.radix-ui.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors'
          >
            Visit Radix UI Documentation
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
