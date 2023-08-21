/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js}", "./index.html"],
    theme: {
        screens: {
            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1440px",
            // => @media (min-width: 1440px) { ... }
        },
        extend: {
            colors: {
                primary: "#1B5B31",
                primaryLight: "#DCFFE8",
                secondary: "#DCC1AB",
                accent: "#003EDC",
                grayDark: "#111111",
                grayLight: "#F5F0EC",
            },
            boxShadow: {
                box: "5px 7px 7px rgba(0, 0, 0, 0.2)",
                boxLight: "5px 5px 5px rgba(245, 240, 236, 0.2)",
            },
            dropShadow: {
                textShadow: "5px 5px 3px rgba(27, 91, 49, 0.7)",
            },
        },
    },
    plugins: [],
};
