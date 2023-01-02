const fs = require("fs");

async function write(path, content) {
  console.log("Writing file...");
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      fs.writeFile(path, content, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(console.log("* File created\n"));
        }
      });
    }, 1000);
  });
}

async function read(path) {
  console.log("Reading file...");
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      fs.readFile(path, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(console.log("* Read File:\n ", data.toString(), '\n'));
        }
      });
    }, 1000);
  });
}

async function remove(path) {
  console.log("Removing file...");
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      fs.unlink(path, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(console.log("* File removed\n"));
        }
      });
    }, 1000);
  });
}

// ------------------------------

async function main() {
  try {
    await write(__dirname + "/file.txt", "Hello World, this is a new File.");
    await read(__dirname + "/file.txt");
    await remove(__dirname + "/file.txt");
  } catch (error) {
    console.error("Error in process", error);
  }
  console.log("Finishing process.");
}

console.log("Starting process.\n");
main();
