// class Car {
//   doors(door) {
//     console.log("No of doors:", door);
//   }

//   engine(en) {
//     console.log("Number of engines:", en);
//   }

//   wheels(wheel) {
//     console.log("Number of wheels:", wheel);
//   }

//   acceleration(speed) {
//     console.log("after accelerated speed is:", 50 + speed);
//   }

//   break(speed) {
//     console.log("After break speed is:", speed - 30);
//   }
// }
// const bmw = new Car();
// bmw.doors("4");
// bmw.engine("3");
// bmw.wheels("5");
// bmw.acceleration(60);
// bmw.break(50);

// var id = 100;
// class Bank {
//   #balance;
//   constructor(name, accNo, balance, phNo) {
//     this.name = name;
//     this.accNo = accNo;
//     this.#balance = balance;
//     this.phNo = phNo;
//     this.transactionArray = [];
//   }

//   deposit(amt) {
//     this.#balance = this.#balance + amt;
//     this.transactionArray.push({
//       name: this.name,
//       id: id,
//       type: "Deposit",
//       amount: amt,
//       balance: this.#balance,
//     });
//     id++;
//   }

//   getBalance() {
//     return `your balance is ${this.#balance}`;
//   }

//   withdraw(amt) {
//     if (amt > this.#balance) {
//       console.log("amount exceeds");
//     } else {
//       this.#balance = this.#balance - amt;
//     }
//     this.transactionArray.push({
//       name: this.name,
//       id: id,
//       type: "Withdraw",
//       amount: amt,
//       balance: this.#balance,
//     });
//     id++;
//   }

//   getTransactions() {
//     console.log(this.transactionArray);
//   }
// }
// const user1 = new Bank("raj", 9876543211, 10000, 1234567890);

// const user2 = new Bank("mano", 9876543212, 2000, 1234567891);

// const user3 = new Bank("Bhavani", 1029384756, 2500, 1234567892);

// user3.deposit(8000);
// console.log(user3.getBalance());
// console.log(user3.getTransactions());

// user2.deposit(15000);
// console.log(user2.getTransactions());

// user1.withdraw(2000);
// console.log(user3.getTransactions());

class Bank {
  #balance;
  constructor(name, accNo, balance, phNo) {
    this.name = name;
    this.accNo = accNo;
    this.#balance = balance;
    this.phNo = phNo;
    this.transactionArray = [];
  }

  deposit(amt) {
    this.#balance = this.#balance + amt;
    this.transactionArray.push({
      name: this.name,
      id: Math.random(),
      type: "Deposit",
      amount: amt,
      balance: this.#balance,
    });
  }

  getBalance() {
    return `your balance is ${this.#balance}`;
  }

  withdraw(amt) {
    if (amt > this.#balance) {
      console.log("amount exceeds");
    } else {
      this.#balance = this.#balance - amt;
    }
    this.transactionArray.push({
      name: this.name,
      id: Math.random(),
      type: "Withdraw",
      amount: amt,
      balance: this.#balance,
    });
  }

  getTransactions() {
    console.log(this.transactionArray);
  }
}
const user1 = new Bank("raj", 9876543211, 10000, 1234567890);

const user2 = new Bank("mano", 9876543212, 2000, 1234567891);

const user3 = new Bank("Bhavani", 1029384756, 2500, 1234567892);

user3.deposit(8000);
console.log(user3.getTransactions());

user2.deposit(15000);
console.log(user2.getTransactions());

user1.withdraw(2000);
console.log(user1.getTransactions());
