// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join } = require('path')

module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
}
