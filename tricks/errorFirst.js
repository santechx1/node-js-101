const { callbackify } = require("util");

function asyncFunc(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (error) {
            callback(error);
        }
    }, 1000);
}

try {
    asyncFunc(function (err, data) {
        // ERROR FIRST PATTERN IS VERY IMPORTANT IN ASYNC PROGRAMMING
        if (err) {
            console.error('Runtime error: ', err);
            return false;
            // throw err; // IN ASYNC FUNCTIONS 'THROW' DOESN'T WORK!!!
        }
        console.log('Everything is fine, data: ', data);
    });
} catch (error) {
    console.error('Error catched', error);
    
}
