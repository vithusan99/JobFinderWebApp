/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    screens:{
      // => @media (min-width: 425px) { ... }
      'xsm':'425px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        blueclr:'#2a68ff',
        grayVithu:'#f1f4f8',
        cardShadow:'#f4f8f9',
        textclr:'#252b36',
        //     primary: "#0E0E1A",
        //     secondary: "#F2F2F2",
        //     buttonBlue: "#83BCFF",
        //     buttonRed: "#CE4444",
        //     buttonGreen: "#83FF9E",
        //     danger: "#FFA6A6",
        //     success: "#83FF9E",
      }
    },
  },
  plugins: [],
}

