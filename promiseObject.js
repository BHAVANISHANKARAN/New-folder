// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) =>
//     console.log(
//       data
//         .filter((n) =>
//           n.continents.map((m) => m.toLowerCase()).includes("europe")
//         )
//         .map((m) => m.name.common)
//     )
//   );

// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) =>
//     console.log(
//       data
//         .filter((n) => n.population >= 10000000)
//         .toSorted((a, b) => b.population - a.population)
//         .map((b) => b.name.common)
//     )
//   );

// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) =>
//     console.log(
//       data
//         .filter((n) => n.population >= 10000000)
//         .toSorted((a, b) => b.population - a.population)
//         .map((b, index) => `${++index}. ${b.name.common} - ${b.population}`)
//         .join("\n")
//     )
//   );

// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) =>
//     console.log(
//       data
//         .filter((n) => n.population >= 10000000)
//         .toSorted((a, b) => b.population - a.population)
//         .map((b, index) => `${++index}. ${b.name.common} - ${b.population}`)
//         .slice(0, 10)
//         .join("\n")
//     )
//   );

// var f1 = Promise.resolve("Bhavani");
// var f2 = Promise.reject("Nehaa");
// var f3 = Promise.resolve("Mano");

// Promise.all([f1, f2, f3])
//   .then((data) => console.log(data))
//   .catch((d1) => console.log(d1));

// var f1 = Promise.resolve("Bhavani");
// var f2 = Promise.resolve("Nehaa");
// var f3 = Promise.resolve("Mano");

// Promise.race([f1, f2, f3])
//   .then((data) => console.log(data))
//   .catch((d1) => console.log(d1));
// .finally(() => console.log("Done")); // whichever fails first it will displayed

// Promise.race([f1, f2, f3])
//   .then((data) => console.log(data))
//   .catch((d1) => console.log(d1));
