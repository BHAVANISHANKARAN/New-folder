// ARRAY METHODS

// Task 1: High-Value Transactions in 2023

const transactions = [
  { id: "T1", category: "Personal", amount: 3000, date: "2023-01-15" },
  { id: "T2", category: "Business", amount: 6500, date: "2023-02-20" },
  { id: "T3", category: "Business", amount: 4500, date: "2023-03-05" },
  // more transactions...
];

var result = [];
var output = [];
const transactionFunction = (arr) => {
  result = arr.filter(
    (n) =>
      n.category == "Business" &&
      n.amount >= "5000" &&
      n.date.slice(0, 4) == "2023"
  );
  output = result.map(
    (n) => (n = `Transaction ${n.id}: $${n.amount} on ${n.date}`)
  );
  return output;
};
console.log(transactionFunction(transactions));

// Task 2:  Departmental Salary Expenditure

const departments = [
  { name: "Engineering", employees: [{ salary: 80000 }, { salary: 90000 }] },
  { name: "Marketing", employees: [{ salary: 60000 }, { salary: 65000 }] },
  // more departments...
];

// output : [{ "Engineering": 170000 }, { "Marketing": 125000 }]

const x = departments.map((n) => ({
  [`"${n.name}"`]: n.employees.reduce(
    (totalSalary, employeeSalary) => totalSalary + employeeSalary.salary,
    0
  ),
}));
console.log(x);

// Task 3: Weather Data Sorting and Structuring

const weatherData = [
  { date: "2023-03-01", temperature: 16 },
  { date: "2023-03-02", temperature: 20 },
  { date: "2023-03-03", temperature: 18 },

  // more data...
];

// Expected Output: { "2023-03-02": 20, "2023-03-03": 18, "2023-03-01": 16 }

const sortedArray = weatherData.toSorted(
  (a, b) => b.temperature - a.temperature
);
const output = sortedArray.map((n) => ({
  [`"${n.date}"`]: n.temperature,
}));
console.log(output);

// Task 4: Analyzing Electronics Products

const products = [
  { category: "Electronics", price: 400, reviews: 120, rating: 4.5 },
  { category: "Electronics", price: 89.99, reviews: 80, rating: 3.9 },
  { category: "Home", price: 49.99, reviews: 30, rating: 4.2 },
  { category: "Electronics", price: 200, reviews: 120, rating: 4.5 },
  // more products...
];
// Expected Output: 199.99 // Assuming only one product meets the criteria

const arr = products.filter(
  (n) => n.category == "Electronics" && n.reviews >= 50 && n.rating >= 4
);

const res = arr.reduce((a, b) => a + b.price, 0) / arr.length;
console.log(res);

// Task 5: Merging User and Order Data

const users = [
  { userId: "U1", name: "Alice" },
  { userId: "U2", name: "Bob" },
  // more users...
];

const orders = [
  { userId: "U1", orderDetails: "Order 1 Details" },
  { userId: "U2", orderDetails: "Order 2 Details" },
  // more orders...
];

// Expected Output:
// [
// { name: 'Alice', orderDetails: 'Order 1 Details' },
// { name: 'Bob', orderDetails: 'Order 2 Details' }
// ]

const mergedArray = (userArray, orderArray) => {
  return userArray.map((userItem) => ({
    ...orderArray.find((orderItem) => orderItem.userId == userItem.userId),
    ...userItem,
  }));
};

console.log(
  mergedArray(users, orders).map((n) => ({
    name: n.name,
    orderDetails: n.orderDetails,
  }))
);
