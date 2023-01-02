function asyncFunc() {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (err) {
      callback(err);
    }
  }, 1000);
}

asyncFunc((err, data) => {
  if (err) {
    console.log("ERROR; ", err);
    return false;
  } else {
    console.log(data);
  }
});
