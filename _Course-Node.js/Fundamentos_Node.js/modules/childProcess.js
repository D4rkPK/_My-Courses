const { exec, spawn } = require("child_process");

exec("node Fundamentos_Node.js/modules/console.js", (err, stdout, sterr) => {
  if (err) {
    console.error("Error executing command", err.message);
    return false;
  }
  //console.log(stdout);
});

let process = spawn("ls", ["-la"]);
console.log('spawn', process.connected);

process.stdout.on('data', (data) => {
    console.log('dead?', process.killed);
    console.log('data', data.toString());
});

process.on('exit', () => {
    console.log('exit');
    console.log('dead?', process.killed);
});