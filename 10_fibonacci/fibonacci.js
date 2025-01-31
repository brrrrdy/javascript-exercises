const fibonacci = function(n) {
    n = parseInt(n);
    if (Math.sign(n) === -1) {
        return 'OOPS'; 
} else {
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let current = a + b;
        a = b;
        b = current;
    };
    return n === 0 ? a : b;
    };
};

// # Exercise 10 - Fibonacci

// Create a function that returns a specific member of the Fibonacci sequence:

// > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
// > In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
// > To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence

// ```javascript
// fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6); // returns 8
// ```

    // loop through string
    // add two values and check if
    // sum of two preceding numbers === number at the position of the loop
    // return value of the fibonacci number 

// Do not edit below this line
module.exports = fibonacci;
