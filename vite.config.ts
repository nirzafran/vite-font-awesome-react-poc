import react from '@vitejs/plugin-react'
import Checker from 'vite-plugin-checker'
import { resolve } from 'path'
import { UserConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import macrosPlugin from 'vite-plugin-babel-macros'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

const shouldAnalyze = process.env.ANALYZE

const config: UserConfig = {
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: pathResolve('src') + '/'
      }
    ]
  },
  build: {
    rollupOptions: {
      plugins: !!shouldAnalyze ? [visualizer({ open: true, filename: './bundle-size/bundle.html' })] : []
    },
    sourcemap: !!shouldAnalyze
  },
  plugins: [
    macrosPlugin(),
    react(),
    // Checker({
    //   typescript: true,
    //   overlay: true,
    //   eslint: {
    //     files: 'src',
    //     extensions: ['.ts', '.tsx']
    //   }
    // })
  ]
}

const getConfig = () => config

export default getConfig
