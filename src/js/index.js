const fireBaseUrl = "https://wd-sv-67-2023-default-rtdb.firebaseio.com/";
const organizersRow = document.getElementById("organizersRow");
const searchButton = document.getElementById("organizerSearchButton");

getAllOrganizers();

searchButton.addEventListener("click", searchOrganizers);

/* Organizator html card prototype
<div class="col mb-4">
    <div class="card border-4 rounded-3">
        <a href="orgnisator.html">
            <div class="ratio ratio-16x9">
                <img
                class="card-img-top w-100 border-bottom-thick-orange"
                src="https://i.imgur.com/OV15WM6.jpeg"
                />
            </div>
            <div class="p-3 fw-normal text-center">
                <h4>BeoArt Fest</h4>
            </div>
        </a>
    </div>
</div> 
*/

function getAllOrganizers() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        organizersRow.innerHTML = "";
        let organizers = JSON.parse(request.responseText);

        for (let id in organizers) {
          let organizer = organizers[id];
          organizersRow.innerHTML += `
            <div class="col mb-4">
                <div class="card border-4 rounded-3">
                    <a href="organisator.html?organizerId=${id}">
                        <div class="ratio ratio-16x9">
                            <img
                            class="card-img-top w-100 border-bottom-thick-orange"
                            src="${organizer.logo}"
                            />
                        </div>
                        <div class="p-3 fw-normal text-center">
                            <h4>${organizer.naziv}</h4>
                        </div>
                    </a>
                </div>
            </div>
            `;
        }
      } else {
        window.location.href = "greska.html?error=" + this.status;
      }
    }
  };
  request.open("GET", `${fireBaseUrl}organizatoriFestivala.json`);
  request.send();
}

function searchOrganizers() {
  let searchInput = document.getElementById("organizerSearchInput").value;
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        organizersRow.innerHTML = "";
        let organizers = JSON.parse(request.responseText);

        for (let id in organizers) {
          let organizer = organizers[id];
          if (
            organizer.naziv.toLowerCase().includes(searchInput.toLowerCase())
          ) {
            organizersRow.innerHTML += `
            <div class="col mb-4">
                <div class="card border-4 rounded-3">
                    <a href="organisator.html?organizerId=${id}">
                        <div class="ratio ratio-16x9">
                            <img
                            class="card-img-top w-100 border-bottom-thick-orange"
                            src="${organizer.logo}"
                            />
                        </div>
                        <div class="p-3 fw-normal text-center">
                            <h4>${organizer.naziv}</h4>
                        </div>
                    </a>
                </div>
            </div>
            `;
          }
        }
      } else {
        window.location.href = "greska.html?error=" + this.status;
      }
    }
  };
  request.open("GET", `${fireBaseUrl}organizatoriFestivala.json`);
  request.send();
}
