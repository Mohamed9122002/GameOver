export class Ui {
  displayAllData(data) {
    let result = "";
    for (let i = 0; i < data.length; i++) {
      result += `
    <div class="col-md-6 col-lg-4 col-xl-3">
       <div data-id="${data[i]
         .id}"  class="card h-100 bg-transparent"  onclick = "showDetalis(${data[
        i
      ].id})">
                 <div class=" card-body">
                    <figure class="position-relative">
                         <img class="card-img-top object-fit-cover h-100" src="${data[
                           i
                         ].thumbnail}" />
                    </figure>
                    <figcaption>
                        <div class="d-flex justify-content-between">
                            <h6 class="  text-white">${data[i].title}</h6>
                            <span class="badge text-bg-primary p-2">Free</span>
                        </div>
                
                        <p class="card-text small text-center text-white">
                            ${data[i].short_description.split(" ", 8)}
                        </p>
                
                    </figcaption>
                </div>
                
                <footer class="card-footer small d-flex justify-content-between">
                
                    <span class="badge badge-color">${data[i].genre}</span>
                    <span class="badge badge-color">${data[i].platform}</span>
                
                </footer>
                </div>
    </div>
             `;
    }
    document.getElementById("gameData").innerHTML = result;
  }
  displayDetails(data) {
    const result = `

                      <div class="col-md-4">
                        <img src="${data.thumbnail}" class="w-100" alt="image details">
                    </div>
                    <div class="col-md-8">
                        <h3>Title: gsdfosod</h3>
                        <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
                        <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
                        <p>Status:: <span class="badge text-bg-info"> ${data.status}</span> </p>
                        <p class="small">
                      ${data.description}
                        </p>
                        <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
                    </div>
        `;

    document.getElementById("detailsContent").innerHTML = result;
  }
}
