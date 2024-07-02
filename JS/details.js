import { Ui } from "./ui-module.js";
const loading = document.querySelector(".loading");
console.log(loading);
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "d470a5d6c2msh24d13a60b73454bp15b107jsnff22107ce544",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
  }
};

export class Details {
  constructor(id) {
    this.ui = new Ui();
    document.getElementById("btnClose").addEventListener("click", function() {
      console.log("inf");
      document.querySelector(".games").classList.remove("d-none");
      document.querySelector(".details").classList.add("d-none");
    });
    this.getDetails(id);
  }
  async getDetails(id) {
    loading.classList.remove("d-none");
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const data = await api.json();
    console.log(data);
    this.ui.displayDetails(data);
    loading.classList.add("d-none");
  }
}
