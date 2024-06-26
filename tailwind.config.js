import { transform } from 'typescript';

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
      screens : {
        'lg' : '1000px'
      },
      colors : {
        "bg-clr" : "#192a32",
        "primary-one" : "#1f3540",
        "primary-two" : "#a8bec9",
        "hover" : "#262626"
      },
      keyframes : {
        pop : {
          "0%" : {transform : "scale(0)"},
          "80%" : {transform : "scale(1.1)"},
          "100%" : {transform : "scale(1)"}
        },
        slide : {
          "0%" : {transform : "translateX(-80%)"},
          "100%" : {transform : "translateX(0)"}
        }
      },
      animation : {
        "pop-in" : "pop 0.3s cubic-bezier(0.68, -0.55, 0.65, 0.52) forwards",
        "slide-in-from-left" : "slide 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) backwards"
      }
    },
  },
  plugins: [],
}

