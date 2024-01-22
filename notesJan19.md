# IIFE

```js
(function (n) {
  return n * 2;
})(10);
// output : 20
```

# FIVE PILARS OF PROGRAMMING

- Readability
- Maintainable
- Extensible
- testability
- Performance

# for of and for in

- for in can be use dwith arrays and objects
- for of can be use donly with arrays

# Objects

objeect.keys() and object.values()
Example :

```js
const salary = {
    john: 500,
    pete: 400,
    mary: 250;
}
Object.keys(salary) // ["john","pete","mary"] - array of strings
Object.values(salary) //[500,400,250] - type number

```

# shortcuts

F2 - to change variable name in all places

# array methods

- Will it mutate the array ?
- ## what datatype will be returned ?

- Array.includes() - returns boolean
- Array.join() - comma is the default seperator
- Array.split() - splits the values based on a symbol
- Arrays.slice -
- Arrays.every(e => === " ") - built in higher order function
- Arrays.some(p => p === " ") -

- Arrays.unshift() - adds elements in the front of the array
- Arrays.push() - adds elements in the rear of the array

- chrome developer tools
- immutable js

- reassignment is not possible in const

---

# optional chaining :

```js
const person1 = {
  name: {
    first: "ajay",
    last: "kumar",
  },
  age: 28,
  favouriteColors: ["blue", "green"],
  // place:{
  //     city:"chennai",
  // },
};

//console.log(person1.place.city) //cannot read properties of undefined

// Defence code
if (person1.place && person1.place.city) {
  console.log(person1.place.city);
}

//?. optional chaining
console.log(person1?.place?.city);
```

# defensive code

- trying to protect our code with errors
- DRY - dont repeat urself.

IIFE - used by library author, no need to worry about name clash, name space is free.

Converting a function to iife - webpack, babble

- either to assign an anonymous function to a variable
