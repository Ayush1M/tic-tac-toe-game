/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      "body" : ["Oswald", "sans-serif"]
    },
    extend: {
      colors : {
        "bg-clr" : "#192a32",
        "primary-one" : "#1f3540",
        "primary-two" : "#a8bec9" 
      },
    },
  },
  plugins: [],
}

