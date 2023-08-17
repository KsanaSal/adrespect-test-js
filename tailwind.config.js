/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js}", "./index.html"],
    theme: {
        extend: {
            colors: {
                primary: "#1B5B31",
                secondary: "#DCC1AB",
                accent: "#003EDC",
                grayDark: "#111111",
                grayLight: "#F5F0EC",
            },
        },
    },
    plugins: [],
};
