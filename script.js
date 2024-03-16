const modal = document.querySelector(".modal");
const openBtn = document.querySelector("#open-modal");

const closeBtn = document.querySelector("#modal-close-btn");

openBtn.onclick = function () {
  modal.classList.add("modal-show");
};

closeBtn.onclick = function () {
  modal.classList.remove("modal-show");
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("modal-show");
  }
};

// const modal = document.querySelectorAll(".modal");
// const openBtn = document.querySelectorAll("#open-modal");
// const closeBtn = document.querySelectorAll("#modal-close-btn");

// openBtn.forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     modal[index].classList.add("modal-show");
//   });
// });

// closeBtn.forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     modal[index].classList.remove("modal-show");
//   });
// });

// window.onclick = function (event) {
//   if (event.target.classList[0] == "modal") {
//     modal.forEach((mod) => {
//       mod.addEventListener("click", () => {
//         mod.classList.remove("modal-show");
//       });
//     });
//   }
// };
