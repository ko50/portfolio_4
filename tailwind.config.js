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
        "potato": "#473C56",
        "sky": "#2C303E",
        "night": "#161924",
        "ocean": "#3D4256",
        "star": "#E4D471",
      },
      animation: {
        dawn: "dawn 3s cubic-bezier(0.64, 0, 0.78, 0) 1s both",
      },
    },
  },
  plugins: [],
}
