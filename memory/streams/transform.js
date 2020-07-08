const { Transform } = require('stream');

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

const transformStream2 = new Transform({
    transform(chunk, encoding, callback) {
        let stdinStrArr = chunk.toString().split(' ');
        let modifiedStrArr = stdinStrArr.map(el => el.charAt(0).toUpperCase() + el.substring(1));
        let result = modifiedStrArr.reduce((str, item) => str.concat(item));
        this.push(result);
        callback();
    }
});

process.stdin.pipe(transformStream2).pipe(process.stdout);