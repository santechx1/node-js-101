const fs = require('fs');

const server = require('http').createServer();

server.on('request', (req, res) => {
    // Better approach
    const src = fs.createReadStream(`${__dirname}/big`);
    src.pipe(res);
});

server.listen(3000);