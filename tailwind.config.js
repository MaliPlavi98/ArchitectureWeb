module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Comic Sans MS', 'Arial MT', 'Arial', 'sans-serif'], // Temporarily add Comic Sans to test
      },
    },
  },
  plugins: [],
}