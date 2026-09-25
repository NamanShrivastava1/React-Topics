let obj = {
    name: "Naman",
};

function sayHello(age) {
    console.log(`Hello ${this.name} is ${age}`);
}

// Call
// console.log(sayHello.call(obj, 22));
// If we pass multiple arguments we have to send using separated commas


function sayHello(age, profession) {
    console.log(`Hello ${this.name} is ${age} and is an ${profession}`);
}

// Apply
// console.log(sayHello.apply(obj, [22, "SDE"]));
// It is same as Call but the arguments need to pass in an array


function sayHello(age, profession) {
    console.log(`Hello ${this.name} is ${age} and is an ${profession}`);
}

// Bind
const bindFunc = sayHello.bind(obj); 
console.log(bindFunc(22, "SDE"))
console.log(bindFunc(23, "DevOps"))
console.log(bindFunc(24, "SDE-2"))