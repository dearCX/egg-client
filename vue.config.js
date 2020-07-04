module.exports = {
  devServer: {
    proxy: {
      '/article': {
        target: 'http://127.0.0.1:7001',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
