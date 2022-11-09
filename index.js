const button = document.querySelector("button");
const table = document.querySelector("table");

const URL_API =
  "https://raw.githubusercontent.com/FbW-D04-A/fetch-from-github-Lorp91/main/data.json";

// button.addEventListener("click", () => {
//   fetch(URL_API)
//     .then((response) => response.json())
//     .then((data) =>
//       data.map((person) => {
//         return (list.innerHTML += `<li>${person.firstName} - ${person.lastName} -${person.age}</li>`);
//       })
//     );
// });

button.addEventListener("click", async () => {
  try {
    table.innerHTML = ``;
    const response = await fetch(URL_API);
    const data = await response.json();
    data.map((person) => {
      let tr = document.createElement("tr");
      table.appendChild(tr);
      return (tr.innerHTML += `<td>${person.name}</td><td>${person.nachname}</td><td>${person.age}</td>`);
    });
  } catch (err) {
    console.log(err);
  }
});
