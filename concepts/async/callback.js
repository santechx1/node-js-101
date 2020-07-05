function asyncFunc1(number, myCallback) {
    setTimeout(() => {
        console.log(`I\'m async function #${number}`);
        myCallback(number + 1);
    }, 2000);
}

function asyncFunc2(number, myCallback) {
    setTimeout(() => {
        console.log(`I\'m async function #${number}`);
        myCallback();
    }, 1000);
}

console.log('Starting process...');
asyncFunc1(1, function (number) {
    asyncFunc2(number, function () {
        console.log('Ending process...');
    })
});

