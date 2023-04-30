const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(createProxyMiddleware('/api', { target: 'http://localhost:7030' }));
    // app.use(createProxyMiddleware('/api', { target: 'http://116.68.200.97:7030' }));
    // app.use(createProxyMiddleware('/reports', { target: 'http://127.0.0.1:7003/api/v1' }));
};
