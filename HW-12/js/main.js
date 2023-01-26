const IMG = [
  "Luke Skywalker",
  "C-3PO",
  "R2-D2",
  "Darth Vader",
  "Leia Organa",
  "Obi-Wan Kenobi",
  "Anakin Skywalker",
  "Wilhuff Tarkin",
  "Chewbacca",
  "Han Solo",
  "Greedo",
  "Yoda",
  "Palpatine",
  "Boba Fett",
  "Qui-Gon Jinn",
  "Jar Jar Binks",
  "Darth Maul",
  "Ki-Adi-Mundi",
];

let allCharacters = document.querySelector(".characters");
let getNameFilm = document.getElementById("getFilm");

getNameFilm.addEventListener("click", function () {
  let filmPart = document.getElementById("films").value;

  if (filmPart === "none") {
    alert("Зробіть свій вибір!");
    return;
  }

  async function getAllCharacters() {
    return await axios.get(`https://swapi.dev/api/films/${filmPart}/`);
  }

  getAllCharacters().then((characters) =>
    characters.data.characters.forEach((character) => {
      async function getCharacter() {
        return await axios.get(`${character}`);
      }
      let allBlocks = document.querySelectorAll(".hero");
      if (allBlocks) {
        allBlocks.forEach((block) => {
          block.remove();
        });
      }
      
      getCharacter().then((charcterInfo) => {
        let newHero = document.createElement("div");
        const srcForImg = IMG.includes(charcterInfo.data.name)
          ? charcterInfo.data.name
          : "1";
        newHero.insertAdjacentHTML(
          "afterbegin",
          `<div><img src="characters/${srcForImg}.png" width="50" height="50" alt="img"></div><div>${charcterInfo.data.name}</div><div>Birthday - ${charcterInfo.data.birth_year}</div>
            <div>Gender - ${charcterInfo.data.gender}</div>`
        );
        newHero.className = "hero";
        allCharacters.append(newHero);
      });
    })
  );
});
