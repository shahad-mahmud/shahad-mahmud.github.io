---
title: "Basic JavaScript Notes"
categories: notes
tags: front-end js
---

## Data types and variables

- JavaScript provides eight different *data types* which are `undefined`,  `null`,  `boolean` (`true` and `false`),   `string`, `symbol`,  `bigint`,  `number`, and `object`.
- Variables allow computers to store and manipulate data in a ***dynamic*** fashion.
- Declare a variable by putting the keyword `var` like `var name = "Jon Doe"`. A variable can be declared using the `let` and `const` keywords also.
- When JavaScript variables are declared, they have an initial value of `undefined`. If you do a mathematical operation on an `undefined` variable your result will be `NaN` which means *"Not a Number"*. If you concatenate a string with an `undefined` variable, you will get a *string* of `undefined`.
- In JavaScript all variables and function names are case sensitive.
- Like python string can be written using both single or double quotes.

### `var` vs `let` vs `const`

- Using `var` a variable can be re-declared multiple times.
- Unlike `var`, when using `let`, a variable with the same name can be declared once only. But the variable can be reassigned multiple times.
- Variables declared using `const` can only be declared once and are read-only. These cannot be reassigned.


> ⌨️ Write variable names in JavaScript in *camelCase*. In *camelCase*, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.


> ⌨️ It is common to use UPPERCASE variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays).

## Operators

JS supports all basic kind of operators. Some of the operators are listed below:

| Operator | Purpose | Example |
| --- | --- | --- |
| `++` | increment by 1 | `i++;` |
| `--` | decrement by 1 | `i--;` |
| `+=` | Addition and assign | `a += 1` |
| `-=` | Subtraction and assign | `a -= 1` |
| `*=` | Multiply and assign | `a *= `8 |
| `/=` | Divide and assign | `a /= 4` |
| `\` | Escapes certain characters. | `"he said, \"I love cricket\""` |
| `==` | Equality operator. Checks if two items are equal. Data type invariant. | `1 == 1  // true` also `1 == '1'  // true` |
| `===` | Strict equality, i.e. types of the comparing items must be same. | `1 === 1  // true` but `1 === '1'  // false` |
| `!= `| Inequality operator. true when two items are not equal. | `1 != 2  // true` |
| `!==` | Strict inequality operator. | `1 !== '1'  // true` |
| `>` | Greater than operator. Not strict. | `4 > '2'  // true` |
| `>=` | Greater than or equal operator. Not strict.  | `4 >= '4'  // true` |
| `<` | Less than operator. Not strict. | `1 < '2'  // true` |
| `<=` | Less than or equal operator. Not strict. | `4 <= '4'  // true` |
| `&&` | Logical and operator. |  |
| `||` | Logical or operator. |  |
| `typeof` | Returns the type of a variable. | `typeof "Jon"` |
| `a ? b : c` | Ternary operator. | `a > b ? "a is greater" : "b is greater"` |


> 📌 If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.


## Type Coercion

In order for JavaScript to compare two different *data types* (for example, `numbers` and `strings`), it must convert one type to another. This is known as Type Coercion.

```jsx
1   ==  1  // true
5   ==  2  // false
4   == '4' // true
"3" ==  3  // true
```

## String operations

- In JavaScript, String values are **immutable**. But a string literal can be reassigned.

```jsx
let firstName = "Jon";
firstName[0] = "F";  // not permissable. [mutation]

firstName = "Fon"  // permissable. [reassignment]
```

- **Concatenation:** `+` is used as the concatenation operator. Example:

```jsx
let firstName = "Jon";
let lastName= "Doe";

let fullName = firstName + " " + lastName;  // string concatenation
console.log(fullName)
// >>> Jon Doe
```

- The `+=` operator can be used to concatenate and assign strings.
- We can find the length of a `String` value by writing `.length` after the string variable or string literal.

## Array

- Using `array` variables, we can store several pieces of data in one place.
- Uses zero based indexing.
- Arrays are mutable.
- An array can take values of different data types like `arr = ["Nice", 17]` contains both sting and number.
- Nested arrays are called multi-dimensional array.

### Array methods and properties

| Method | Purpose | Example |
| --- | --- | --- |
| `push()` | Adds one or more items to the end. | `arr.push(4, 5, 6);` |
| `pop()` | Removes and returns the last element. | `arr.pop()` |
| `shift()` | Removes and returns the first element. | `arr.shift()` |
| `unshift()` | Adds one or more items at the beginning. | `arr.unshift(1, 2, 3)` |
| `toString()` | Converts array to comma separated string | `arr.toString()` |
| `length` | Returns the length of the array | `arr.length` |

## Functions

- A function can be declared using the keyword `function` with the following syntax:

```jsx
function myAwesomeFunction (arg1, arg2) {
	// some awesome things here
	return SOMETHING;
}
```

- A function can include the `return` statement but it does not have to.
- When a function does not have a `return` statement, it returns `undefined` as the value.

## Scopes

- Scope refers to the visibility of variables.
- Variables which are defined outside of a function block have *Global* scope.
- Variables which are declared within a function, as well as the function parameters, have *Local* scope.
- Variables which are declared without the `var`, `let` or `const` keywords are automatically created in the `global` scope.

```jsx
let myGlobal = 10;  // global

function func() {
	var myLocal = 100;  // local
  oopsGlobal = 5;  // global
}
```

- It is possible to have both *local* and *global* variables with the same name. When we do this, the local variable takes precedence over the global variable.

## Conditional statements

### `if/else` statements

```jsx
if (CONDITION) {
	// do something
} else if (ANOTHER CONDITION) {
	// do something else
} else {
	// do other things
}
```

### `switch` statements

If we need to match one value against many options, we can use a *switch* statement. A `switch` statement compares the value to the *case* statements which define various possible values. Any valid JavaScript statements can be executed inside a *case* block and will run from the first matched `case` value until a `break` is encountered.

In a `switch` statement we may not be able to specify all possible values as `case` statements. Instead, we can add the `default` statement which will be executed if no matching `case` statements are found.

`case` values are tested with strict equality (`===`). The `break` tells JavaScript to stop executing statements. If the `break` is omitted, the next statement will be executed.

```jsx
switch (VALUE) {
    case CONDITION:
        // do something
        break;
    case CONDITION:
        // do something else
        break;
    // ...
    default:
        // do another thing
        break;
}
```

## Objects

`object` is a collection of key-value pairs, where the keys, often called `properties`, map to the value.

```jsx
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  sayHello: function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  }
};

// Delete a property
delete object.property
```

**Key characteristics:** 

- The key or property is always string. We can use a non-string key, but JavaScript will typecast to string.
- Objects are unordered.
- Objects are mutable, which means we can add, modify, or delete properties after creating an object.
- Properties in an object can store data (such as strings, numbers, or other objects) or functions (methods) that can be called.
- We  can access object properties using dot notation (**`object.property`**) or square bracket notation (**`object["property"]`**).

### Object methods

| Method | Purpose | Example |
| --- | --- | --- |
| `hasOwnProperty()` | Checks if object contains a property. | `object.hasOwnProperty(property);` |

## Loops

### `while` loop

```jsx
while (CONDITION) {
    // do something
}
```

### `for` loop

```jsx
for(INITIALIZATION; CONDITION; FINAL_EXPRESSION) {
    // do something
}
```

- All of `INITIALIZATION,` `CONDITION`, and `FINAL_EXPRESSION` statements are optional.
- The initialization statement is executed one time only before the loop starts.
- The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to `true`. When the condition is `false` at the start of the iteration, the loop will stop executing.
- The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement the loop counter.

### `do...while` loop

```jsx
do {
    // do something
} while (CONDITION);
```

- At first run an iteration then checks the condition.

## Ternary Operator

```jsx
CONDITION ? STATEMENT_IF_TRUE : STATEMENT_IF_FALSE

// example
// a < b ? "a is smaller" : "b is smaller";
```

- It is considered best practice to format multiple conditional operators such that each condition is on a separate line.

## Some methods

| Method | Description | Example |
| --- | --- | --- |
| `Math.random()` | Returns a random number in range 0 (inclusive) to 1 (exclusive) |  |
| `Math.floor()` | Rounds number down |  |
| `parseInt(string, radix)` | Parses a string and returns an integer. radix indicates the base in which the string is written. | `parseInt("007", 10); // 7`|
