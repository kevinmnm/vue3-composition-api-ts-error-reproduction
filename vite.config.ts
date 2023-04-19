import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      vue({
         template: { transformAssetUrls }
      }),
      vueJsx(),
      vuetify({
         autoImport: true,
      }),
   ],
   define: { 'process.env': {} },
   resolve: {
      alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: [
         '.js',
         '.json',
         '.jsx',
         '.mjs',
         '.ts',
         '.tsx',
         '.vue',
      ],
   },
   server: {
      port: 3002,
   },
})
