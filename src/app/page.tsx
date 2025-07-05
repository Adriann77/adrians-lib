import Link from 'next/link';

export default function Home() {
  const componentLibraries = [
    {
      name: 'shadcn/ui',
      description:
        'Beautifully designed components that you can copy and paste into your apps',
      href: '/shadcn',
      color: 'bg-black hover:bg-gray-800 text-white',
    },
    {
      name: 'Aceternity UI',
      description: 'Modern and animated React components for your next project',
      href: '/aceternity',
      color: 'bg-purple-600 hover:bg-purple-700 text-white',
    },
    {
      name: 'Framer Motion',
      description: 'A production-ready motion library for React',
      href: '/framer-motion',
      color: 'bg-pink-600 hover:bg-pink-700 text-white',
    },
    {
      name: 'Radix UI',
      description: 'Low-level UI primitives with a focus on accessibility',
      href: '/radix',
      color: 'bg-blue-600 hover:bg-blue-700 text-white',
    },
    {
      name: 'Headless UI',
      description: 'Completely unstyled, fully accessible UI components',
      href: '/headless-ui',
      color: 'bg-green-600 hover:bg-green-700 text-white',
    },
    {
      name: 'Mantine',
      description: 'React components library with native dark theme support',
      href: '/mantine',
      color: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    },
    {
      name: 'Ant Design',
      description: 'A design language and React components library',
      href: '/ant-design',
      color: 'bg-red-600 hover:bg-red-700 text-white',
    },
    {
      name: 'Chakra UI',
      description: 'Create accessible React apps with speed',
      href: '/chakra-ui',
      color: 'bg-teal-600 hover:bg-teal-700 text-white',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold text-gray-900 dark:text-white mb-4'>
            Adrian&apos;s Component Library
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Explore and discover beautiful UI components from popular React
            libraries. Each page showcases interactive examples and
            implementation guides.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {componentLibraries.map((library) => (
            <Link
              key={library.name}
              href={library.href}
              className='group block'
            >
              <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700'>
                <div className='p-6'>
                  <div className='flex items-center justify-between mb-3'>
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                      {library.name}
                    </h3>
                    <div className='opacity-0 group-hover:opacity-100 transition-opacity'>
                      <svg
                        className='w-5 h-5 text-gray-400'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </div>
                  </div>
                  <p className='text-gray-600 dark:text-gray-300 text-sm mb-4'>
                    {library.description}
                  </p>
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${library.color}`}
                  >
                    View Components
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <p className='text-gray-600 dark:text-gray-400'>
            More component libraries coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
