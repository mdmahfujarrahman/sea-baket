/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        backgroundImage: {
            "home-bg": "url('/src/asset/sea-basket.jpg')",
        },
    },
    daisyui: {
        themes: [
            {
                seatheme: {
                    primary: "#0E79BD",
                    secondary: "#FFFFFF",
                    accent: "#000000",
                    neutral: "#3d4451",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
