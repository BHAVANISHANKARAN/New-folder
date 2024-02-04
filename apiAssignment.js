// fetch("https://65bb5cf552189914b5bbdab4.mockapi.io/users", { method: "PUT" })
//   .then((res) => res.json())
//   .then((data) =>
//     data.map((n) => {
//       n.avatar =
//         "https://img.freepik.com/free-vector/brush-stroke-style-indian-flag-theme-independence-day-background-vector_1055-10859.jpg";
//     })
//   );

// fetch("https://65bb5cf552189914b5bbdab4.mockapi.io/users", { method: "GET" })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// fetch("https://65bb5cf552189914b5bbdab4.mockapi.io/users", { method: "PUT" })
//   .then((res) => res.json())
//   .then(
//     (data) =>
//       (data[0].avatar =
//         "https://img.freepik.com/free-vector/brush-stroke-style-indian-flag-theme-independence-day-background-vector_1055-10859.jpg")
//   )
//   .then((x) => console.log(x));

const apiUrl = "https://65bb5cf552189914b5bbdab4.mockapi.io/users";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const updatedData = data.map((user) => {
      return {
        ...user,
        avatar:
          "https://img.freepik.com/free-vector/brush-stroke-style-indian-flag-theme-independence-day-background-vector_1055-10859.jpg",
      };
    });

    return fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
  })
  .then((response) => response.json())
  .then((updatedData) => {
    console.log("Users updated successfully:", updatedData);
  })
  .catch((error) => {
    console.error("Error updating users:", error);
  });
