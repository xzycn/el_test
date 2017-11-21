var childProcess = require('child_process');
let createProc = () => {
    let sp = childProcess.spawn(process.execPath,['./go.js']);
    sp.unref();
    sp.on('error', (err) => {
        console.log('failed to start process',err);
    });
    sp.on('exit',(code, signal)=>{
        console.log(`child process exited with code ${code}`);
        createProc();
    });
    sp.stdout.on('data', (data) => {
        console.log(data.toString());
    });
}

createProc();
