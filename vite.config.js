import path from 'path';
import liveReload from 'vite-plugin-live-reload';

export default {
  root: path.resolve(__dirname, 'src'),

  build: {
    outDir: path.resolve(__dirname, './dist'),
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, '/main.js'),
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: `[name].[ext]`
      }
    }
  }
}
