console.time("All");
let plus = 0;

console.time("Time");
for (let i = 0; i < 100000000; i++) {
  plus += 1;
}
console.timeEnd("Time");

// ------------------------------

let plus2 = 0;
console.time("Time2");
for (let j = 0; j < 10000000000; j++) {
  plus2 += j;
}
console.timeEnd("Time2");
console.timeEnd("All");



console.time("asyncFunc");
function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async Hello World");
    }, 16);
  });
}
console.timeEnd("asyncFunc");
