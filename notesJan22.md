- JIT - just in time compilation

-
- two phases in compilation
  - compilation phase
  - execution phase

```js
// 1 st phase - compilation
console.log(a); // skipped
var a = 10; // do u know a? No.Then note down
console.log(a); // skipped

// 2 nd phase - execution
console.log(a); // do u know a? yes. Then show the value. undefined
var a = 10; //do u know a? yes. Then put the value.
console.log(a); //do u know a? yes. Then show the value. 10
```

## for let and const

```js
console.log(a); // skipped
let a = 10; // do u know a? No.Then note down but dont initialize
console.log(a); // skipped

// 2 nd phase - execution
console.log(a); // do u know a? yes. Then show the value. undefined
let a = 10; //do u know a? yes. Then put the value.
console.log(a); //do u know a? yes. Then show the value. 10
```

- var and function gets hoisted
- let and const not get hoisted

- all the lines above the let are called TDZ - Temporal Dead Zone.(Only in let and const)

## arrays.map()

- map doesn't mutate the original array

### observations :

- always returns the copy of the array
- sourceLength === newArrayLengtyh
- transforms the datatype

## arrays.filter() - observations

- always returns the copy of the array
- sourceLength != newArrayLengtyh (less than or equal to the source)
- returns the same data type

Example :

```js
const avengers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
  //null,
  0,
];

const resultArray = avengers.filter((n) => n.length >= 10);
console.log(resultArray);

// Longer names which has 10 or more chars
```

- those functions that return boolean are called as predicate function.

## Types of code

- Imperative : How to do it? lot of unecessary code
- Declarative : What to do? It is more expressive

## Dictionary sort
