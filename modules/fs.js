const fs = require('fs');

function read(route, cb) {
    fs.readFile(route, (err, data) => {
        cb(data.toString());
    })
}

function write(route, content, cb) {
    fs.writeFile(route, content, function (err) {
        if (err) {
            console.error(`Failed to write.`, err);
        } else {
            console.log('Successfuly writed to file.');
        }
    })
}

function deleteFile(route, cb) {
    fs.unlink(route, cb);
}

// read(`${__dirname}/file1.txt`, console.log);
// write(`${__dirname}/file1.txt`, 'I\'m a new file', console.log);
deleteFile(`${__dirname}/file1.txt`,console.log);
