# 1. Parameters and arguments

## Parameter

- Parameters are the variables that are used in the function definition.

Example:

```js
function add(a, b) {
  return a + b;
}
// Here a,b are the parameters
```

---

## Argument

- Arguments are the actual values that are passed into a function when it is called.

Example:

```js
let sum = add(5, 10);
// Here 5,10 are the arguments
```

---

# 2. Currying in Javascript

Currying is the process of converting a function with multiple arguments into sequence of nesting functions.

Example:

```js
function sum(a, b, c) {
  return a + b + c;
}
sum(3, 4, 5);
```

### After currying process:

```js
let sum(a) {
    return (b) => {
        return (c) => {
            return a+b+c;
        }
    }
}
console.log(sum(3)(4)(5));
//output is 12
```

---

# 3. Head of the line blocking

- Head of the line blocking (HOL) is a concept that interfers when a line of packets are held up in a queue by the first packet.

- Consider a sequence of packets where each packet needed to be streamed. If the first packet delays for some reason, it can hold the other packets even though they are ready.

### How HTTP protocols overcome this issue :

- In HTTP 1.0, Seperate connection was established for each requests.
- In HTTP 1.1, allows multiple requests and responses to be sent over a single connection.
- HTTP 2 supports multiplexing, i.e multiple streams can be sent and received in parallel.
- HTTP 3, QUIC protocol is used to overcome head of the line blocking.

### QUIC protocol :

- QUIC (Quick UDP Internet connections) is a transport layer protocol that is used to overcome certain inefficiencies found in TCP.
- QUIC supports multiplexing i.e multiple streams over a single connection and thereby reduces the impact of head of the line blocking.
