function otherFunction() {
  return brokenFunction();
}

function brokenFunction() {
  return 3 + z;
}

function brokenAsyncFunction(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error("Error in async function");
      cb(error);
    }
  });
}

try {
  //otherFunction();
  brokenAsyncFunction(function (err){
    console.error(err.message);
  });
} catch (error) {
  console.error("Error in process:", error.message);
}

console.log("Finishing process.");
