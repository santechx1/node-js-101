const { exec, spawn } = require('child_process');
const { stdout, stderr } = require('process');
// const exec = require('child_process').exec;

// exec('node modules/console.js', (err,stdout, stderr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// });
let process1 = spawn('ls', ['-la']);

// console.log(process1);
console.log(process1.pid);
console.log(process1.connected);

process1.stdout.on('data', function (inf) {
    console.log(`Is process killed 1? ${process1.killed}`);
    console.log(inf.toString());
});

process1.on('exit', function () {
    console.log('Process finished');
    console.log(`Is process killed 2? ${process1.killed}`);
});

// process1.e();




