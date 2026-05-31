/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          50: '#FDF2FD',
          100: '#F5DAF5',
          200: '#E0A6E0',
          300: '#C76EC7',
          400: '#A943A9',
          500: '#8A2B8A',
          600: '#691F69',
          700: '#4A154B',
          800: '#341034',
          900: '#1F091F',
        },
        gold: {
          50: '#FFFEFA',
          100: '#FBF7E7',
          200: '#F4EBC5',
          300: '#E8D89C',
          400: '#D6C075',
          500: '#C2A654',
          600: '#A38A45',
          700: '#856F36',
          800: '#665429',
          900: '#4A3D1E',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Cabinet Grotesk"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}
