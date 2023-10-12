import { fileURLToPath, URL } from 'url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import { exit } from 'process';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  if (!process.env.VITE_APP_PORT) {
    // eslint-disable-next-line no-console
    console.error('VITE_APP_PORT required.');
    exit(1);
  }

  const port = parseInt(process.env.VITE_APP_PORT, 10);

  return defineConfig({
    server: {
      port,
      https: true,
    },
    preview: {
      port,
    },
    build: {
      rollupOptions: {
        output: [
          {
            assetFileNames: 'assets/[name]-[hash][extname]',
          },
        ],
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      svgLoader(),
      basicSsl(),
    ],
    resolve: {
      alias: [
        {
          find: /~(.+)/,
          replacement: fileURLToPath(new URL('./node_modules/$i', import.meta.url)),
        },
        {
          find: /@\//,
          replacement: fileURLToPath(new URL('./src/', import.meta.url)),
        },
        {
          find: /@style\//,
          replacement: fileURLToPath(new URL('./src/assets/scss/', import.meta.url)),
        },
        {
          find: /@i18n\//,
          replacement: fileURLToPath(new URL('./i18n/', import.meta.url)),
        },
      ],
    },
    define: {
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
    },
  });
};
