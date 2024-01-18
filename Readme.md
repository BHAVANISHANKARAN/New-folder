# Basics of javascript

- functions
  - arrow functions
  - anonymous functions
- Truthy vs Falsy

## Shortcuts

`ctrl + shift + P` - opening search

`alt + arrow` - MoveLine

`markdown cheatsheet` - to see all shortcuts

## Index finding snippet

```js
var findIndex = (a1, n) => {
  return a1.indexOf(n) >= 0 ? a1.indexOf(n) : "Not present";
};

findIndex([5, 6, 7, 8], 0);
```

- Interpolation - $
- Template literal supports multiline sentences
- ctrl D - multiple cursors

# Destructuring:

## Array destrucutring

- default value will be taken only if t3 is undefined

```js
example: [t1, t2, t3 = 80] = [100, 200]; // t3 value is 80
```

## Holes :

```js
const [t1, , t2, t3 = 80] = [100, 200, 50];
console.log(t1, t2, t3);
```

output :
100 50 80

## REST operator :

```js
const nums = [100, 50, 20, 30];
const [t1, t2] = nums;
console.log(t1, t2); //100 50
const [z1, ...z2] = nums;
console.log(z1, z2); //100 [50,20,30](changes to object type)
```

## OBJECT DESTRUCTURING

```js
    const {name, networth, power} = {
        name:"Tony stark",
        business:"stark industries"
        networth: "5billion",
        power: "suit",
    }

    console.log(name); //tony stark

```
