import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    keyframes: {
      myPulse: {
        '50%': {
          opacity: '.8',
          textShadow: '0px 0px 15px red'
        },
        '60%': {
          textShadow: '0px 0px 15px blue',
        }
      }
    },
    animation: { puls: 'myPulse 1s cubic-bezier(0.02, 1.5, 1, -0.5) infinite' },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'items-shadow': '0px 0px 0px 0px rgba(87, 87, 76, 0.06), 8px 11px 30px 0px rgba(87, 87, 76, 0.06), 33px 42px 54px 0px rgba(87, 87, 76, 0.05), 75px 95px 73px 0px rgba(87, 87, 76, 0.03), 133px 169px 86px 0px rgba(87, 87, 76, 0.01), 207px 264px 94px 0px rgba(87, 87, 76, 0.00)',

      },
      dropShadow: {
        'my-shadow': [
          '0 2px 2px rgba(0, 0, 0, 0.25)',
          '0 2px 2px rgba(0, 0, 0, 0.15)'
        ]
      },
    },
  },
  plugins: [],
}
export default config
