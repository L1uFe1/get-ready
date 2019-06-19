var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {

    if (req.url == '/favicon.ico') {
        return;
    }
    //req  接到的请求   res 响应
    console.log(req.url);
    var url_ = url.parse(req.url);
    console.log(url_.path);




    res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' });
    res.end('hello  东考');

});
server.listen(8080, '127.0.0.1', function () {
    console.log('running....');
})
