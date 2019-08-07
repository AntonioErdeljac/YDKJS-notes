// Values & Types
// JS has typed values (8), not typed variables
// undefined, string, number, boolean, object, null, symbol (ES6), BigInt

var a; // undefined
a = "Hello"; // string
a = 42; // number
a = true; // boolean
a = null; // object (bug)
a = undefined; // undefined
a = {}; // object

typeof a; // asks for type of value in a, not type of variable a

// Objects
// Compound values with set properties (named locations) that each hold values of any type

var obj = {
  a: "hello",
  b: 42,
  c: true
};

obj.a; // Access to a property with dot notation
obj["a"]; // Access to a property with bracket notation

// Arrays
// Object subtype
// Object that holds values of any type in numerically indexed positions

var arr = ["hello", 1, true];

arr[0]; // "hello"
arr.length; // Automatically updated length property (Array is an object after all)

// Functions
// Object subtype

function a() {
  return 42;
}

a.bar = "foo";

typeof a; // function
typeof a(); // number
typeof a.bar; // string

// ------------------------------------------------------------------------------

// Built-In Type Methods
