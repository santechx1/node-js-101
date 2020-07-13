const util = require('util');

const helloPluto = util.deprecate(() => {
    console.log('Hello Pluto');
    
}, 'Pluto is deprecated. It is not aplanet anymore.');

helloPluto();