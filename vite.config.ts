import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { createStyleImportPlugin, VxeTableResolve } from 'vite-plugin-style-import'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
    createStyleImportPlugin({
      resolves: [VxeTableResolve()],
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
    include: [
      'ant-design-vue/es/locale/zh_CN',
      'ant-design-vue/es/locale/en_US',
    ],
  },
  server: {
    port: 8080, //启动端口
    hmr: {
      host: '127.0.0.1',
      port: 8080,
    },
    // 设置 https 代理
    proxy: {
      '/api': {
        target: 'your https address',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
})
