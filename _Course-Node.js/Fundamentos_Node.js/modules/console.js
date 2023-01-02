console.log("something");
console.info("something");
console.warn("something");
console.error("something");


// ------------------------------
var table = [
  {
    a: 1,
    b: "Z",
  },
  {
    a: 2,
    b: "other",
  },
];

console.table(table);


// ------------------------------
console.group("Conversation:");
console.log("Hello");
console.group("bla:");
console.log("bla bla bla");
console.log("bla bla bla");
console.log("bla bla bla");
console.groupEnd("bla:");
console.log("bye");
console.groupEnd("Conversation:");

console.log("other Function");


// ------------------------------
function function1(){
    console.group("function1");
    console.log("Hello function1");
    console.log("This is function1");
    console.log("This is function1");
    function2();
    console.log("This is function1 again");
    console.groupEnd("function1");
}
function function2(){
    console.group("function2");
    console.log("Hello function2");
    console.log("This is function2");
    console.groupEnd("function2");
}

console.log('init');
function1();


// ------------------------------
console.count("Times");
console.count("Times");
console.count("Times");
console.countReset("Times");
console.count("Times");
