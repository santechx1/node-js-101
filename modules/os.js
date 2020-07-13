const os = require('os');
console.log(os.arch());
console.log(os.platform());
console.log(os.cpus());
console.log(os.cpus().length);
console.log(os.constants);
const SIZE = 1024;
function kb(bytes) { return bytes / SIZE; }
function mb(bytes) { return kb(bytes) / SIZE; }
function gb(bytes) { return mb(bytes) / SIZE; }
console.log('freemem Bytes:',os.freemem());
console.log('freemem KBs:', kb(os.freemem()));
console.log('freemem MBs:', mb(os.freemem()));
console.log('freemem GBs:', gb(os.freemem()));
console.log('totalmem Bytes:',os.totalmem());
console.log('freemem KBs:', kb(os.totalmem()));
console.log('freemem MBs:', mb(os.totalmem()));
console.log('freemem GBs:', gb(os.totalmem()));
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.networkInterfaces());
console.log(os.networkInterfaces().eth0.map(i => i.address));
console.log(os.type());
console.log(os.release());
console.log(os.userInfo());














