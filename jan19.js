(function (n) {
  return n * 2;
})(10);

//Annonymous, Arrow, IIFE
((n) => n * 2)(10);

//exercise

//ex1

const person = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: 28,
  favoriteColors: ["blue", "green"],
};

const getPersonInfo1 = (p) => {
  const {
    name: { first: firstName, last: lastName },
    age: personAge,
    favoriteColors: [primaryColor, secondaryColor],
  } = p;

  return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
};

console.log(getPersonInfo1(person));
//

const cart = [
  { name: "Apple", price: 0.5, quantity: 4 },
  { name: "Banana", price: 0.25, quantity: 6 },
];

const newItems = [
  { name: "Cherry", price: 0.75, quantity: 5 },
  { name: "Date", price: 1, quantity: 3 },
];

let calculateTotal = (x) => {
  let total = 0;
  for (var { price, quantity } of x) {
    total += price * quantity;
  }
  return total;
};
console.log(calculateTotal([...newItems, ...cart]));

//

// Ex 4:
//   40 and above is Pass | 'All Pass' | 'Fail'
const marks = [80, 68, 90, 40, 30, 50];
if (marks.every((p) => p >= 40)) {
  console.log("All pass");
} else {
  console.log("all fail");
}
