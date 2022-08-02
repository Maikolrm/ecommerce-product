/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pr-orange": "hsl(26, 100%, 55%)",
        "pr-pale-orange": "hsl(25, 100%, 94%)",
        "gr-blue": "hsl(220, 14%, 75%)",
        "dark-blue": "hsl(219, 9%, 45%)",
        "vark-blue": "hsl(220, 13%, 13%)",
        "light-blue": "hsl(223, 64%, 98%)"
      },
      fontFamily: {
        "kumbh-sans": ["kumbh sans"]
      }
    },
  },
  plugins: [],
}
