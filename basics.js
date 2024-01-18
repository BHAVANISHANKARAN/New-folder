console.log(1 + 2);
let t1 = [100, 200];
let t2 = [...t1];
let t3 = [50, ...t1, 40, 60];

console.log(t1, t2);
console.log(t1 == t2);
console.log(t3);

let t4 = t1.concat([40]);
console.log(t4);

let t5 = [].concat(t1);

console.log(t5);

var y = console.log("hi");
console.log(y);
