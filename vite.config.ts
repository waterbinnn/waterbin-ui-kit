import { defineConfig } from 'vite';
import path, { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';
import dts from 'vite-plugin-dts';
import { globSync } from 'glob';
import tsconfigPaths from 'vite-tsconfig-paths';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    dts({ exclude: ['./src/stories'] }),
    tsconfigPaths(),
    libInjectCss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'index',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: Object.fromEntries(
        globSync([
          'src/components/**/index.ts',
          'src/hooks/**/index.ts',
          'src/context/**/index.ts',
          'src/index.ts',
        ]).map((file) => {
          const entryName = path.relative(
            'src',
            file.slice(0, file.length - path.extname(file).length)
          );
          const entryUrl = fileURLToPath(new URL(file, import.meta.url));
          return [entryName, entryUrl];
        })
      ),
      output: {
        entryFileNames: '[name].js',
        globals: {
          react: 'React',
          'react-dom': 'React-dom',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
    commonjsOptions: {
      esmExternals: ['react'],
    },
  },
});
