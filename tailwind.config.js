module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    link: "#374151",
    extend: {
      colors: {
        custom: {
          DEFAULT: "#34d399",
          light: "#D1FAE5",
        },
      },
    },
    spinner: (theme) => ({
      default: {
        color: "#dae1e7", // color you want to make the spinner
        size: "1em", // size of the spinner (used for both width and height)
        border: "2px", // border-width of the spinner (shouldn't be bigger than half the spinner's size)
        speed: "500ms", // the speed at which the spinner should rotate
      },
      // md: {
      //   color: theme('colors.red.500', 'red'),
      //   size: '2em',
      //   border: '2px',
      //   speed: '500ms',
      // },
    }),
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: { opacity: ["disabled"] },
    spinner: ["responsive"],
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-spinner")({
      className: "spinner",
      themeKey: "spinner",
    }),
  ],
};
