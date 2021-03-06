// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const name = "Rachel";
function greetStranger() {
  return `Hello, nice to meet you. My name's ${name}.`;
}
console.log(greetStranger());


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  return function() {
    return count++;
  };
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();
console.log(newCounter()); 
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());



/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.


 
  let counter = {
  count: 0,
  increment: function()  {
    return this.count++;
  },

  decrement: function() {
    return this.count--;
  }
  }
  return counter;
}
 
const counting = counterFactory();

console.log(counting.increment());
console.log(counting.increment());
console.log(counting.increment());
console.log(counting.increment());
console.log(counting.decrement());
console.log(counting.decrement());
console.log(counting.increment());
console.log(counting.increment());


