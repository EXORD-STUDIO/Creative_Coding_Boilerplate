import path from 'path'

export default {
  root: path.resolve(__dirname, 'app'),
  build: {
    outDir: path.resolve(__dirname, 'public/dist'),
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'app/main.js'),
        index: path.resolve(__dirname, 'styles/index.scss'),
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: `[name].[ext]`
      }
    }
  }
}
