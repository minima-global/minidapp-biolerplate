var express = require('express');
var path = require('path');
var proxy = require('express-http-proxy');

var app = express();

app.use(
    '/minima',
    proxy('http://127.0.0.1:9002', {
        proxyReqPathResolver: function (req) {
            return req.url.replace('/minima', '');
        },
    })
);

app.use(express.json());
const router = express.Router();

/// serve static website
app.use('/', express.static(path.join(__dirname, 'build')));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
    response.sendFile(path.resolve(path.join(__dirname, 'build'), 'index.html'));
});

app.listen(8000, function () {
    console.log('listening on port 8000');
});
