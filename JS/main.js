import { Games } from "./games.js";
new Games();

const scroll_ToTop = document.querySelector(".scroll-to-top");
console.log(scroll_ToTop);
window.onscroll = function() {
  if (window.scrollY > 1000) {
    scroll_ToTop.classList.remove("d-none");
  } else {
    scroll_ToTop.classList.add("d-none");
  }
};

scroll_ToTop.addEventListener("click", function() {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

/* source code used functions not used OOP */
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "d470a5d6c2msh24d13a60b73454bp15b107jsnff22107ce544",
//     "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
//   }
// };
// const links = document.querySelectorAll(".menu a");
// console.log(links);
// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener("click", function() {
//     document.querySelector(".menu .active").classList.remove("active");
//     this.classList.add("active");
//     const category = this.dataset.category;
//     console.log(category);
//     getGames(category);
//   });
// }
//  function getGames(category) {
//  fetch(
//     `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
//     options
//   ).then(response => response.json())
//    .then(data => {
//       console.log(data);
//       display(data);
//     }).catch(err => {
//       console.log(err);
//     }).finally(() => {
//       console.log("finally");
//     })

//   // console.log(data);
//   // display(data);
// }
// getGames("mmorpg");

// function display(data) {
//   let result = "";
//   for (let i = 0; i < data.length; i++) {
//     result += `
//     <div class="col-md-6 col-lg-4 col-xl-3">
//        <div data-id="${data[i]
//          .id}"  class="card h-100 bg-transparent"  onclick = "showDetails(${data[i].id})">
//                  <div class=" card-body">
//                     <figure class="position-relative">
//                          <img class="card-img-top object-fit-cover h-100" src="${data[
//                            i
//                          ].thumbnail}" />
//                     </figure>
//                     <figcaption>
//                         <div class="d-flex justify-content-between">
//                             <h6 class="  text-white">${data[i].title}</h6>
//                             <span class="badge text-bg-primary p-2">Free</span>
//                         </div>

//                         <p class="card-text small text-center text-white">
//                             ${data[i].short_description.split(" ", 8)}
//                         </p>

//                     </figcaption>
//                 </div>

//                 <footer class="card-footer small d-flex justify-content-between">

//                     <span class="badge badge-color">${data[i].genre}</span>
//                     <span class="badge badge-color">${data[i].platform}</span>

//                 </footer>
//                 </div>
//     </div>

//     `;
//   }
//   document.getElementById("gameData").innerHTML = result;
// }

// function showDetails(id) {
//   fetch(
//     `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
//     options
//   )
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       displayDetails(data);
//     })
//     .catch(err => {
//       console.error("Error:", err);
//     })
//     .finally(() => {
//       console.log("finished");
//     });
//   //  console.log(data);
//   //  displayDetails(data);
//   document.querySelector(".games").classList.add("d-none");
//   document.querySelector(".details").classList.remove("d-none");
//   document.getElementById("btnClose").addEventListener("click", function() {
//     console.log("inf");
//     document.querySelector(".details").classList.add("d-none");
//     document.querySelector(".games").classList.remove("d-none");
//   });
// }
// function displayDetails(data) {
//   let result = "";
//   result += `

//                       <div class="col-md-4">
//                         <img src="${data.thumbnail}" class="w-100" alt="image details">
//                     </div>
//                     <div class="col-md-8">
//                         <h3>Title: ${data.title}</h3>
//                         <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
//                         <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
//                         <p>Status:: <span class="badge text-bg-info"> ${data.status}</span> </p>
//                         <p class="small">
//                       ${data.description}
//                         </p>
//                         <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
//                     </div>
//         `;

//   document.getElementById("detailsContent").innerHTML = result;
// }

/////////////////////
