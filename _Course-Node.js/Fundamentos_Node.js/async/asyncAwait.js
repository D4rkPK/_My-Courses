// --- Async Await ---

async function hello(names) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("hello " + names);
      resolve(names);
    }, 1000);
  });
}

async function talk(names) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla...");
      resolve(names);
      //reject("Error in talk");
    }, 1000);
  });
}

async function bye(names) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bye " + names);
      resolve();
    }, 1000);
  });
}

// ----------------------------------------------

async function main() {
  let names = await hello("Brandon");
    await talk();
    await talk();
    await talk();
    await bye(names);
    console.log('Finishing process...');
}

console.log('Starting process...');
main();
console.log('Next instruction');

