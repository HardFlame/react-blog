/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            borderColor: {
                "default-gray": "gray",
            },
            borderRadius: {
                default: "5px",
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                "default-border": {
                    border: "1px solid gray",
                    borderRadius: "5px",
                },
            });
        },
    ],
};
