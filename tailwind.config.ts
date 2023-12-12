import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          'grey-1': '#393939',
          'grey-2': '#585858',
          'grey-3': '#848484',
          'grey-4': '#A9A9A9',
          'grey-5': '#D9D9D9',
          'grey-6': '#ECECEC',
          'grey-7': '#F9F9F9',
        },
        gray: {
          25: '#FCFCFD',
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
          950: '#0C111D',
        },
        'primary-milk': {
          10: '#FFF6EE',
          20: '#FFF0E3',
          30: '#FFE8D5',
          40: '#FFE0C7',
          50: '#FFD9B9',
          60: '#FFD1AB',
          70: '#D4AE8E',
          80: '#AA8B72',
          90: '#7F6956',
          100: '#554639',
          110: '#332A22',
        },
        'primary-purple': {
          10: '#D9D6E0',
          20: '#C0BBCC',
          30: '#A099B2',
          40: '#817799',
          50: '#62557F',
          60: '#423366',
          70: '#372B55',
          80: '#2C2244',
          90: '#211A33',
          100: '#161122',
          110: '#0D0A14',
        },
        'secondary-blue': {
          10: '#D3D7DE',
          20: '#B6BDC7',
          30: '#929CA8',
          40: '#6E7B90',
          50: '#495A74',
          60: '#253958',
          70: '#1F3049',
          80: '#19263B',
          90: '#131D2C',
          100: '#0C131D',
        },
        'secondary-green': {
          10: '#D1DBDA',
          20: '#B2C2C1',
          30: '#8BA4A2',
          40: '#658684',
          50: '#3F6765',
          60: '#184946',
          70: '#143D3A',
          80: '#10312F',
          90: '#0C2523',
          100: '#081817',
          110: '#050F0E',
        },

        'secondary-lemon': {
          10: '#F6F7E4',
          20: '#F0F2D2',
          30: '#E9EBBB',
          40: '#E2E5A5',
          50: '#DADE8E',
          60: '#D3D878',
          70: '#B0B464',
          80: '#8D9050',
          90: '#6A6C3C',
          100: '#464828',
          110: '#2A2B18',
        },
        'secondary-purple': {
          10: '#F6F4FF',
          20: '#F0EDFF',
          30: '#E8E3FF',
          40: '#E1DAFF',
          50: '#D9D1FF',
          60: '#D2C8FF',
          70: '#AFA7D4',
          80: '#8C85AA',
          90: '#69647F',
          100: '#464355',
          110: '#2A2833',
        },
        warning: '#E2B93B',
        error: '#EB5757',
        success: '#27AE60',
        secondary: '#3A383F',
      },
      fontSize: {
        xs: [
          '12px',
          {
            lineHeight: '18px',
          },
        ],
        sm: [
          '14px',
          {
            lineHeight: '21px',
          },
        ],
        base: [
          '16px',
          {
            lineHeight: '24px',
          },
        ],
        lg: [
          '18px',
          {
            lineHeight: '28px',
          },
        ],
        xl: [
          '21px',
          {
            lineHeight: '30px',
          },
        ],
        '2xl': [
          '24px',
          {
            lineHeight: '32px',
          },
        ],
        '3xl': [
          '30px',
          {
            lineHeight: '38px',
          },
        ],
        '4xl': [
          '33px',
          {
            lineHeight: '45px',
          },
        ],
        '5xl': [
          '36px',
          {
            lineHeight: '44px',
          },
        ],
        '6xl': [
          '48px',
          {
            lineHeight: '54px',
          },
        ],
        '7xl': [
          '60px',
          {
            lineHeight: '72px',
          },
        ],
        '8xl': [
          '72px',
          {
            lineHeight: '90px',
          },
        ],
      },
      fontFamily: {
        romela: 'var(--font-romela)',
        whyte: 'var(--font-whyte)',
      },
    },
    plugins: [],
  },
};
export default config;
