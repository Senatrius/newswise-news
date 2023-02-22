/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        overlay:
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.00691776) 6.67%, rgba(0, 0, 0, 0.028408) 13.33%, rgba(0, 0, 0, 0.0653279) 20%, rgba(0, 0, 0, 0.117929) 26.67%, rgba(0, 0, 0, 0.18542) 33.33%, rgba(0, 0, 0, 0.265507) 40%, rgba(0, 0, 0, 0.354153) 46.67%, rgba(0, 0, 0, 0.445847) 53.33%, rgba(0, 0, 0, 0.534493) 60%, rgba(0, 0, 0, 0.61458) 66.67%, rgba(0, 0, 0, 0.682071) 73.33%, rgba(0, 0, 0, 0.734672) 80%, rgba(0, 0, 0, 0.771592) 86.67%, rgba(0, 0, 0, 0.793082) 93.33%, rgba(0, 0, 0, 0.8) 100%)'
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
  plugins: [require('@tailwindcss/line-clamp')]
};
