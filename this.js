// depends a context

var student = {
  firstName: "mano",
  lastName: "dhanekula",
  fullName: function () {
    return `${this.lastName}, ${this.firstName}`;
  },
};

console.log(student.fullName());

var stu1 = {
  firstName: "Raja",
  lastName: "sekar",
  fullName: student.fullName,
};

console.log(stu1.fullName());

var printFullName = student.fullName;
console.log(printFullName);

var stu2 = {
  firstName: "Raja",
  lastName: "sekar",
};

var printFullName2 = function (city, state) {
  return `Hi ${this.lastName}, ${this.lastName} from ${city}, ${state}`;
};

var stu3 = {
  firstName: "Bhavani",
  lastName: "Shnakaran",
};

console.log(printFullName2.call(stu3, "Erode", "TN"));
console.log(printFullName2.apply(stu3, ["Erode", "TN"]));

var printBhavani = printFullName2.bind(stu3);
console.log(printBhavani("Erode", "TN"));

console.log(printFullName2.bind(stu3)("kpm", "TN"));
