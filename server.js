var http = require('http');
var port = 80;

http.createServer(function(req, res){
  var hostname = process.env.HOSTNAME;
  res.writeHead(200, { 'Content-Type': 'text/HTML' });
  var name = process.env.NAME || 'World';
  var body = 
    '<h1>Hello '+name+'</h1> \
     <p>This is a demo for <em>blue-green deployment</em></p> \
     <p>from server: '+hostname+'</p> \
     <p>Version: v2 \
     <hr><p>Adding some more test just for the fun of it</p>';
  res.end(body);
}).listen(port, function(){
  console.log('Server running at port ' + port);
});