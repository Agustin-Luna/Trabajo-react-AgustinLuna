/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-slate-grey': '#0D1717',
        'midnight-blue': '#101720',
        'charcoal-grey': '#171717',
        'deep-navy-blue': '#011222',
        'rich-black': '#020D19',
        'HEX': '#000',
        'skyblue-tw': '#00A9FF',
        'purple-violet': '#8a3ab9',
        'blue-face': '#4267B2',
      },
    },
  },
  plugins: [],
}

