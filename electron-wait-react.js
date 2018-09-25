/* 
	Part of the dev environment - we want to use Foreman to run electron-create-app's start procedures 
	and then run electron. This will listen on the same port as the react app and launch Electron when it's ready
*/


const net = require('net');
const port = process.env.PORT ? (process.env.PORT - 100) : 5000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;
const tryConnection = () => client.connect({port: port}, () => {
        client.end();
        if(!startedElectron) {
            console.log('starting electron');
            startedElectron = true;
            const exec = require('child_process').exec;
            exec('npm run electron');
        }
    }
);

tryConnection();

client.on('error', (error) => {
    setTimeout(tryConnection, 1000);
});