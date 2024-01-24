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

- for each - doesn't return anything

- rest operator must be at the last

- json is just a string

## why we use json :

- json is the universal glue
- every language has string,
- tight coupling : the backend sends the data in html format. Hence it can,t be used for mobile applications. Hence json is used for loose coupling.

## JSON.stringify() - converts object to string

## JSON.parse() - converts string to object

```js
console.log(JSON.stringify({ uno: 1, dos: 2 }, null, "\t"));
/*
{
	"uno": 1,
	"dos": 2
}
*/
```

## Deep copy :

- while using deep copy, consider the functions that are present
- spread operator uses shallow copy.

# SDLC :

- PLANNING
- ANALYSIS
- DESIGN
- IMPLEMENTATION
- TESTING AND INTEGRATION
- MAINTAINANCE

- stakeholders : who are responsible
- Waterfall model:
- Agile model: this can be implemented using SCRUM

- ADOC -
- backlog : Uncompleted work
- retrospective : what can be improved after 14 days
- story points:
- sprint planning: initial step of sprint
- spill over: if the time exceeds
- stand up - every day meeting (10 mins)

## KAN BAN board:

Backlog | In Progress | Peer review | Done

- Insiders program:
- feature branch : developers work
- dev branch -
- master branch

git pull
git fetch --all
git branch -D branch_name;

## Assignment - git rebase

- what does git rebase -i does
- how to remove commit?
- if we remove commit , how to push it to github?
- what is fork in git?

## base and head :

- Base branch : "Base Branch" is the branch where your new changes should be applied / integrated into.
- Head Branch: The "Head Branch" is the branch that contains the changes you want to integrate.
