// Add three users

async function addThreeUsers() {
  const data = [
    { name: "ajay", avatar: "AAA" },
    { name: "amit", avatar: "BBB" },
    { name: "arun", avatar: "CCC" },
  ];

  await Promise.all(
    data.map(async (user) => {
      const res = await fetch(`https://65bb5cf552189914b5bbdab4.mockapi.io/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
    })
  );
}
addThreeUsers();

//change avatar

const changeAvatar = {
  avatar:
    "https://img.freepik.com/free-vector/brush-stroke-style-indian-flag-theme-independence-day-background-vector_1055-10859.jpg",
};

fetch(`https://65bb5cf552189914b5bbdab4.mockapi.io/users`)
  .then((res) => res.json())
  .then((data) =>
    data.forEach((obj) =>
      fetch(`https://65bb5cf552189914b5bbdab4.mockapi.io/users/${obj.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      })
    )
  );
