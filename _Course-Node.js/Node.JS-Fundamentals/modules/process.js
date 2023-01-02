//const process = require("process");

process.on("beforeExit", () => {
  console.log("process will exit");
});

process.on("exit", () => {
  console.log("exit");
  setTimeout(() => {
    console.log("This will not run");
  }, 0);
});

setTimeout(() => {
  console.log("This will run");
}, 0);

process.on("uncaughtException", () => {
  console.error("error not captured");
  console.error(err.message);
});

/* functionNotExists();

console.log('this will not be printed'); */
