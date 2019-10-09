var http = require('http');
var fs = require('fs');

var handler = function(request, response) {
    response.writeHead(200, {
        'content-type': 'text/html;charset:utf-8'
    })
    response.write(fs.readFileSync('./index.html'));
    response.end();
}

var server = http.createServer(handler);

server.listen(3000, function() {
    console.log('server listen at http://localhost:3000');
});
