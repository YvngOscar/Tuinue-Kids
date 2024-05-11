/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': {
                    DEFAULT: '#FEFEFF',
                    50: '#FFFFFF',
                    100: '#FFFFFF',
                    200: '#FFFFFF',
                    300: '#FFFFFF',
                    400: '#FFFFFF',
                    500: '#FEFEFF',
                    600: '#F4F4FF',
                    700: '#EAEAFF',
                    800: '#DFDFFF',
                    900: '#D5D5FF',
                    950: '#D0D0FF'
                },
                'secondary': {
                    DEFAULT: '#50ADE6',
                    50: '#F1F8FD',
                    100: '#DFF0FA',
                    200: '#BBDFF5',
                    300: '#97CEF0',
                    400: '#74BEEB',
                    500: '#50ADE6',
                    600: '#2096DE',
                    700: '#1975AD',
                    800: '#12547C',
                    900: '#0B334B',
                    950: '#072232'
                },
                'accent': {
                    DEFAULT: '#87C537',
                    50: '#DCEFC5',
                    100: '#D3EAB5',
                    200: '#C0E195',
                    300: '#ADD975',
                    400: '#9AD055',
                    500: '#87C537',
                    600: '#69992B',
                    700: '#4B6D1F',
                    800: '#2D4112',
                    900: '#0F1606',
                    950: '#000000'
                },
                'pink': {
                    DEFAULT: '#EE0490',
                    50: '#FEACDD',
                    100: '#FD98D5',
                    200: '#FD70C4',
                    300: '#FC48B4',
                    400: '#FB20A3',
                    500: '#EE0490',
                    600: '#B7036F',
                    700: '#80024D',
                    800: '#48012C',
                    900: '#11000A',
                    950: '#000000'
                },
            }
        },
    },
    plugins: [],
}

