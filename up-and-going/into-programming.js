let b = 0;
let a = 0;
const obj = { a: 'a' };

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

b * 2 // expression statement (more useful in call expression statement)

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

a = 2 // assignment operator
a + 2; a - 2; a / 2; a * 2; // Math operators
a += 2; a -= 2; a *= 2; a /= 2; // Compound operators (Math operator + assignment operator)
a++; a--; // Increment/Decrement operators
obj.a; obj["a"]; // Object property access (., [""])
a == 2; a === 2; a !== 2; a != 2; // Equality operators
a > 2; a < 2; a <= 2; a >= 2; // Comparison operators
a && b; a || b; // Logical operators, used to express compound contitionals

// ------------------------------------------------------------------------------

// Values and Types
// Types are representations for expressing values in programs

1; // nubmer
"string"; // string
true; // boolean

// Coercion
// Converting the value to another type
// JS provides several facilites for coercing

a = "42"; // "42"
b = Number(a); // 42

// Implicit coercion
a == b // JS transforms "42" to a number 42 == 42, thus giving true, this is loose equals (dosen't respect the type of variable)

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
a =  /* multi line, is defined and compiler will execute what is after its boundaries */ 42;
