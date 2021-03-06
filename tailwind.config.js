module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/common/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: "base",
        }),
        require("@tailwindcss/aspect-ratio"),
    ],
};
