const cluster = require('cluster');
const os = require('os');

const PID = process.pid;

const runProc = (proc) => {
    if (cluster.isMaster) {
        const howManyCPUs = os.cpus().length;
        console.log(`langth of CPUs : ${howManyCPUs}`);
        console.log(`langth of choose CPUs : ${proc}`);
        console.log(`PID master : ${PID}`);
        for (let i = 0; i < proc - 1; i++) {
            const worker = cluster.fork();
        }
        cluster.on('exit', (worker, code) => {
            console.log(`worker died, pid : ${worker.process.pid}, code : ${code}`);
            cluster.fork();
        });
    } else if (cluster.isWorker) {
        require('./basic');
    }
}

exports.module = runProc