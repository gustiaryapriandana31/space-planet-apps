let space_rocket = document.getElementById('space-rocket');
let rocket = document.getElementById('rocket');
let cloud_01 = document.getElementById('cloud-01');
let cloud_02 = document.getElementById('cloud-02');
let cloud_03 = document.getElementById('cloud-03');
let cloud_04 = document.getElementById('cloud-04');

window.onscroll = () => {
    let y = window.scrollY;
    console.log(y);

    space_rocket.style.transform = `translateY(${(y * 0.8)}px) translateX(${-(y * 0.4)}px)`;
    rocket.style.transform = `translateY(${(y * 1.5)}px) rotate(180deg)`;
    cloud_01.style.transform = `translateX(${(y / 1.2)}px)`;
    cloud_02.style.transform = `translateX(${-(y / 1.3)}px)`;
    cloud_03.style.transform = `translateX(${(y / 1.2)}px)`;
    cloud_04.style.transform = `translateX(${-(y / 1.3)}px)`;
}


let buttons = document.querySelectorAll(".button");
let planets = document.getElementById("planets");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let target = this.getAttribute("data-target"); // Mendapatkan target dari data attribute

    let planetContent = document.querySelector(
      `.planet[data-planet="${target}"]`
    );

    if (planetContent) {
      // Menambah atau menghapus kelas hidden untuk semua planet yang tidak dipilih
      let allPlanets = document.querySelectorAll(".planet");
      allPlanets.forEach(function (planet) {
        if (planet.getAttribute("data-planet") === target) {
          planet.classList.remove("hidden");
        } else {
          planet.classList.add("hidden");
        }
      });

      // Mengisi div dengan konten sesuai target
      planets.innerHTML = planetContent.innerHTML;
      planets.classList.add("planet");
    } else {
      planets.innerHTML = "Konten tidak ditemukan";
      planets.style.color = "white";
    }
  });
});


// let buttons = document.querySelectorAll(".button");
// let planets = document.getElementById("planets");

// buttons.forEach(function(button) {
//   button.addEventListener("click", function() {
//     let target = this.getAttribute("data-target"); // Mendapatkan target dari data attribute

//     let planetContent = document.querySelector(`.planet[data-planet="${target}"]`);

//     if (planetContent) {
//       planets.innerHTML = planetContent.innerHTML; // Mengisi div dengan konten sesuai target
//       planets.classList.add("planet");
//     } else {
//       planets.innerHTML = "Konten tidak ditemukan";
//       planets.style.color = "white";
//     }
//   });
// });

// buttons.forEach(function(button) {
//   button.addEventListener("click", function() {
//     let target = this.getAttribute("data-target"); // Mendapatkan target dari data attribute
//     let planetData = planets.find(planet => planet.name === target); // Mencari data planet berdasarkan nama

//     if (planetData) {
//       planets.innerHTML = `
//         <h6 class="planet-name absolute top-28 left-64 w-40 bg-slate-300 p-1 text-lg font-bold font-audiowide rounded-xl text-center">${planetData.name}</h6>
//         <h6 class="planet-diameter absolute top-[85%] left-64 w-40 bg-slate-300 p-1 text-lg font-bold font-audiowide rounded-xl text-center">${planetData.diameter}</h6>
//         <div class="planet-profile box-sizing-border pl-20 py-10 flex flex-row items-center">
//           <img src="${planetData.image}" alt="Image of ${planetData.name}" class="planet-image animate-spin duration-300">
//           <div class=" bg-white/30 backdrop-blur-md w-1/2 h-full p-10 box-sizing-border rounded-2xl border border-white">
//             <h2 class="planet-title text-2xl font-bold text-center font-roboto mb-10 text-white">${planetData.name}</h2>
//             <p class="planet-details font-roboto text-md text-justify">${planetData.details}</p>
//           </div>
//         </div>
//       `;
//     } else {
//       planets.innerHTML = "Konten tidak ditemukan";
//       planets.style.color = "white";
//     }
//   });
// });
