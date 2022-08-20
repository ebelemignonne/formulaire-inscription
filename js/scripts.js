// On va chercher les différents éléments de notre page
const pages = document.querySelectorAll(".page")
const header = document.querySelector("header")
const nbPages = pages.length // Nombre de pages du formulaire
let pageActive = 1

// On attend le chargement de la page
window.onload = () => {
    // On affiche la 1ère page du formulaire
    document.querySelector(".page").style.display = "initial"

    // On affiche les numéros des pages dans l'entête
    // On parcourt la liste des pages
    pages.forEach((page, index) => {
        // On crée l'élément "numéro de page"
        let element = document.createElement("div")
        element.classList.add("page-num")
        element.id = "num" + (index + 1)
        if(pageActive === index + 1){
            element.classList.add("active")
        }
        element.innerHTML = index + 1
        header.appendChild(element)
    })

    // On gère les boutons "suivant"
    let boutons = document.querySelectorAll(".next")

    for(let bouton of boutons){
        bouton.addEventListener("click", pageSuivante)
    }

    // On gère les boutons "suivant"
    boutons = document.querySelectorAll(".prev")

    for(let bouton of boutons){
        bouton.addEventListener("click", pagePrecedente)
    }
}

/**
 * Cette fonction fait avancer le formulaire d'une page
 */
function pageSuivante(){
    // On masque toutes les pages
    for(let page of pages){
        page.style.display = "none"
    }

    // On affiche la page suivante
    this.parentElement.nextElementSibling.style.display = "initial"

    // On "désactive" la page active
    document.querySelector(".active").classList.remove("active")

    // On incrémente pageActive
    pageActive++

    // On "active" le nouveau numéro
    document.querySelector("#num"+pageActive).classList.add("active")
}

/**
 * Cette fonction fait reculer le formulaire d'une page
 */
function pagePrecedente(){
    // On masque toutes les pages
    for(let page of pages){
        page.style.display = "none"
    }

    // On affiche la page suivante
    this.parentElement.previousElementSibling.style.display = "initial"

    // On "désactive" la page active
    document.querySelector(".active").classList.remove("active")

    // On incrémente pageActive
    pageActive--

    // On "active" le nouveau numéro
    document.querySelector("#num"+pageActive).classList.add("active")
}

//On recupere les information pour les stocker dans un objet

const form = document.querySelector("form");

//On recupere les information de l'eleve dans le html pour les afficher dans la console




//recuperation des infos de l'eleve dans le html et les afficher dans la cosole
form.addEventListener("submit", (e) => {
  e.preventDefault();
  eleve ={
    Nom: e.target.nom.value,
    Prénom: e.target.prenom.value,
    sexe: e.target.sexe.value,
    date_naissance: e.target.date_naissance.value,
    lieu_naissance: e.target.lieu_naissance.value,
    classe: e.target.classe.value
  }
  console.log(eleve);

  tuteur={
    Nom_du_tuteur: e.target.nom_t.value,
    Prénom_du_tuteur: e.target.prenom_t.value,
    Numéro_de_téléphone: e.target.tel.value,
    Email: e.target.email.value
  }
  console.log(tuteur);

});

let info = ['eleve', 'tuteur']
console.log(info);

    

function result() {
  let nom = document.getElementById("nom").value;
  let prenom = document.getElementById("prenom").value;
  let sexe = document.getElementById("sexe").value;
  let date_naissance = document.getElementById("date_naissance").value;
  let lieu_naissance = document.getElementById("lieu_naissance").value;
  let classe = document.getElementById("classe").value;
  console.log(result);
}

