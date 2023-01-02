function hello(names, myCallback) {
  setTimeout(function () {
    console.log("hello " + names);
    myCallback(names);
  }, 1000);
}

function talk(callbackTalk) {
  setTimeout(function () {
    console.log("Bla bla bla...");
    callbackTalk();
  }, 1000);
}

function bye(names, otherCallback) {
  setTimeout(function () {
    console.log("Bye " + names);
    otherCallback();
  }, 1000);
}

function conversation(names, times, callbackConversation) {
  if (times > 0) {
    talk(function () {
      conversation(names, --times, callbackConversation);
    });
  } else {
    bye(names, callbackConversation);
  }
}

// ----------------------------------------------

console.log("Starting process...");
hello("Brandon", function (names) {
    conversation(names, 3, function () {
        console.log("Finishing process...");
    });
});

// ----------------------------------------------

/* console.log("Starting process...");
hello("Brandon", function (names) {
  bye(names, function () {
    console.log("Finishing process...");
  });
}); */

// ----------------------------------------------

/* console.log("Starting process...");
hello("Brandon", function (names) {
  talk(function () {
    talk(function () {
      talk(function () {
        bye(names, function () {
          console.log("Finishing process...");
        });
      });
    });
  });
}); */
