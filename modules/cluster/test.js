const { isNumber } = require("util");
const { log } = require("console");

let dicc = {};
for (let i = 0; i < 5; i++) {

    dicc[1] = typeof dicc[1] === 'number' ?  dicc[1]+1 : 0;
}
 

