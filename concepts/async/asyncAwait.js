async function setConfiguration(funcNumber) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(`Initializing configuration with function #${funcNumber}`);
            resolve(funcNumber);
        }, 2000);
    });
}

async function removeConfiguration(funcNumber) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Removing configuration with function #${funcNumber}`);
            resolve(funcNumber);
        }, 1500);
    });
}

async function funcExec(funcNumber) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Processing function #${funcNumber}...`);
            resolve(funcNumber);
            // reject('Runtime error');
        }, 1000);
    });
}

console.log('Process starting...');
(async () => {
    let number = await setConfiguration(1);
    await funcExec(number);
    await funcExec(++number);
    await funcExec(++number);
    await funcExec(++number);
    await removeConfiguration(++number);
    console.log('Process finished...');
})();
console.log('Process is still starting...');

