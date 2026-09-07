/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0A08',
        panel: '#14120F',
        panel2: '#1B1815',
        hairline: '#2E2A23',
        hairline2: '#3A342A',
        gold: {
          deep: '#7C5A2A',
          DEFAULT: '#B98D4B',
          bright: '#D9BD84',
          pale: '#EAD9B4',
        },
        parchment: '#EFE8DA',
        muted: '#9C9184',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        wideish: '0.04em',
      },
      maxWidth: {
        prose: '38rem',
      },
    },
  },
  plugins: [],
}
