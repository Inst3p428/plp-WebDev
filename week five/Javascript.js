let playerName = "Eddy"; // Can change
const MAX_LEVEL = 10;    // Cannot change
var score = 0;           // Avoid using var in modern JS

//Primitive Data Types

//String: Text enclosed in quotes 
let greeting = "Hello, World!";

//Number: Any number, whether integer or floating-point
let age = 25;
let pi = 3.14;

//Boolean: Logical values true or false
let isRaining = false;

//Null: Explicitly means "nothing" or "empty."
let emptyValue = null;

//Non-Primitive Data Types

//Object: Complex structures for storing collections of data.

let user = { name: "Eddy", age: 25, role: "Developer" };

//Array: Ordered list of values
let colors = ["red", "blue", "green"];

//Arithmetic Operators
let a = 10, b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0 (remainder)

let x = 10;

// Add and assign
x += 5; // x = 15

// Multiply and assign
x *= 2; // x = 30

//Comparison Operators🧐
let num1 = 5;
let num2 = "5";

// Loose equality
console.log(num1 == num2); // true

// Strict equality
console.log(num1 === num2); // false

// Greater than
console.log(10 > 5); // true

//Logical Operator
let isAdult = true;
let hasID = false;

// Logical AND
console.log(isAdult && hasID); // false

// Logical OR
console.log(isAdult || hasID); // true

// Logical NOT
console.log(!isAdult); // false

//String Operators 🧵
console.log(typeof "Hello"); // string
console.log([] instanceof Array); // true

//Comma Operator
let numx = (2, 3); // x is 3
console.log(numx);

//Nullish Coalescing Operator (??)
let name = null;
let defaultName = name ?? "Guest";
console.log(defaultName); // Guest

//Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  console.log(greet("Eddy")); // Hello, Eddy!

//Function Expression
const add = function(a, b) {
    return a + b;
  };
  
  console.log(add(3, 4)); // 7

//Arrow Functions
//Basic Arrow Function

const multiply = (a, b) => a * b; console.log(multiply(2, 3)); // 6

//Single Parameter (Parentheses Optional)

const square = x => x * x; console.log(square(4)); // 16

//No Parameters

const greet = () => "Hello, World!"; console.log(greet()); // Hello, World!

//Multiple Statements (use {} and return)

const calculate = (a, b) => { const sum = a + b; return sum * 2; }; console.log(calculate(3, 5)); // 16

//Parameters and Arguments
//Parameters: Variables listed in the function definition.
//Arguments: Values passed to the function when it's called.

function greetUser(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}
console.log(greetUser("Eddy", "Lugaye")); // Hello, Eddy Lugaye!