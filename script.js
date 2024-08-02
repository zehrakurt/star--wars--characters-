const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },

  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
    homeworld: "other",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

const characterContainer = document.getElementById("characterContainer");
const toggleButton = document.getElementById("toggleButton");

function renderCharacters(charactersToRender) {
  characterContainer.innerHTML = "";
  charactersToRender.forEach((character) => {
    const characterCard = `
      <div class="col">
          <div style="background-color: transparent;color: white;border-color: azure; height: auto ; width: 100%;" class="card">
              <img src="${character.pic}" class="card-img-top" alt="${character.name}">
              <div class="card-body">
                  <h5 class="card-title">${character.name}</h5>
                  <p class="card-text">homeworld: ${character.homeworld}</p>
              </div>
          </div>
      </div>
    `;
    characterContainer.innerHTML += characterCard;
  });
  toggleButton.innerText = "Hide Characters";
  toggleButton.classList.remove("btn-success");
  toggleButton.classList.add("btn-danger");
}

function removeCharacters() {
  characterContainer.innerHTML = ""; 
  toggleButton.innerText = "Show Characters";
  toggleButton.classList.remove("btn-danger");
  toggleButton.classList.add("btn-success");
}

toggleButton.addEventListener("click", () => {
  if (toggleButton.innerText === "Show Characters") {
    renderCharacters(characters); 
  } else {
    removeCharacters();
  }
});


const homeworldsRaw = characters.map(character => character.homeworld ?? "other");
const homeworldsUnique = [...new Set(homeworldsRaw)];
const homeworlds = homeworldsRaw.map(homeworld => homeworld.toLowerCase());
const filterContainer = document.getElementById("filterContainer");
homeworldsUnique.forEach(homeworld => {
    const inputId = homeworld.replace(/\s+/g, '-').toLowerCase(); 
    const radioInput = `<input type="radio" id="${inputId}" name="homeworld" value="${homeworld}">`;
    const label = `<label for="${inputId}">${homeworld}</label><br>`;
    filterContainer.innerHTML += radioInput + label;
});

const filterButton = document.getElementById("filterButton");

filterButton.addEventListener("click", () => {
    const selectedHomeworld = document.querySelector('input[name="homeworld"]:checked');
    if (selectedHomeworld) {
        const homeworldValue = selectedHomeworld.value;
        const filteredCharacters = characters.filter(character => {
            if (homeworldValue === "all") {
                return true; 
            } else {
                return character.homeworld && character.homeworld.toLowerCase() === homeworldValue.toLowerCase();
            }
        });
        renderCharacters(filteredCharacters);
    } else {
        console.error("No homeworld selected.");
    }
});


