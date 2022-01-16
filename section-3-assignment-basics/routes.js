
const manageRequest = (request, response) => {
    const url = request.url;
    const method = request.method;
    if(url === '/'){
        response.write('<!DOCTYPE html><head><title>Test Node WEBApp</title></head><body><header><h1>Welcome to node JS</h1></header><main><form action="/create-user" method="POST"><fieldset><input type="text" name="username"><button type="submit">Send</button></fieldset></form></main></body></html>');
        return response.end();
    }
    if(url === '/users'){
        response.write('<!DOCTYPE html><head><title>Test Node WEBApp</title></head><body><header><nav><ul><li>User 1</li><li>Admin</li></ul></nav></header></body></html>');
        return response.end();
    }
    if(url === '/create-user' && method === 'POST'){
        const io = [];
        request.on('data',(chunk) => {
            io.push(chunk);
        });


        request.on('end',() => {
            const parsedIO = Buffer.concat(io).toString();
            const resultIO = parsedIO.split('=')[1];
            console.log(resultIO);
            response.statusCode = 302;
            
            response.setHeader('Location','/users');
            response.end();
        });
        // console.log("SIUUUUU!");
        // return response.end();
    }
}







module.exports = manageRequest;