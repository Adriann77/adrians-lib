// Przykładowy komponent Card2
export default function Card2() {
  return (
    <div className='bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-6 text-white'>
      <h3 className='text-xl font-semibold mb-3'>Gradient Card</h3>
      <p className='mb-4 opacity-90'>
        This card has a beautiful gradient background.
      </p>
      <div className='flex gap-2'>
        <button className='px-4 py-2 bg-white text-purple-600 rounded hover:bg-gray-100 transition-colors'>
          Action 1
        </button>
        <button className='px-4 py-2 bg-black/20 text-white rounded hover:bg-black/30 transition-colors'>
          Action 2
        </button>
      </div>
    </div>
  );
}
