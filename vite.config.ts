import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import yaml from '@rollup/plugin-yaml'
import ViteRequireContext from '@originjs/vite-plugin-require-context'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  assetsInclude: /\.(pdf|jpg|png|svg)$/,
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './src')}/`,
      '@assets/': `${path.resolve(__dirname, './src/assets')}/`,
      '@public/': `${path.resolve(__dirname, './public')}/`,
      '@sb/': `${path.resolve(__dirname, './stories')}/`,
    },
  },
  server: {
    port: 3000,
  },
  publicDir: path.resolve(__dirname, './public'),
  base: './',
  plugins: [
    eslintPlugin(),
    vue(),
    ViteRequireContext(),
    yaml({
      transform (data) {
        return data === null ? {} : undefined
      },
    }),
  ],
})
