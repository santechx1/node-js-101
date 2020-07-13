const http = require('http');
let counter = 0;
for (let i = 0; i < 1000; i++) {
    http.get({
        hostname: 'localhost',
        port: 8000,
        path: '/',
    }, (res) => {
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
            counter++;
            console.log(rawData);
            console.log('total: ',counter);
        });
    });
}


