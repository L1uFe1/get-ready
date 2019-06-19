var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' });

    if (req.url == '/favicon.ico') {
        return;
    }
    //req  接到的请求   res 响应
    
    // console.log(req.url);
    var url_ = url.parse(req.url,true);
    console.log(url_);

    if(url_.pathname == '/login'){
        
        res.end('用户名：'+url_.query.username);
    }else{
        res.end('hello  东考');
    }


});
server.listen(8080, '127.0.0.1', function () {
    console.log('running....');
})
