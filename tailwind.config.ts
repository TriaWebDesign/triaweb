import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'Michroma': 'Michroma',
        'Urbanist' : 'Urbanist'
      },
      spacing: {
        '21' : '5.5rem',
        '22': '6rem', 
        '23': '6.5rem',
        '42': '10.5rem',
        '97' : " 25rem",
        '98': '26rem',
        '100': '28rem',
        '102': '40rem',
        '108': '46rem',
        '-97' : '-25rem'
      },
      fontSize: {
        'xs1': '0.55rem',
      },
      height: {
        'screenxs1':'70vh',
        'screenxs' : '80vh',
        'screenxss' : '98vh',
        'screenxl': '120vh',
        'screen1xl': '140vh',
        'screen2xl':'160vh',
        'screen3xl':'190vh',
      },
      width: {
        '49%': '49%',
        '55%':'55%',
        '58%':'58%',
        '60%':'60%',
        '70%' : '70%',
        '86%': '86%',
        '101': '170px',
        '102': '440px',
      },
      screens: {
        '1xl': '1360px',
        '4xl' : '1920px'
      },
      boxShadow: {
        'tinn': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'all': '0px 6px 10px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        slidein: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideout: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        firsthov: {
          '0%': { boxShadow: '0px 0px 11.4px -5px rgb(255,255,255) inset, 0px 8px 18.3px 0px rgb(53,109,160) inset' },
          '50%': { boxShadow: '-7px 1px 19.8px -5px rgb(255,255,255) inset, 9px -8px 18.3px 0px rgb(53,109,160) inset' },
          '100%': { boxShadow: '0px 0px 11.4px -5px rgb(255,255,255) inset, -4px -3px 18.3px 0px rgb(53,109,160) inset' },
        },
        secondhov: {
          '0%': { boxShadow: 'box-shadow: -4px -3px 18.3px 0px #356DA0 inset' },
          '100%': { boxShadow: '-7px 2px 9.9px -5px #FFFFFF inset' },
        },
      },
      animation: {
        slidein: 'slidein',
        slideout: 'slideout',
        firsthov: 'firsthov',
        secondhov: 'secondhov',
      },
    },
  },
  plugins: [],
}
export default config
