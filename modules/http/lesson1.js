const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('New request');
    console.log(req.url);

    switch (req.url) {
        case '/hello':
            res.write('Hey!, How are you?');
            res.end();
            break;

        default:
            res.write('Error 404: Not found');
            res.end();
            break;
    }
    // res.writeHead(201, { 'Content-Type': 'text/plain' });
    // res.write('Hey!, I\'m here');
    // res.end();
}

console.log('Listening HTTP on port 3000');
