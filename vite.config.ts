import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"
import packageJSON from "./package.json"
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import { extname, relative, resolve } from 'path'
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    dts({ include: 'src' }),
    libInjectCss()],
  resolve: {
    alias: [
      { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
      { find: "#", replacement: fileURLToPath(new URL("./src/assets", import.meta.url)) }
    ]
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      formats: ['es'],
      name: 'LukavetskyiUIKIT',
      fileName: 'main'
    },
    rollupOptions: {
      external: Object.keys(packageJSON.peerDependencies),
      input: Object.fromEntries(
        glob.sync('src/**/*.{ts,tsx}', {
          ignore: ["src/**/*.{d.ts,stories.ts,stories.tsx}"],
        }).map(file => [
          relative(
            'src',
            file.slice(0, file.length - extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      }
    }
  }
})

