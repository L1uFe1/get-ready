// console.log(1+5+6);

var http = require('http');
var server = http.createServer(function(req,res){
    //req  接到的请求   res 响应


    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    res.end('hello  东考');

});
server.listen(8080,'127.0.0.1',function(){
    console.log('running....');
})
