/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...existing config
  theme: {
    extend: {
      keyframes: {
        'eye-blink': {
          '0%': {
            fill: '#ef4444', // red-500
            transform: 'scale(1)',
          },
          '50%': {
            fill: '#dc2626', // red-600
            transform: 'scale(0.8)',
          },
          '100%': {
            fill: '#ffffff', // white (original)
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        'eye-blink': 'eye-blink 1s ease-in-out forwards',
      },
    },
  },
};
