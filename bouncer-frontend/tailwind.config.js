/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     fontFamily: {
			"open-sans": ["Open Sans", "sans-serif"],
			crimson: ["Crimson Text", "serif"],
			"crimson-pro": ["Crimson Pro", "serif"],
			mono: ["Inconsolata", "monospace"],
		},
		colors: {
      white : "#FFFFFF",
      black : "#000000",
      bgDark : '#1a1a1a',
      lightGray: "#8F9991",
      gray :	"#333333",
      green : 	"#32CD32",
      red :	"#FF0000",
		
		},
    extend: {},
  },
  plugins: [],
}
