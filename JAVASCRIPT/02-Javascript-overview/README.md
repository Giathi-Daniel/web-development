# This is a Javascript overview

- Javascript is single threaded ad synchronous

# How to connect JS

- Internal (<script type="script">Your code goes here</script>)
- External (<script src="script.js">Your code goes here...</script>)
  - defer -> means that the script should be executed after the whole page is loaded
  - async -> that the script will be executed immediately, but in parallel to parsing the rest of the page

# Varibles

- Containers for storing info
- var -> originally used
- let -> come after var (Prevents us from declaring another variable with the same name. => prevents accidental redeclaring of a variable)
- consr -> store certain values, once values have been initialized, cannot be modified (prevents accidentaly changing a value stored in a variable)
- If we declare any variable or constant using _let_ of _const_, outisde the code blocks, they will be global
- Variable declared using _var_ can be accessed anywhere that is; either inside the scope or outside. All the variables turn out to be global
- When a variable is declared inside a function using _var_ it becomes local

# Hoisiting

- Focus on the declaration not the initialization

# Primitive Data Types (Stored directly in the "stack")

- String - Sequence of characters. "quotes" or "backticks"
  - string interpolation - you can be able to create a character string as a template
- Number - int, floating-point numbers
- Boolean - Logical entity / true or false
- Null - Intentional absenece of any object value (The value itself is a primitive, while the type to which it belongs is not a primitive type)
- Undefined - A variable that has not yet been defined
- BigInt - represents large large number that the "Number" type can't handle

# Reference Data Types (stored in the heap and accessed by reference)

- Non-primitive types that are stored and accessed i.e object literals, arrays and functions

-_typeof_ operator takes only one argument and informs us of the type of data indicated as a given argument

# Complex DataTypes

- _Arrays_
- Store values without the associated names(i.e keys as compared to objects)
- It is implememnted as an object

- _Objects_
- How to use it as a record, _a collaction of names fields_
- Allows you to store multiple values of different types in one place
- Everything except primitives is an oject.

# Arrays and loops

- NB: arrays are references
- .push() -> adds an element a value the end of the array
- .pop() -> removes the last element from the array
- .splice() -> removes the value from the array
- .slice() -> allows you to create a new array from selected els from the original array
- .shift() -> removes a value from the begin of the array
- .unshift() -> adds a value at the front of the array
- .reverse() -> reverses the order of an element in an array

# Falsy values

- 0,
- NaN,
- empty string,
- undefined,
- null
