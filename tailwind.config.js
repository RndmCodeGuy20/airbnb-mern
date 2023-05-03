/** @type {import('tailwindcss').Config} */
export default {
    plugins: [],
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                'primary': '#1E1E1E',
                'highlight': '#E63454',
                'secondary': '#767777',
                'gray': '#E6E7E6',
                'dark_gray': '#717171',
                'black': '#111111',
            },
            fontFamily: {
                'sans': ['Plus Jakarta Sans', 'sans-serif'],
                'light': ['Plus Jakarta Sans Light', 'sans-serif'],
                'bold': ['Plus Jakarta Sans Bold', 'sans-serif'],
                'medium': ['Plus Jakarta Sans Medium', 'sans-serif'],
                'semi_bold': ['Plus Jakarta Sans Semi Bold', 'sans-serif'],
            },
        },
    },
};

