const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://fitafhouse-api.herokuapp.com/',
      changeOrigin: true,
    })
  );
}