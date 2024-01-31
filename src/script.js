// Darkmod
const themebouton = document.getElementById("theme");

themebouton.addEventListener("click", () => {
  let entry = document.querySelectorAll(".entrer");
  let bouton = document.querySelectorAll("button");
  let tab = document.querySelector(".tabs");
  let cont = document.querySelectorAll(".content");
  document.body.classList.toggle("dark");
  tab.classList.toggle("dark");
  tab.classList.toggle("darktab");
  entry.forEach((element) => {
    element.classList.toggle("dark");
  });
  bouton.forEach((e) => {
    e.classList.toggle("dark");
  });
  cont.forEach((e) => {
    e.classList.toggle("dark");
  });
});

//formulaire
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let email = document.querySelector("#email");

  if (email.value == "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ email ne peut pas être vide";

    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }

  let prenom = document.querySelector("#prenom");

  if (prenom.value.length < 2) {
    errorContainer.classList.add("visible");
    prenom.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ prenom doit contenir au moins 6 caractères";

    errorList.appendChild(err);
  } else {
    prenom.classList.add("success");
  }

  let nom = document.querySelector("#nom");

  if (nom.value.length < 2) {
    errorContainer.classList.add("visible");
    nom.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ nom doit contenir au moins 6 caractères";

    errorList.appendChild(err);
  } else {
    nom.classList.add("success");
  }

  let radios = document.querySelectorAll("input[type=radio]");
  let radiosChecked = false;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radiosChecked = true;
    }
  }
  if (!radiosChecked) {
    errorContainer.classList.add("visible");
    let err = document.createElement("li");
    err.innerText = "Vous devez choisir une option";
    errorList.appendChild(err);
  }

  let axe = document.querySelector("#axe");
  if (axe.value == "") {
    errorContainer.classList.add("visible");
    axe.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Vous devez choisir un axe";
    errorList.appendChild(err);
  } else {
    axe.classList.add("success");
  }

  if (errorList.children.length == 0) {
    let success = document.querySelector(".message-success");
    success.classList.add("visible");
  }
});

// Swiper

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
});

// Tabs

document.querySelectorAll("li.tab").forEach((li) => {
  li.addEventListener("click", () => {
    document.querySelector("div.active").classList.remove("active");
    document.querySelector(`div.a-${li.id}`).classList.add("active");
    document.querySelector("li.activebouton").classList.remove("activebouton");
    document.querySelector(`li.a-${li.id}`).classList.add("activebouton");
  });
});
