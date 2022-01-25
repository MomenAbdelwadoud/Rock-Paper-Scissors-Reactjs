module.exports = {
  content: ["./src/**/*.{html,js}", "./src/*/*.{html,js}", "./*.{html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          scissorsGrad: "hsl(39, 89%, 49%)",
          scissorsGradTo: " hsl(40, 84%, 53%)",
          paperGrad: "hsl(230, 89%, 62%)",
          paperGradTo: " hsl(230, 89%, 65%)",
          rockGrad: "hsl(349, 71%, 52%)",
          rockGradTo: " hsl(349, 70%, 56%)",
        },
        secondary: {
          darkText: "hsl(229, 25%, 31%)",
          scoreText: "hsl(229, 64%, 46%)",
          headerOutline: "hsl(217, 16%, 45%)",
          bgGrad: "hsl(214, 47%, 23%)",
          bgGradTo: "hsl(237, 49%, 15%)",
        },
      },
      fontFamily: {
        primary: ["Barlow Semi Condensed"],
      },
      backgroundImage: {
        triangle: "require(url('./images/bg-triangle.svg'))",
      },
      boxShadow: {
        circle: "inset 0 2px 3px 1px #7A7A7A;",
        winner:
          "0 0 0 15px rgba(255,255,255,0.1),0 0 0 40px rgba(255,255,255,0.05), 0 0 0 65px rgba(255,255,255,0.01);",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
