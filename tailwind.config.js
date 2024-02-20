// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: ["./index.html",
//   "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      'title' : ['Anta' , 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'landing': "url('/img/landing.jpg')",
      },
      colors: {
        'primary' : "#0056D2"
      }
    },
  },
  plugins: [],
});