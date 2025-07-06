import Link from 'next/link';

export default function Home() {
  const componentLibraries = [
    {
      name: 'Cards',
      description:
        'Beautifully designed components that you can copy and paste into your apps',
      href: '/cards',
      color: 'bg-black hover:bg-gray-800 text-white',
    },
    {
      name: 'Carousels',
      description: 'Modern and animated React components for your next project',
      href: '/aceternity',
      color: 'bg-purple-600 hover:bg-purple-700 text-white',
    },
    {
      name: 'Text animations',
      description: 'A production-ready motion library for React',
      href: '/framer-motion',
      color: 'bg-pink-600 hover:bg-pink-700 text-white',
    },
    {
      name: 'Boxs',
      description: 'Low-level UI primitives with a focus on accessibility',
      href: '/radix',
      color: 'bg-blue-600 hover:bg-blue-700 text-white',
    },
    {
      name: 'Modals',
      description: 'Completely unstyled, fully accessible UI components',
      href: '/headless-ui',
      color: 'bg-green-600 hover:bg-green-700 text-white',
    },
    {
      name: 'Buttons',
      description: 'React components library with native dark theme support',
      href: '/mantine',
      color: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    },
    {
      name: 'Inputs',
      description: 'A design language and React components library',
      href: '/ant-design',
      color: 'bg-red-600 hover:bg-red-700 text-white',
    },
    {
      name: 'Dropdowns',
      description: 'Create accessible React apps with speed',
      href: '/chakra-ui',
      color: 'bg-teal-600 hover:bg-teal-700 text-white',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-800 text-white'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold  dark:text-white mb-4'>
            Adrian&apos;s Component Library
          </h1>
          <div className='flex flex-wrap items-center justify-center gap-4 '> 
            {componentLibraries.map((library) => (
              <div
                key={library.name}
                className={`mt-8 p-6 rounded-lg shadow-md flex w-[400px] h-[200px] flex-col ${library.color}`}
              >
                <h2 className='text-2xl font-bold text-white'>
                  {library.name}
                </h2>
                <p className='mt-2 text-gray-200'>{library.description}</p>
                <Link
                  href={library.href}
                  className='mt-4 inline-block text-white underline'
                >
                  Explore
                </Link>
              </div>
          ))}
            {componentLibraries.map((library) => (
              <div
                key={library.name}
                className={`mt-8 p-6 rounded-lg shadow-md flex w-[400px] h-[200px] flex-col ${library.color}`}
              >
                <h2 className='text-2xl font-bold text-white'>
                  {library.name}
                </h2>
                <p className='mt-2 text-gray-200'>{library.description}</p>
                <Link
                  href={library.href}
                  className='mt-4 inline-block text-white underline'
                >
                  Explore
                </Link>
              </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
