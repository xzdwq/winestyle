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
      base:  { min: '1201px', max: '' },
      sm:    { min: '1024px', max: '1201px' },
      xs:    { min: '',       max: '1024px' },
      scale: { min: '',       max: '632px' },
    },
    fontSize: {
      '4xl': ['32px', {
        letterSpacing: '0px',
        lineHeight:    '40px',
      }],
      '3xl': ['28px', {
        letterSpacing: '0px',
        lineHeight:    '36px',
      }],
      '2xl': ['24px', {
        letterSpacing: '0px',
        lineHeight:    '28px'
      }],
      'xl': ['22px', {
        letterSpacing: '0px',
        lineHeight:    '28px',
      }],
      'lg': ['18px', {
        letterSpacing: '0px',
        lineHeight:    '24px',
      }],
      'base': ['16px', {
        letterSpacing: '0px',
        lineHeight:    '24px',
      }],
      'base-bold': ['16px', {
        letterSpacing: '0px',
        lineHeight:    '24px',
      }],
      'base-link': ['16px', {
        letterSpacing: '0px',
        lineHeight:    '20px',
      }],
      'sm': ['14px', {
        letterSpacing: '0px',
        lineHeight:    '20px',
      }],
      'sm-bold': ['14px', {
        letterSpacing: '0px',
        lineHeight:    '20px',
      }],
      'sm-link': ['14px', {
        letterSpacing: '0px',
        lineHeight:    '16px',
      }]
    },
    fontWeight: {
      '4xl':        700,
      '3xl':        700,
      '2xl':        600,
      'xl':         700,
      'lg':         600,
      'base':       400,
      'base-bold':  600,
      'base-link':  400,
      'sm':         400,
      'sm-bold':    600,
      'sm-link':    400,
    },
    extend: {
      flex: {
        '2': '2 2 0%',
      },
      gridTemplateColumns: {
        'base': 'repeat(24, minmax(0, 1fr))',
        'sm':   'repeat(12, minmax(0, 1fr))',
        'xs':   'repeat(4, minmax(0, 1fr))',
      },
      gap: {
        'base': '24px',
        'sm':   '8px',
        'xs':   '8px',
      },
      spacing: {
        'product-img-base': '600px',
        'icon-base':        '24px',
        'icon-sm':          '16px',
        'icon-xs':          '16px',
      },
      fontFamily: {
        'typography': ['system', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Segoe WP"', 'Roboto', 'Ubuntu', 'Oxygen', 'Cantarell', '"Fira Sans"','"Helvetica Neue"', 'Helvetica', '"Lucida Grande"', '"Droid Sans"', 'Tahoma', '"Microsoft Sans Serif"', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        primary: {
          50:  '#FBEDEF',
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
          50:  '#E5EAF0',
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
          50:  '#FCFAF9',
          100: '#F7F5F4',
          200: '#F1F0EF',
          300: '#E4E3E2',
          400: '#C2C0BF',
          500: '#A3A2A1',
          600: '#797877',
          700: '#656463',
          800: '#464544',
          900: '#252423',
        }
      },
      borderRadius: {
        'offerbox':    '20px',
        'button-base': '8px',
        'button-sm':   '8px',
      },
      width: {
        'badge-sale-base':  '76px',
        'badge-sale-sm':    '76px',
        'badge-sale-xs':    '56px',
      },
      height: {
        'header-base':      '152px',
        'header-sm':        '152px',
        'header-xs':        '56px',
        'badge-sale-base':  '32px',
        'badge-sale-sm':    '32px',
        'badge-sale-xs':    '24px',
        'media-base':       '96px',
        'media-sm':         '96px',
        'media-xs':         '40px',
      },
      margin: {
        'r-product-img-base':   '32px',
        'r-product-img-sm':     '32px',
        'offerbox-base':        '80px',
        'offerbox-sm':          '40px',
        'offerbox-xs':          '40px',
        'img-badgesale-base':   '4px',
      },
      padding: {
        'container-base': '28px',
        'container-sm':   '28px',
        'container-xs':   '16px',
        'offerbox':       '24px',
        'button-x-base':  '16px',
        'button-y-base':  '12px',
        'button-x-sm':    '8px',
        'button-y-sm':    '6px',
      },
      maxWidth: {
        'offerbox': '336px',
        'info':     '384px',
      },
      minWidth: {
        'button-base':   '64px',
        'button-sm':     '64px',
        'offerbox':      '316px',
        'info':          '316px',
      },
      minHeight: {
        'button-base': '20px',
        'button-sm':   '20px',
      }
    },
    container: (theme) => ({
      center: true,
      padding: {
        default: theme('padding.container-base'),
      },
    }),
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          maxWidth:       theme('screens.base'),
          "@screen base": {
            maxWidth:     theme("screens.base"),
            paddingLeft:  theme("padding.container-base"),
            paddingRight: theme("padding.container-base"),
          },
          "@screen sm": {
            maxWidth:     theme("screens.sm"),
            paddingLeft:  theme("padding.container-sm"),
            paddingRight: theme("padding.container-sm"),
          },
          "@screen xs": {
            maxWidth:     theme("screens.xs"),
            paddingLeft:  theme("padding.container-xs"),
            paddingRight: theme("padding.container-xs"),
          },
        },
      })
    },
  ]
}
