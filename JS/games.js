import { Details } from "./details.js";
import { Ui } from "./ui-module.js";

const cards = document.querySelectorAll(".card");
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "d470a5d6c2msh24d13a60b73454bp15b107jsnff22107ce544",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
  }
};
const links = document.querySelectorAll(".menu a");
const loading = document.querySelector(".loading");
export class Games {
  constructor() {
    this.getGames("mmorpg");
    links.forEach(link => {
      link.addEventListener("click", e => {
        document.querySelector(".menu .active").classList.remove("active");
        // this == e.target
        link.classList.add("active");
        this.getGames(link.dataset.category);
      });
    });
    this.ui = new Ui();
  }

  async getGames(category) {
    loading.classList.remove("d-none");
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    const response = await api.json();
    console.log(response);
    this.ui.displayAllData(response);
    this.clickedDetail();
    loading.classList.add("d-none");
  }

  clickedDetail() {
    document.querySelectorAll(".card").forEach(item => {
      item.addEventListener("click", () => {
        const id = item.dataset.id;
        console.log(id);
        this.showDetails(id);
      });
    });
  }

  showDetails(idGame) {
    new Details(idGame);
    document.querySelector(".games").classList.add("d-none");
    document.querySelector(".details").classList.remove("d-none");
  }
}
