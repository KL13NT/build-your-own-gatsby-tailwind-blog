const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          700: "#25282C",
          900: "#151618",
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
