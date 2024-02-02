import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    copyPublicDir: false,
    emptyOutDir: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: 'lib/main.ts',
      formats: ['es'],
      fileName: 'index',
      name: 'React Mouse Tooltip',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
    },
    outDir: 'dist',
  },
});
