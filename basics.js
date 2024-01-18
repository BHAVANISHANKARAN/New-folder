const movieURL = (domain, genre, year) => {
  return "http://" + domain + "?genre=" + genre + "&year" + year;
};
console.log(movieURL("imdb.com", "thriller", 2020));

const movieURL1 = (domain, genre, year) => {
  return `http://${domain}?genre=${genre}&year${year}`;
};
console.log(movieURL1("imdb.com", "thriller", 2020));
