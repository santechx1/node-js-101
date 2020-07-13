// %s string
// %d number
// %j json

// node console uses util.format() to make this possible
console.log('A %s and a %s', 'dog', 'cat'); 
// in a web browser this prints an info message, in node this is just an alias for "log"
console.info('Hello world!');
// in a web browser this prints a warning message, in node this is just an alias for "error"
console.warn('Hello error!');
// this prints an "assertion failed" message
console.assert(42 === '42');
// is more specific than log
console.trace('Hello trace');

// to see this you have to specify the debugging environment with "NODE_DEBUG=test"
const util = require('util');
const debuglog = util.debuglog('test');
debuglog('Hello from test');

