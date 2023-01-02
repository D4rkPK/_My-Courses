function hello(names, myCallback) {
  setTimeout(function () {
    console.log("hello " + names);
    myCallback(names);
  }, 1000);
}

function bye(names, otherCallback) {
  setTimeout(function () {
    console.log("Bye " + names);
    otherCallback();
  }, 1000);
}

console.log("Starting process...");
hello("Brandon", function (names) {
  bye(names, function () {
    console.log("Finishing process...");
  });
});

