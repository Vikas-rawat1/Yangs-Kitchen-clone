// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'proxima': ['Proxima Nova', 'sans-serif'],
          'franklin': ['Franklin Gothic URW', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
