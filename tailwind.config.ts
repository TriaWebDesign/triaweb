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
        '22': '6rem', 
        '21' : '5.5rem',
        '97' : " 25rem",
        '98': '26rem',
        '100': '28rem',
        '-97' : '-25rem'
      },
      fontSize: {
        'xs1': '0.65rem',
      },
      height: {
        'screenxs1':'70vh',
        'screenxs' : '80vh',
        'screenxl': '120vh',
      },
      width: {
        '49%': '49%',
        '55%':'55%',
        '58%':'58%',
        '60%':'60%',
        '70%' : '70%',
        '86%': '86%',
      },
    },
  },
  plugins: [],
}
export default config
