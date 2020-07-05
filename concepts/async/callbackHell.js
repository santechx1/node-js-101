function setConfiguration(funcNumber, callback) {
    setTimeout(() => {
        console.log(`Initializing configuration with function #${funcNumber}`);
        callback(funcNumber);
    }, 2000);
}

function removeConfiguration(funcNumber, callback) {
    setTimeout(() => {
        console.log(`Removing configuration with function #${funcNumber}`);
        callback();
    }, 1500);
}

function funcExec(funcNumber, callback) {
    setTimeout(() => {
        console.log(`Processing function #${funcNumber}...`);
        callback();
    }, 1000);
}

// CALLBACK HELL!!!
// setConfiguration(1, function (funcNumber) {
//     funcExec(funcNumber, function () {
//         funcExec(++funcNumber, function () {
//             funcExec(++funcNumber, function () {
//                 funcExec(++funcNumber, function () {
//                     removeConfiguration(++funcNumber, function () {
//                         console.log('Process finished...');
//                     })
//                 })
//             })
//         })
//     })
// })



// BETTER APPROACH TO AVOID CALLBACK HELL

function callFunctions(numberOfFunctions, callback) {
    if (numberOfFunctions < 5) {
        funcExec(numberOfFunctions, function () {
            callFunctions(++numberOfFunctions, callback);
        })

    } else {
        removeConfiguration(numberOfFunctions, callback);
    }
}

console.log('Process started...');
setConfiguration(1, function (funcNumber) {
    callFunctions(funcNumber, function () {
        console.log('Process finished...');
    });
});


