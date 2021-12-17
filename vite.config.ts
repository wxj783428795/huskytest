import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import htmlPlugin, { Options as HtmlPluginOptions } from 'vite-plugin-html-config';

const base = '/path/';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  const htmlPluginOption: HtmlPluginOptions = {
    favicon: '/favicon.ico',
    headScripts: [{ src: `/config/${isDev ? `dev` : `prod`}Config.js` }],
    style: ``,
  };
  return {
    plugins: [react({ jsxRuntime: 'classic' }), htmlPlugin(htmlPluginOption)],
    server: {
      open: true,
      port: 3210,
    },
    base: base,
  };
});
