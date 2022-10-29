/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#111119",
                primary: "#00ff94",
                main: "#ffffff",
                mainDark: "#606061",
            },
            fontFamily: {
                Roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
                RobotoCondensed: [
                    "Roboto Condensed",
                    ...defaultTheme.fontFamily.sans,
                ],
                mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
            },
            keyframes: {
                pop: {
                    '0%': {
                        width: '100%'
                    },
                    '100%': {
                        width: '90%'
                    }
                },
                opacity: {
                    '0%': {
                        opacity: 0
                    },
                    '100%': {
                        opacity: 100
                    }
                }

            },
            animation: {
                pop: 'pop linear 1s alternate infinite',
                opacity: 'opacity 0.3s ease-out forwards',
            }
        },
    },
    plugins: [require("tailwindcss-magic")],
};
