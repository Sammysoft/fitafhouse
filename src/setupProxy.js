const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://node-api-fitafhouse.onrender.com',
      changeOrigin: true,
    })
  );
}
