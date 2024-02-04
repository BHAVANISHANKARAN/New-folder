var f1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1"), 7000);
});
var f2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 2"), 4000);
});
var f3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 3"), 3000);
});

Promise.all([f1, f2, f3]).then((data) => console.log(data));
// output : After 7 seconds ['Promise 1', 'Promise 2', 'Promise 3']

var f1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1"), 7000);
});
var f2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 2"), 4000);
});
var f3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 3"), 3000);
});

Promise.race([f1, f2, f3]).then((data) => console.log(data));
// output : After 3 seconds Promise3

var f1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1"), 7000);
});
var f2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 2"), 4000);
});
var f3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 3"), 3000);
});

Promise.allSettled([f1, f2, f3]).then((data) => console.log(data));
//  output : After 7 seconds ['Promise 1': fulfilled, 'Promise 2': fulfilled, 'Promise 3':fulfilled]

var f1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1"), 7000);
});
var f2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 2"), 4000);
});
var f3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 3"), 3000);
});

Promise.allSettled([f1, f2, f3]).then((data) => console.log(data));
//  output : After 7 seconds ['Promise 1':fulfilled, 'Promise 2':rejected, 'Promise 3':fulfilled]

var f1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1"), 7000);
});
var f2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 2"), 4000);
});
var f3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 3"), 3000);
});

Promise.all([f1, f2, f3])
  .then((data) => console.log(data))
  .catch((d) => console.log(d));
//  output : After 4 seconds  promise2
