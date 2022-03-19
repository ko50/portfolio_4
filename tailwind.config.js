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
        "w-hover-enhance": "w-hovered-enhance 0.3s cubic-bezier(0.16, 1, 0.3, 1) both",
        "w-hover-disenhance": "w-hovered-disenhance 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
}
