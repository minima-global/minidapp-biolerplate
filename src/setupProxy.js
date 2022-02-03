const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/minima',
        createProxyMiddleware({
            target: 'http://127.0.0.1:9002',
            changeOrigin: true,
            pathRewrite: function (path, req) {
                return path.replace('/minima', '');
            },
        })
    );
};
