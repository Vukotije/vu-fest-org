const fireBaseUrl = "https://wd-sv-67-2023-default-rtdb.firebaseio.com/";
const organizerId = getOrganizerId();
const organizerName = document.getElementById("organizerName");
const organizerAddress = document.getElementById("organizerAddress");
const organizerFoundingYear = document.getElementById(
  "organizerFoundingYear"
);
const organizerPhone = document.getElementById("organizerPhone");
const organizerEmail = document.getElementById("organizerEmail");
const organizerLogo = document.getElementById("organizerLogo");

let festivalsCode;
const searchButton = document.getElementById("festivalButtonSearch");

getOrganizerInfo();

searchButton.addEventListener("click", () => searchFestivals(festivalsCode));

function getOrganizerId() {
  let params = new URLSearchParams(window.location.search);
  let organizerId = params.get("organizerId");
  return organizerId;
}

function getOrganizerInfo() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        let organizer = JSON.parse(request.responseText);

        organizerName.innerHTML = organizer.naziv;
        organizerAddress.innerHTML = organizer.adresa;
        organizerFoundingYear.innerHTML = organizer.godinaOsnivanja;
        organizerPhone.innerHTML = organizer.kontaktTelefon;
        organizerEmail.innerHTML = organizer.email;
        organizerLogo.src = organizer.logo;
        festivalsCode = organizer.festivali;
        getAllOrganizerFestivals(festivalsCode);
      } else {
        window.location.href = "greska.html?error=" + this.status;
      }
    }
  };
  request.open(
    "GET",
    `${fireBaseUrl}/organizatoriFestivala/${organizerId}.json`
  );
  request.send();
}

/* Festival html card prototype
<div class="col mb-4">
    <div class="card border-4 rounded-3">
        <a href="festival.html">
            <div class="ratio ratio-16x9">
                <img
                class="card-img-top w-100 border-bottom-thick-pink"
                src="https://i.imgur.com/nIhAjPQ.jpeg"
                />
            </div>
            <div class="p-3 fw-normal text-center">
                <h4>Festival Ostrvske Muzike</h4>
            </div>
        </a>
    </div>
</div>
*/

const festivalRow = document.getElementById("festivalRow");

function getAllOrganizerFestivals(festivalsCode) {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        let festivals = JSON.parse(request.responseText);
        festivalRow.innerHTML = "";

        for (let id in festivals) {
          let festival = festivals[id];
          festivalRow.innerHTML += `
            <div class="col mb-4">
                <div class="card border-4 rounded-3">
                    <a href="festival.html?festivalId=${id}&festivalsId=${festivalsCode}">
                        <div class="ratio ratio-16x9">
                            <img
                            class="card-img-top w-100 border-bottom-thick-pink"
                            src="${festival.slike}"
                            />
                        </div>
                        <div class="p-3 fw-normal text-center d-flex align-items-center justify-content-center"
                            style="min-height: 100px"
                            >
                            <h4>${festival.naziv}</h4>
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
  request.open("GET", `${fireBaseUrl}festivali/${festivalsCode}.json`);
  request.send();
}

function searchFestivals(festivalsCode) {
  let festivalType = document.getElementById("dropdownFestivalType").value;
  let festivalName = document.getElementById("festivalSearchInput").value;
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        festivalRow.innerHTML = "";
        let festivals = JSON.parse(request.responseText);

        for (let id in festivals) {
          let festival = festivals[id];
          if (festivalType === "Svi") {
            festivalType = festival.tip;
          }
          if (
            festival.naziv.toLowerCase().includes(festivalName.toLowerCase()) &&
            festival.tip === festivalType
          ) {
            festivalRow.innerHTML += `
            <div class="col mb-4">
                <div class="card border-4 rounded-3">
                    <a href="festival.html?festivalId=${id}">
                        <div class="ratio ratio-16x9">
                            <img
                            class="card-img-top w-100 border-bottom-thick-pink"
                            src="${festival.slike}"
                            />
                        </div>
                        <div class="p-3 fw-normal text-center d-flex align-items-center justify-content-center"
                            style="min-height: 100px"
                            >
                            <h4>${festival.naziv}</h4>
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
  request.open("GET", `${fireBaseUrl}festivali/${festivalsCode}.json`);
  request.send();
}
