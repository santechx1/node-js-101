const { Duplex } = require('stream');
const { read } = require('fs');

const duplexStream = new Duplex({
    write(chunk, enconding, callback) {
        console.log(chunk.toString());
        callback();
    },
    read(size) {
        if (this.currentCharCode > 90) {
            this.push(null);
            return;
        }
        this.push(String.fromCharCode(this.currentCharCode++));
    }
});

duplexStream.currentCharCode = process.stdin;

process.stdin.pipe(duplexStream).pipe(process.stdout);