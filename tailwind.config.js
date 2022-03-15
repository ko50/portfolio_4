module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zcool: ["ZCOOL QingKe HuangYou"],
        dosis: ["Dosis"],
        maru: ["Kosugi Maru"],
      },
      colors: {
        "white": "#FFFFFF",
        "grey": "#C5C5C5",
        "blue": "#3D4256",
        "potato": "#473C56",
        "sky": "#2C303E",
        "midnight": "#161924",
        "ocean": "#3D4256",
        "star": "#E4D471",
        "2nd-mag-star": "#CABD6C",
        "lavender": "#7B61FF",
      },
      animation: {
        dawn: "dawn 3s cubic-bezier(0.64, 0, 0.78, 0) 1s both",
      },
    },
  },
  plugins: [],
}
