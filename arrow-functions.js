/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumbers(a, b) {
//     // Code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters (ES6 Arrow function syntex) with curley brases for more cpmplex functions

const addTwoNumbers = (a, b) => {
    // Code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => a + b; also valid 
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);


// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hey There!');
const sayHello = () => console.log('Hello!');
sayHello();

// Returning Multiple Lines
// Whenever an arrow function needs to return multiple lines of code, such as this one which
// returns a multi-line string, the parentheses mentioned in the implicit return function above are required.
// This goes for using an explicit return statement inside a set of curly braces, too.
// If you need to return multiple lines of code, you must wrap whatever comes after the return keyword in parentheses.

const multipleLines = () => (
    `<p>
    This is multipleline string!
    </p>`
)
console.log(multipleLines());

