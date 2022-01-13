const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url, request.method, request.headers);
    response.setHeader('Content-type','text/html');
    response.write('<html>');
    response.write('<head><title>My first Page</title></head>') ;
    response.write('<body><span>Hello World!</span></body>'); 
    response.write('</html>');
})
    
server.listen(3000);