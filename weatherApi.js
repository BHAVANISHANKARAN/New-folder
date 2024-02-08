// var city = ["chennai", "madurai", "erode"];

// fetch(
//   "http://api.weatherapi.com/v1/current.json?key=3e4486f61a1f4e0590245009240102&q=chennai&aqi=no"
// )
//   .then((res) => res.json())
//   .then((data) => console.log(data.current.temp_c));

// fetch(
//   `http://api.weatherapi.com/v1/current.json?key=3e4486f61a1f4e0590245009240102&q=${city[2]}&aqi=no`
// )
//   .then((res) => res.json())
//   .then((data) => console.log(`${city[2]} : ${data.current.temp_c}`));

// var c1 = fetch(
//   "http://api.weatherapi.com/v1/current.json?key=3e4486f61a1f4e0590245009240102&q=chennai&aqi=no"
// ).then((res) => res.json());

// var c2 = fetch(
//   "http://api.weatherapi.com/v1/current.json?key=3e4486f61a1f4e0590245009240102&q=madurai&aqi=no"
// ).then((res) => res.json());

// var c3 = fetch(
//   "http://api.weatherapi.com/v1/current.json?key=3e4486f61a1f4e0590245009240102&q=erode&aqi=no"
// ).then((res) => res.json());

// Promise.all([c1, c2, c3]).then(([chennai, madurai, erode]) => {
//   console.log(
//     `${city[0]}: ${chennai.current.temp_c}`,
//     `${city[1]}: ${madurai.current.temp_c}`,
//     `${city[2]}: ${erode.current.temp_c}`
//   );
// });

// var cities = ["chennai", "madurai", "erode"];

// function getTemp(city) {
//   return fetch(
//     `http://api.weatherapi.com/v1/current.json?key=3e4486f61a1f4e0590245009240102&q=${cities}&aqi=no`
//   ).then((res) => res.json());
// }

// Promise.all(cities.map(getTemp))
//   .then((data) => Object.fromEntries(data))
//   .then((data) => console.log(data));

// async function getTemp1(city) {
//   const res = await fetch(
//     `http://api.weatherapi.com/v1/current.json?key=3e4486f61a1f4e0590245009240102&q=${city}&aqi=no`
//   );
//   const data = await res.json();
//   return [data.location.name, data.current.temp_c];
// }

// async function getCities() {
//   const data = await Promise.all(cities.map(getTemp1));
//   console.log(Object.fromEntries(data));
// }

// getCities();

// fetch("https://65bb5cf552189914b5bbdab4.mockapi.io/users/5", {
//   method: "DELETE",
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// delete first three users
