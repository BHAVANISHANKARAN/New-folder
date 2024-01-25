// Task 1: User profile Access

const array = [
  {
    contact: {
      email: "tonystark@gmail.com",
      phone: "",
    },
    address: "Newyork",
  },
  {
    contact: {
      email: "steverogers@gmail.com",
    },
    address: "Brooklyn",
  },
  {
    contact: {
      name: "Peter Parker",
      email: undefined,
    },
    address: "address location 3",
  },
];
const userProfileAccess = (arr) => {
  for (var obj of arr) {
    console.log(obj?.contact?.email || "E mail not provided");
  }
};
userProfileAccess(array);

// Task 2 :Nested Data Retrieval

// Task 3 :Nested Data retrieval

const stock = [
  {
    inventory: {
      data: 5,
    },
    name: "productOne",
  },
  {
    inventory: {
      data: 6,
    },
    name: "productTwo",
  },
  {
    inventory: {
      data: 7,
    },
    name: "productThree",
  },
  {
    inventory: {
      data: undefined,
    },
    name: "productFour",
  },
];

const isProductInStock = (stock) => {
  for (var prod of stock) {
    console.log(prod?.inventory?.data || "Product not in stock");
  }
};

isProductInStock(stock);

// Task 4 :Optional Chaining With arrays

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const getMatrixElement = (matrix, row, col) => {
  let element = matrix?.[row]?.[col] || "Element not found";
  return element;
};
console.log(getMatrixElement(matrix, 1, 2));
