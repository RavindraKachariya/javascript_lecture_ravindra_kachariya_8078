// JavaScript Functions, Function Expressions, Callbacks & Timing Functions

// 1. Normal Function
function sayHello() {
    console.log("Hello World!!!");
}
sayHello();

// 2. Function Expression
let showPi = function () {
    console.log(Math.PI);
}
showPi();

// 3. Callback Function
function greet(cb) {
    console.log("Hello World!!");
    cb(); // calling another function
}

function add() {
    console.log(10 + 20);
}

greet(add);

// 4. setTimeout() → runs after given delay
function showMsg() {
    console.log("Hello Javascript!!");
}

let t1 = setTimeout(showMsg, 3000);
console.log(t1);
console.log("setTimeout Function");

// 5. Recursive setTimeout → keeps running like a clock
function showTime() {
    let now = new Date();
    let time = now.toLocaleTimeString();
    console.log(time);
    setTimeout(showTime, 1000); // recalls itself
}

showTime();

// 6. clearTimeout() → cancel a timeout before execution
let num = 0;

function countUp() {
    num += 1;
    console.log(num);
}

let t2 = setTimeout(countUp, 2000);
clearTimeout(t2);
console.log("stop timing function");

// 7. setInterval() → runs repeatedly until stopped
function sayHi() {
    console.log("Hello");
}

let t3 = setInterval(sayHi, 2000);
console.log(t3);

// To stop setInterval: clearInterval(t3);
