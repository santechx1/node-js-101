const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
if (cluster.isMaster) {
    let workerDicc = {};
    let numReqs = 0;
    setInterval(() => {
        console.log('numReqs by worker', workerDicc);
        console.log('numReqs total by worker', Object.values(workerDicc).length > 0 ? Object.values(workerDicc).reduce((acc = 0, num) => acc += num) : 0);
        console.log('numReqs', numReqs);
    }, 1000);

    // Count requests
    function messageHandler(msg) {
        if (msg) {
            workerDicc[msg.pid] = msg.total;
            numReqs++;
        }
    }
    console.log(`Master ${process.pid} is running. CPUs: ${numCPUs}`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    for (const id in cluster.workers) {
        cluster.workers[id].on('message', messageHandler);
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);

    });
} else {
    let counter = 0;
    http.Server((req, res) => {
        res.writeHead(200);
        res.end(`Hello world from worker ${process.pid}`);
        // Notify master about the request
        process.send({ pid: process.pid, total: counter++ });
    }).listen(8000);
    console.log(`Worker ${process.pid} started.`);
}

