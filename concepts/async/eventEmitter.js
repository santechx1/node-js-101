const EventEmitter = require('events');

class Logger extends EventEmitter {
    execute(cb) {
        console.log('Before');
        this.emit('start');
        cb();
        this.emit('finish');
        console.log('After');
    }
}

const logger = new Logger();
logger.on('start' , () => console.log('Starting'));
logger.on('finish' , () => console.log('Finishing'));
logger.on('finish' , () => console.log('It\'s done'));

logger.execute(()=> console.log('Hello world'));
logger.execute(()=> setTimeout(() => console.log('Hello world')));
