module.exports = {
  purge: {
    enabled: false,
    content: ["./**/*.hbs"],
  },
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "dyari-gray": {
          lightest: "#fafafb",
          "very-light": "#e8ebed",
          lighter: "#9197a1",
          light: "#80868e",
          DEFAULT: "#60666c",
          dark: "#212326",
          darker: "#1c1e21",
          darkest: "#151719",
        },
      },
      fontFamily: {
        serif: [
          "Georgia",
          "ui-serif",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.dyari-gray.dark"),
            a: {
              color: theme("colors.green.500"),
              "&:hover": {
                color: theme("colors.green.600"),
              },
            },
            h1: {
              color: theme("colors.dyari-gray.darkest"),
            },
            h2: {
              color: theme("colors.dyari-gray.darkest"),
            },
            h3: {
              color: theme("colors.dyari-gray.darkest"),
            },
            h4: {
              color: theme("colors.dyari-gray.darkest"),
            },
            h5: {
              color: theme("colors.dyari-gray.darkest"),
            },
            h6: {
              color: theme("colors.dyari-gray.darkest"),
            },
            strong: {
              color: theme("colors.dyari-gray.dark"),
            },
            blockquote: {
              color: theme("colors.dyari-gray"),
              strong: {
                color: theme("colors.dyari-gray"),
              },
            },
            code: {
              color: theme("colors.dyari-gray"),
            },
            hr: {
              borderColor: theme("colors.dyari-gray.very-light"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.dyari-gray.very-light"),
            a: {
              color: theme("colors.green.500"),
              "&:hover": {
                color: theme("colors.green.600"),
              },
            },
            h1: {
              color: theme("colors.dyari-gray.lightest"),
            },
            h2: {
              color: theme("colors.dyari-gray.lightest"),
            },
            h3: {
              color: theme("colors.dyari-gray.lightest"),
            },
            h4: {
              color: theme("colors.dyari-gray.lightest"),
            },
            h5: {
              color: theme("colors.dyari-gray.lightest"),
            },
            h6: {
              color: theme("colors.dyari-gray.lightest"),
            },
            strong: {
              color: theme("colors.dyari-gray.very-light"),
            },
            blockquote: {
              color: theme("colors.dyari-gray.lighter"),
              strong: {
                color: theme("colors.dyari-gray.lighter"),
              },
            },
            code: {
              color: theme("colors.dyari-gray.lighter"),
            },
            hr: {
              borderColor: theme("colors.dyari-gray"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
