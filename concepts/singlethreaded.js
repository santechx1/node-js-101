console.log('Hello world');

let i = 0;

setInterval(() => {
    console.log(i);
    i++;
    if (i === 5) {
        console.log('forced error');
        var a = 3 + z;
    }
}, 1000);

console.log('Hello world again');

