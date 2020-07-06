process.on('beforeExit', () => {
    console.log('Process is about to finish');
    setTimeout(() => {
     console.log('This works');
    }, 2000);
});

process.on('exit', () => {
    // Here async calls won't be executed
    setTimeout(() => {
        console.log('This won\'t execute');
    }, 0);
    console.log('This will execute on exit');
    console.log('Process finished');
});
setTimeout(() => {
    console.log('This will execute normally');
}, 0);

process.on('uncaughtException', (err, origin) => {
    console.log('Error excecuted');
    console.error(err);
    setTimeout(() => {
        console.log('This comes from an exception');
    }, 0);
});
// Promises
// process.on('uncaughtRejection', () => {

// })

// errorFunc();
// console.log('If error is not caught this won\'t execute');
