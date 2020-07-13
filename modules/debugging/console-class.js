const fs = require('fs');

const out = fs.createWriteStream('./modules/debugging/out.log');
const err = fs.createWriteStream('./modules/debugging/err.log');

const consoleFile = new console.Console(out, err);
setInterval(() => {
    consoleFile.log(new Date());
    consoleFile.error(new Error('New error!'));
}, 2000);