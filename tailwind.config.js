/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: [ "mont" ],
        "mont-bold":["mont-bold"]
      },
    },
  },
  darkMode:"class",
  plugins: [nextui( {
    themes: {
      light: {
        colors: {
          primary: {
            50: "#fff2e6",
            100:"#ffd5b0",
            200:"#ffc18a",
            300:"#ffa554",
            400:"#ff9433",
            500:"#ff7900",
            600:"#e86e00",
            700:"#b55600",
            800:"#8c4300",
            900:"#6b3300",
            DEFAULT: "#ff7900"
          },
          danger: {
            50: "#ffe6e6",
            100:"#ffb0b0",
            200:"#ff8a8a",
            300:"#ff5454",
            400:"#ff3333",
            500:"#ff0000",
            600:"#e80000",
            700:"#b50000",
            800:"#8c0000",
            900:"#6b0000",
            DEFAULT: "#ff0000"
          }
        }
      },
      dark: {
        colors: {
          primary: {
            50: "#fff2e6",
            100:"#ffd5b0",
            200:"#ffc18a",
            300:"#ffa554",
            400:"#ff9433",
            500:"#ff7900",
            600:"#e86e00",
            700:"#b55600",
            800:"#8c4300",
            900:"#6b3300",
            DEFAULT: "#ff7900"
          },
          danger: {
            50: "#ffe6e6",
            100:"#ffb0b0",
            200:"#ff8a8a",
            300:"#ff5454",
            400:"#ff3333",
            500:"#ff0000",
            600:"#e80000",
            700:"#b50000",
            800:"#8c0000",
            900:"#6b0000",
            DEFAULT: "#ff0000"
          }
        }
      }
    }
  })],
}

