const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/api/**", {
      target: 'http://localhost:9090',
      headers: {
        Connection: "keep-alive",
      },
    })
  );
};
