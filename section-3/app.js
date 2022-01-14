const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;
    if(url === '/'){
        response.write('<html>');
    response.write('<head><title>Enter Message</title></head>') ;
    response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'); 
    response.write('</html>');
    return response.end();
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        request.on('da',(chunk) => {
            body.push(chunk);

        });
        fs.writeFileSync('message.txt','DUMMY');
        response.statusCode = 302;
        response.setHeader('Location','/');
        return response.end();
    }
    console.log(request.url, request.method, request.headers);
    response.setHeader('Content-type','text/html');
    response.write('<html>');
    response.write('<head><title>My first Page</title></head>') ;
    response.write('<body><span>Hello World!</span></body>'); 
    response.write('</html>');
    response.end();
})
    
server.listen(3000);