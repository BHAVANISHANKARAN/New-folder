// var price = 200;
// function getPrice() {
//   console.log("The old price is:", price); //undefined
//   var a = 400;
//   console.log("The new price is :", price); //400
// }
// getPrice();

var price = 200;
function getPrice() {
  // TDZ
  console.log("The old price is:", price); //undefined
  var a = 400;
  console.log("The new price is :", price); //400
}
getPrice();

//Arrays.map()
const nums = [8, 6, 4];
const output = nums.map((x) => x * 2);
console.log(output);
console.log(nums);

//Example 2
const avengers = [
  "Hulk",
  "Iron man",
  "Black Widow",
  "Captain America",
  "SpiderMan",
  "Thor",
];

//other ways to define a function
// const getLength = (n) => n.length;

// var getLength = function (name) {
//     return name.length
// }

const countLetter = avengers.map((n) => n.length);
console.log(countLetter); //[4,7,10,14,9,4]

//map.filter()

const resultArray = avengers.filter((n) => n.length >= 10);
console.log(resultArray);

//example
// const avengers = [
//     "Hulk",
//     "Iron man",
//     "Black widow",
//     "Captain america",
//     "Spider man",
//     "Thor",
//     //null,
//     0,
//   ];

//   const resultArray = avengers.filter((n) => n.length>=10);
//   console.log(resultArray);

// Longer names which has 10 or more chars

const players = [
  { name: "Alice", skills: ["defense", "speed"] },
  { name: "Bob", skills: ["speed", "attack", "strategy"] },
  { name: "Charlie", skills: ["speed", "attack"] },
  { name: "David", skills: ["strategy", "defense", "speed"] },
  { name: "Eva", skills: ["speed", "strategy"] },
];

const requiredSkills = ["speed", "strategy"];
console.log(
  players
    .filter((person) =>
      requiredSkills.every((skill) => person.skills.includes(skill))
    )
    .map((player) => player.name)
    .join(", ")
);
// Exercise :
const emp = employes
  .filter((person) => person.grade > 80)
  .map((n) => (n = { id: n.id, status: "promoted" }));
console.log(emp);

// Top 3 Students
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 88 },
  { name: "David", score: 79 },
  { name: "Eva", score: 95 },
];

const sortedScore = students.sort((a, b) => a.score - b.score).reverse();
const topThree = sortedScore.slice(0, 3);
const result = topThree.map((n) => n.name);
console.log(result.join(", "));
// console.log(sortedScore);

// This should output: "Eva, Bob, Charlie"
