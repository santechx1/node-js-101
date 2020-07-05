console.log(global);
console.log(setInterval);
let i = 0;
let interval = setInterval(() => {
    if (i === 3) {
        clearInterval(interval);
    }
    i++;
    console.log('Interval executed');
}, 1000);

setImmediate(function () {
    console.log('Immediate executed');
});

// require('')  <-- we use this to access any module

// console.log(process);
console.log(__dirname);
console.log(__filename);

// NOT RECOMMENDED!!!
global.myVar = 'some value';
console.log(myVar);




