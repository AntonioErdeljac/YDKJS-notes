let b = 0;
let a = 0;
const obj = { a: "a" };

// ------------------------------------------------------------------------------

// Statements
// Group of words, numbers/operators that perform a task

a = b * 2;

// a, b -> variables
// 2 -> literal value
// =, *  -> operators, perform actions such as assignment or mathematical operations
// a = b * 2 -> Get the current value of b, multiply by 2, store in a

// ------------------------------------------------------------------------------

// Expressions
// Reference to a variable/value, or set of the same combined with operators

a = b * 2;

// 2 -> lieteral value expression
// b -> variable expression (get the value of b)
// b * 2 -> arithmetic expression (do the multiplication by 2 on value from b)
// a = b * 2 -> assignment expression (assign the result of b * 2 to a)

b * 2; // expression statement (more useful in call expression statement)

// ------------------------------------------------------------------------------

// Executing a program
// Done by interpreter or a compiler to translate the code for computer
// Interpreting the code -> top to bottom, line by line
// Compiling the code -> translation is done ahead of time, compiled instructions ready to go
// JS engine compiles on the fly & runs the compiled code

// ------------------------------------------------------------------------------

// Operators
// Actions that perform on variables and values

// * -> mathematic multiplication
// = -> (target variable) = (source value), used for assignment, source value is calculated first, and then put into target variable

a = 2; // assign 2 value to a variable
b = a + 1; // get the value of a, add 1 to it, assign it to b

a = 2; // assignment operator
a + 2;
a - 2;
a / 2;
a * 2; // Math operators
a += 2;
a -= 2;
a *= 2;
a /= 2; // Compound operators (Math operator + assignment operator)
a++;
a--; // Increment/Decrement operators
obj.a;
obj["a"]; // Object property access (., [""])
a == 2;
a === 2;
a !== 2;
a != 2; // Equality operators
a > 2;
a < 2;
a <= 2;
a >= 2; // Comparison operators
a && b;
a || b; // Logical operators, used to express compound contitionals

// ------------------------------------------------------------------------------

// Values and Types
// Types are representations for expressing values in programs

1; // nubmer
("string"); // string
true; // boolean

// Coercion
// Converting the value to another type
// JS provides several facilites for coercing

a = "42"; // "42"
b = Number(a); // 42

// Implicit coercion
a == b; // JS transforms "42" to a number 42 == 42, thus giving true, this is loose equals (dosen't respect the type of variable)

// ------------------------------------------------------------------------------

// Code Comments
// Always ignored by the compiler

// Single line comment
/*
  Multi
  Line
  Comment
*/

a = 42; // single line comment, nothing after this in this line will compile
a = /* multi line, is defined and compiler will execute what is after its boundaries */ 42;

// ------------------------------------------------------------------------------

// Variables
// Container for assigning values
// Called a variable because it can vary over time
// Used to track a value over course of running the program
// Static Typing - declaring the type of value in variable
// Dynamic Typing - allows a variable to hold any type of data, interchangeable
// JS is dynamicly typed

var amount = 99.99; // typeof Number

amount = amount * 2; // 199.98 typeof Number

amount = "$" + String(amount); // "$199.8"; typeof String

const TAX_RATE = 0.08; // centralized value setting, value that is not meant to change any time

amount.toFixed(2); // Object property access, toFixed is available as property in typeof Number

// ------------------------------------------------------------------------------

// Blocks
// One or more statements wrapped inside {}

var amount = 99.99;

{
  amount = amount * 2; // 199.98
}

// Commonly attached to a control statement (if, for)

var amount = 99.99;

if (amount > 10) {
  amount = amount * 2; // 199.98
}

// Block statement does not need a semicolon to conclude it

// ------------------------------------------------------------------------------

// Conditionals
// If condition is true, do the following (decisions)

var bankAccount = 10;
var amount = 9;

if (bankAccount >= amount) {
  // Conditional else clause
  console.log("I want to buy!");
} else {
  // Alternative else clause
  console.log("No thanks");
}

// ------------------------------------------------------------------------------

// Loops
// Repeating a set of actions until specified condition fails
// Each execution of block is called an iteration

while (numberOfCustomers < 10) {
  // conditional is tested before the first iteration
  console.log("Hello!");

  numberOfCustomers += 1;
}

do {
  // conditional is tested after the first iteration
  console.log("Hello!");

  numberOfCustomers -= 1;
} while (numberOfCustomers > 0);

// Breaking the infinite loop

var i = 0;

while (true) {
  if (i <= 9) {
    break;
  }

  i += 1;
}

// For loop

for (let i = 0; i < 9; i += 1) {
  // 3 clauses: conditional (i < 9), initialization (i = 0), update (i += 1)
  console.log(i);
}

// ------------------------------------------------------------------------------

// Functions
// Used for defining a task and running it over and over again
// Named section of a code, called by name, executed each time its called

function printAmount() {
  console.log(amount.toFixed(2));
}

var amount = 99.99;
printAmount(); // 99.99

amount = amount * 2;
printAmount(); // 199.98

// Function arguments/parameters

function printAmountParam(amount) {
  console.log(amount.toFixed(2));
}

function formatAmount() {
  // This function returns a value back after its called
  return "$" + amount.toFixed(2);
}

var amount = 99.99;
printAmountParam(amount * 2); // 199.98;

var amount = formatAmount(); // $99.99;

// Functions can also be used to organize bits of code into named collections

const TAX_RATE = 0.08;
function finalPurchaseAmount(amount) {
  amount = amount + amount * TAX_RATE;

  return amount.toFixed(2);
}

var amount = 99.99;

amount = finalPurchaseAmount(amount); // 107.99

// ------------------------------------------------------------------------------

// Scope
// Also called lexical scope, scope is a collection of variables & rules to how they are accesed by name
// Only code inside that function can access that function's scoped variables
// Same variable name can appear in different scopes, but not in the same

function one() {
  var a = 1; // belongs to one() function scope

  return a;
}

function two() {
  var a = 2; // belongs to two() function scope

  return a;
}

one(); // 1
two(); // 2

// Nesting scopes

function outer() {
  var a = 1;

  function inner() {
    var b = 2;

    return a + b; // inner scope has access to both its outer and inner scope, since it is a part of both
  }

  inner();

  return a; // outer scope cannot access the inner scope, since it is only a part of itself
}

outer();

// Lexical scope rule: code in one scope can access variables of its own scope, or any scope (it is a part of) outside of it
