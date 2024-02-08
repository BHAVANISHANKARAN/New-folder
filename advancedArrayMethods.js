// TASK 1: CONSOLIDATING EVENT ATTENDEES

const event1Attendees = ["Alice", "Bob", "Charlie"];
const event2Attendees = ["Bob", "Dave", "Eve"];
const event3Attendees = ["Charlie", "Eve", "Frank"];

// Expected output: ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank']

// const result = [...event1Attendees, ...event2Attendees, ...event3Attendees];

// const array = result.filter((value, index) => result.indexOf(value) == index);
// console.log(array.toSorted());

const result = [...event1Attendees, ...event2Attendees, ...event3Attendees];
const uniqueSet = new Set(result);
const sortedArray = [...uniqueSet].toSorted();
console.log(sortedArray);

// TASK 3: FILTERING AND MAPPING BOOK DATA

const books = [
  { title: "Book A", author: "Author 1", year: 1999 },
  { title: "Book B", author: "Author 2", year: 2005 },
  { title: "Book C", author: "Author 3", year: 2001 },
  // more books...
];

// output: ['Book B by Author 2', 'Book C by Author 3']

const bookArray = books.filter((n) => n.year >= 2000);
console.log(bookArray.map((n) => `${n.title} by ${n.author}`));

// TASK 4:  COMPLEX PRODUCT INVENTORY ANALYSIS

const products = [
  {
    name: "ProductA",
    stores: [
      { storeId: "S1", inventory: 10 },
      { storeId: "S2", inventory: 0 },
    ],
  },
  {
    name: "ProductB",
    stores: [
      { storeId: "S1", inventory: 5 },
      { storeId: "S2", inventory: 7 },
    ],
  },
  {
    name: "ProductC",
    stores: [
      { storeId: "S1", inventory: 10 },
      { storeId: "S2", inventory: 0 },
    ],
  },
];

const availableProducts = products
  .filter((product) => product.stores.every((store) => store.inventory > 0))
  .map((product) => product.name);

console.log(availableProducts);
