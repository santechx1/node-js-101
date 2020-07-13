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

read(`${__dirname}/file1.txt`, console.log);
write(`${__dirname}/file1.txt`, 'I\'m a new file', console.log);
deleteFile(`${__dirname}/file1.txt`,console.log);

/** SYNC */
try {
    const file = process.argv[2];
    const content = fs.readFileSync(file).toString();

    const lines = content.split('\n').length;
    console.log(lines);

} catch (error) {
    console.log(error);

}

/** ASYNC */

const file = process.argv[2];

if (!file) {
    throw new Error('File not found!');
}
fs.readFile(file, function (err, content) {
    if (err) {
        return console.log(err);
    }
    const lines = content.toString().split('\n').length;
    console.log(lines);
});

/** DIRECTORIES */

const files = fs.readdir(__dirname, function (err, files) {
    if (err) {
        return console.log(err);
    }
    return console.log(files);
});

fs.mkdir('test/test1/test2', { recursive: true }, err => {
    if (err) {
        console.log(err);
    }
});

fs.copyFile(`modules/orange.txt`, 'orange2.txt', err => {
    if (err) {
        return console.log(err);
    }
    return console.log('file copied');
});
