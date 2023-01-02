function hello(names) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("hello " + names);
      resolve(names);
    }, 1000);
  });
}

function talk(names) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla...");
      resolve(names);
      //reject("Error in talk");
    }, 1000);
  });
}

function bye(names) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bye " + names);
      resolve();
    }, 1000);
  });
}

// ----------------------------------------------

console.log("Starting process...");
hello("Brandon")
  .then(talk)
  .then(talk)
  .then(talk)
  .then(talk)
  .then(bye)
  .then((names) => {
    console.log("Process finished");
  })
  .catch((error) => {
    console.error("Error in process", error);
  });
