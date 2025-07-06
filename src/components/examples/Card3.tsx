// Przykładowy komponent Card3
export default function Card3() {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700'>
      <div className='h-48 bg-gradient-to-r from-blue-400 to-purple-500'></div>
      <div className='p-6'>
        <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
          Card with Image
        </h3>
        <p className='text-gray-600 dark:text-gray-300 mb-4'>
          This card includes an image header with content below.
        </p>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-gray-500 dark:text-gray-400'>
            Updated 2 hours ago
          </span>
          <button className='px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors'>
            View
          </button>
        </div>
      </div>
    </div>
  );
}
