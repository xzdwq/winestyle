const em = (px) => `${px / 16}em`,
  rem = (px) => ({ [px]: `${px / 16}rem` }),
  px = (num) => ({ [num]: `${num}px` })

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './stories/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{html,ts,js,vue}',
    './index.html',
  ],
  theme: {
    screens: {
      base: { min: em(1201), max: '' },
      sm: { min: em(1024), max: em(1201) },
      xs: { min: '', max: em(1024) },
    },
    fontSize: {
      '4xl': [
        rem(32),
        {
          letterSpacing: rem(0),
          lineHeight: rem(40),
        },
      ],
      '3xl': [
        rem(28),
        {
          letterSpacing: rem(0),
          lineHeight: rem(36),
        },
      ],
      '2xl': [
        rem(24),
        {
          letterSpacing: rem(0),
          lineHeight: rem(28),
        },
      ],
      xl: [
        rem(22),
        {
          letterSpacing: rem(0),
          lineHeight: rem(28),
        },
      ],
      lg: [
        rem(18),
        {
          letterSpacing: rem(0),
          lineHeight: rem(24),
        },
      ],
      base: [
        rem(16),
        {
          letterSpacing: rem(0),
          lineHeight: rem(24),
        },
      ],
      'base-link': [
        rem(16),
        {
          letterSpacing: rem(0),
          lineHeight: rem(28),
        },
      ],
      sm: [
        rem(14),
        {
          letterSpacing: rem(0),
          lineHeight: rem(20),
        },
      ],
      'sm-link': [
        rem(14),
        {
          letterSpacing: rem(0),
          lineHeight: rem(16),
        },
      ],
    },
    fontWeight: {
      '4xl': 700,
      '3xl': 700,
      '2xl': 600,
      xl: 700,
      lg: 600,
      base: 400,
      'base-bold': 600,
      'base-link': 400,
      sm: 400,
      'sm-bold': 600,
      'sm-link': 400,
    },
    extend: {
      flex: {
        2: '2 2 0%',
      },
      gridTemplateColumns: {
        base: 'repeat(24, minmax(0, 1fr))',
        sm: 'repeat(12, minmax(0, 1fr))',
        xs: 'repeat(4, minmax(0, 1fr))',
      },
      gap: {
        base: em(24),
        sm: em(8),
        xs: em(8),
      },
      spacing: {
        152: em(152),
        56: em(56),
        40: em(40),
        38: em(36),
        32: em(32),
        28: em(28),
        24: em(24),
        20: em(20),
        16: em(16),
        12: em(12),
        8: em(8),
        4: em(4),
        0: em(0),
      },
      fontFamily: {
        typography: [
          'system',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Segoe WP"',
          'Roboto',
          'Ubuntu',
          'Oxygen',
          'Cantarell',
          '"Fira Sans"',
          '"Helvetica Neue"',
          'Helvetica',
          '"Lucida Grande"',
          '"Droid Sans"',
          'Tahoma',
          '"Microsoft Sans Serif"',
          'sans-serif',
        ],
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        primary: {
          50: '#FBEDEF',
          100: '#F7D1D5',
          200: '#E3A2A2',
          300: '#D6807E',
          400: '#DF6760',
          500: '#E35B4B',
          600: '#D45449',
          700: '#C24B42',
          800: '#B5453C',
          900: '#A73C31',
        },
        blue: {
          50: '#E5EAF0',
          100: '#BEC9DB',
          200: '#94A6C3',
          300: '#6B84AB',
          400: '#496B9B',
          500: '#22528D',
          600: '#1A4B84',
          700: '#0F4179',
          800: '#06386C',
          900: '#002855',
        },
        grey: {
          50: '#FCFAF9',
          100: '#F7F5F4',
          200: '#F1F0EF',
          300: '#E4E3E2',
          400: '#C2C0BF',
          500: '#A3A2A1',
          600: '#797877',
          700: '#656463',
          800: '#464544',
          900: '#252423',
        },
      },
      borderRadius: {
        ...px(8),
        ...px(20),
      },
      margin: (theme, { negative }) => ({
        auto: 'auto',
        ...theme('spacing'),
        ...negative(theme('spacing')),
      }),
      padding: {
        'container-base': em(28),
        'container-sm': em(28),
        'container-xs': em(16),
      },
      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
    },
    container: (theme) => ({
      center: true,
      padding: {
        default: theme('padding.container-base'),
      },
    }),
    debugScreens: {
      position: ['bottom', 'left'],
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          maxWidth: theme('screens.base'),
          '@screen base': {
            maxWidth: theme('screens.base'),
            paddingLeft: theme('padding.container-base'),
            paddingRight: theme('padding.container-base'),
          },
          '@screen sm': {
            maxWidth: theme('screens.sm'),
            paddingLeft: theme('padding.container-sm'),
            paddingRight: theme('padding.container-sm'),
          },
          '@screen xs': {
            maxWidth: theme('screens.xs'),
            paddingLeft: theme('padding.container-xs'),
            paddingRight: theme('padding.container-xs'),
          },
        },
      })
    },
    require('tailwindcss-debug-screens'),
  ],
}
