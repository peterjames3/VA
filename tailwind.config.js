/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding:'1rem',
        marginTop:'10rem',
        screens:{
           sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        }

      },
         fontFamily: {
        Kumbh: ["Kumbh Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        'primary': '#ffe573',
        'secondary': '#1f242c',
        'faitPrimary': '#fffae3',
       
        'cardBg': '#332e17',
        'faintcardbg':'#fffae3',
        'textColor': '#565960',
      },
   
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1400px",
        xxl: '1900px',
      }
    },
  },
  plugins: [],
}