/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        overlay:
          'linear-gradient(to top, hsl(0, 0%, 0%) 0%, hsl(0, 0%, 11.55%) 3.4%, hsl(0, 0%, 22.59%) 6.8%, hsl(0, 0%, 33.06%) 10.4%, hsl(0, 0%, 42.92%) 14.2%, hsl(0, 0%, 52.15%) 18.4%, hsl(0, 0%, 60.69%) 23%, hsl(0, 0%, 68.5%) 28.1%, hsl(0, 0%, 75.55%) 33.8%, hsl(0, 0%, 81.79%) 40.3%, hsl(0, 0%, 87.19%) 47.6%, hsl(0, 0%, 91.69%) 55.9%, hsl(0, 0%, 95.26%) 65.1%, hsl(0, 0%, 97.87%) 75.5%, hsl(0, 0%, 99.46%) 87.1%, hsl(0, 0%, 100%) 100%)'
      },
      colors: {
        divider: '#3c3c3c',
        primary: '#db1313',
        navBg: '#1f1f1f',
        input: '#141414',
        text: '#121212',
        secondaryText: '#bbbbbb'
      },
      fontSize: {
        small: '0.875rem',
        nav: '1.125rem',
        body: '1rem',
        card: '1.25rem',
        section: '1.5rem',
        article: '2rem'
      }
    }
  },
  plugins: []
};
