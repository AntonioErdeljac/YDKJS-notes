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

var a = "Hello world";
var b = 3.14734;

a.length;
a.toUpperCase();
a.toFixed(4);

// length, toUpperCase & toFixed are defined in String/Number/Boolean object wrapper prototype
// when accessing any of these methods & properties, JS Automatically "boxes" the primitive value into its respective object wrapper form (under the hood)

// ------------------------------------------------------------------------------

// Comparing Values
// Equality or Inequality
// Result of any comparison is strictly a boolean value (true/false), regardless of comparison value types

// Coerction
// Two forms: inplicit & explicit
// Inplicit - non obvious type conversion (happens by doing something else)
// Explicit - obvious type conversion

// Explicit
var a = "42";
var b = Number(a);

a; // "42"
b; // 42

// Implicit
var a = "42";
var b = a * 1; // implicitly coerces to number

a; // "42"
b; // 42

// Truthy & Falsy

// falsy values:
var a = "";
var a = 0;
var a = -0;
var a = NaN;
var a = null;
var a = undefined;
var a = false;

// When any "falsy" value is coerced to a boolean it will become false, anything other will become true (including [], {} & () => {})

// Equality
// ==, !=, ===, !==
// non-equality (!) should not be confused with inequality

// Difference between === & ==

var a = "42";
var b = 42;

a == b; // true, == operator checks for value equality with coercion
// coerces to 42 == 42

a === b; // false, === operator checks for value equality without coercion  (strict equality)
