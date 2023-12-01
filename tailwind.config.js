/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      montserrat: ['Montserrat', 'sans'],
      keyframes: {
        'wiggle': {
          '0%, 100%': { transform: 'translate-y-10' },
          '50%': { transform: 'translate-y-12' },
        }
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      colors: {
        secondary: "#aaa6c3", bgcolor:'#050816'
      },
      screens: {
        'sm': '300px',
        'md': '768px',
        'lg': '1024px',
        // Add more breakpoints as needed
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },

      

    },
  },
  plugins: [],
}
