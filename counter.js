function createCounter() {
  let count = 0; // This variable is part of the lexical scope of createCounter

  return function() {
    // This inner function forms a closure
    console.log('Student Name: Thea Thaksin'); // Replace with your name
    count++;
    return count;
  };
}

// Create a counter instance
const counter = createCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3