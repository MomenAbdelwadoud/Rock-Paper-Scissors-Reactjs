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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
