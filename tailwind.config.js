/// client/tailwind.config.js (MUST BE CREATED/UPDATED)

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // --- 1. COLOR PALETTE DEFINITION ---
      colors: {
        'navy': '#0B132B',       // Primary
        'dark-grayish-blue': '#1C2541', // Secondary
        'accent-blue': '#3A86FF', // Accent 1
        'accent-orange': '#FCA311', // Accent 2
        'off-white': '#F8F9FA',  // Background
        'text-dark': '#343A40',  // General dark text (for better contrast than pure black)
      },
      // --- 2. TYPOGRAPHY DEFINITION ---
      fontFamily: {
        // Import these via <link> tag in index.html or @import in index.css
        'sans': ['Inter', 'Roboto', 'sans-serif'], // Body Font
        'heading': ['Poppins', 'sans-serif'],      // Headings Font
      },
    },
  },
  plugins: [],
}