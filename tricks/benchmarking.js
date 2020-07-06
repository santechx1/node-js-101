console.time('program');

let sum = 0;

console.time('bucle');
for (let index = 0; index < 1000000000; index++) {
    sum += 1;
}
console.timeEnd('bucle');


let sum2 = 0;

console.time('bucle 2');
for (let index = 0; index < 10000000; index++) {
    sum2 += 1;
}
console.timeEnd('bucle 2');

console.time('async');
console.log('Async process started');
asyncFunc()
    .then(() => console.timeEnd('async'));

console.timeEnd('program');

function asyncFunc(params) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Async process finished');
            resolve();
        });
    })
}
