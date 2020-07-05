function setConfiguration(funcNumber) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(`Initializing configuration with function #${funcNumber}`);
            resolve(funcNumber);
        }, 2000);
    });
}

function removeConfiguration(funcNumber) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Removing configuration with function #${funcNumber}`);
            resolve(funcNumber);
        }, 1500);
    });
}

function funcExec(funcNumber) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Processing function #${funcNumber}...`);
            // resolve(funcNumber);
            reject('Runtime error');
        }, 1000);
    });
}

console.log('Starting process...');
setConfiguration(1)
    .then((funcNumber) => funcExec(++funcNumber))
    .then(removeConfiguration)
    .then(() => {
        console.log('Process finished...');
    })
    .catch(error => {
        console.error('Error encontrado');
        console.error(error);
    })
