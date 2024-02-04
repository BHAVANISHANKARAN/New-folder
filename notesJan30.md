## setTimeout():

```js
setTimeout(function () {
  console.log("Hi");
}, 5000);
// the function is called after 5 seconds
```

## setInterval(): - callback function

- event completes
- action is taken

```js
setInterval(function () {
  console.log("Hi");
}, 2000);
// The function is called for every 2 seconds
```

## GIT

- git rebase -i HEAD
- resolve the conflict and give git rebase continue
- how to pull: git checkout master, and git pull
- git stash : to temporarily store the changes but not commits

## \* don't rebase on master branch

## command modes:

### VIM

- normal mode : press esc
- insert mode : press i
- command mode: press colon(:) to come out of command mode, press esc

- j - down | k - up | h- left | l -
  cw - changeword
  u - undo

callback: event and action: event completes and action is taken

## Architecture of JS engine

synchronous : if happens one by one
Asynchronous : if the code runs simultaneously
the vent loop pushes the code form callback queue to call stack only when call stack is empty

- webapi : all event listeners are part of webapi.
- keep your call stack empty , keep your main thread free

## callback hell

- nesting of callbacks

## promises

- three stages:

  - pending : when we apply any async code it will be pending
  - fulfilled
  - rejected

  ## crearing apromise:

  ```js
  var DrivingTest = new Promise((resolve, reject) => {
    let age = 20;
    if (age >= 18) {
      resolve(" Your are eligible");
    } else {
      reject("not eligible");
    }
  });
  console.log(DrivingTest);
  // Promise {<fulfilled>: ' Your are eligible'}
  ```

  ```js
  var DrivingTest = new Promise((resolve, reject) => {
    let age = 10;
    if (age >= 18) {
      resolve(" Your are eligible");
    } else {
      reject("not eligible");
    }
  });
  console.log(DrivingTest);
  // Promise {<rejected>: 'not eligible'}
  ```

  ## methods of promise

  - catch
  - finally
  - then:

  ## then

  - It is called when the function is resolved or rejected.
  - .then will return always promise object.
  - We can use dot chaining of promises
  - The output of first .then will be the input of the next .then

  ## catch:

  ```js
  var DrivingTest = new Promise((resolve, reject) => {
    let age = 10;
    if (age >= 18) {
      resolve(" Your are eligible");
    } else {
      reject("not eligible");
    }
  });
  console.log(DrivingTest);
  console.log("Driving test started");
  ```

  ## finally:

  - finally will be called, no matter either rsolve or reject is called.

  ## Promise all:

```js
var f1 = Promise.resolve("Bhavani");
var f2 = Promise.resolve("Nehaa");
var f3 = Promise.resolve("Mano");

Promise.all([f1, f2, f3]).then((data) => console.log(data));
// until the slowest one completed, others will wait
// it doesnt change the order in the array
```

## Promise.race :

- accepts array of promises
- CDN : cloud delivery network
- if the faster one rejected entire array is rejected

## Promise.allSettled

## Task: promise creation

- one fail, both fails // negative case

- converting array of arrays to arrays of objects - objects.fromEntries()
- async function always returns promises
-

task

- update national flag
- add three users with database : to give data and to mention content type
- use fetch
- this, difference between call apply and bind
