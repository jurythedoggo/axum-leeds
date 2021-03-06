module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    // breakpoints for screens
    screens: {
      sm: "480px",
      md: "760px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        menuBackground: "#FEFFF0",
        footerBackground: "#1E293B",
        flowerBrown: "#367720",
        flowerRed: "#D51B19",
        flowerPurple: "#3D5A98",
        flowerOrange: "#F0A83C",
        obeliskTeal: "#6EE7B7",
        habeshaGreen: "#4A6B3D",
        habeshaOrange: "#F4C605",
        habeshaPurple: "#7E0A81",
        habeshaBlack: "#2B1120",
        habeshaRed: "#D7102F",
        habeshaBrightRed: "#F11B2A",
        habeshaDarkPurple: "#49025C",
      },
      fontFamily: {
        bitter: ["Bitter"],
        purse: ['"Purple Purse"'],
        asar: ["Asar"],
        raleway: ["Raleway"],
        eagleLake: ["Eagle Lake"],
        workSans: ["Work Sans"],
      },
      backgroundImage: {
        folkPatternV: "url('../images/habesha-pattern-vertical.png')",
        folkPatternH: "url('../images/habesha-pattern-horizontall.png')",
        axumObelisk: "url('../images/axum-obelisk.jpg')",
        colMesob: "url('../images/original/colorful-mesob-2.jpg')",
        obelisk: "url('../images/hq/obelisk-hq.jpg')",
        mahberawi: "url('../images/hq/mahberawi-hq.jpg')",
        shiro: "url('../images/hq/shiro-clay-hq.jpg')",
        jebena: "url('../images/hq/jebena-hq.jpg')",
        jebena375: "url('../images/hq/jebena-1440-375-hq.jpg')",
        jebena880: "url('../images/hq/jebena-1440-880-hq.jpg')",
        purpleCircle: "url('../images/purple-circle-transparent.png",
        redCircle: "url('../images/red-circle-transparent.png",
        greenCircle: "url('../images/green-circle-transparent.png",
        orangeCircle: "url('../images/orange-circle-transparent.png",
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("tailwindcss-text-fill-stroke"),
  ],
}
