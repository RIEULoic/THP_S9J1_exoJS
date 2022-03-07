//------------Fonctionnalité 1---------------------------------
// 1. Find and store the element we want to listen to events on.
{var clickerFooter = document.querySelector("footer"); //Au debut, je faisais document.getElementByTagName mais ça foirait par la suite. Le clickerFooter.addEventListener("click", onClickerFooter); me retournait 'fonction non définie'.Pourquoi...Je ne saiiiis paaaas! Sans doute une sombre histoire d'array qui n'en est pas vraiment un (Oui ça doit etre ça).

// 2. Define the function that will respond to the event.
// callback 
let onClickFooter = function() {;
  console.log("clique");
};

// 3. Add the event listener for the element and function
clickerFooter.addEventListener("click", onClickFooter);
}
/*Autre synthax :
let clickerFooter = document.querySelector("footer");
clickerFooter.addEventListener("click", function(){
  console.log("clique")});
*/

//------------Fonctionnalité 1 bis----------------------------
{let footerCounter = 0;
clickerFooter.addEventListener("click", function() {
  footerCounter++;
  console.log("clic numéro " + footerCounter);
})
}

//------------Fonctionnalité 2---------------------------------

let toggleButton = document.getElementsByClassName("navbar-toggler")[0]; //là il faut mettre un index de 0
let hamburgerMenu = document.getElementById("navbarHeader");             //et là non !! Quelle merde. Je pense que c parce que Element est au singulier...ou pas (ça paraitrait logique)
toggleButton.addEventListener("click", function() {
  hamburgerMenu.classList.toggle("collapse"); //Si je mets "collapse bg-dark" qui est le nom complet de la classe, ça bug. oO
});
//Il existe une fonction qui permet de rajouter une classe si elle n'est pas déjà présente et l'enlever si elle est déjà présente. C'est "toggle". Tu peux l'utiliser ainsi : elementDuDOM.classList.toggle("nomDeLaClasse") 

//-----------Fonctionnalité 3-----------------------------------
{let firstCard = document.getElementsByClassName("col-md-4")[0];
//console.log(firstCard);
let clickerButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
//console.log(clickerButton);
clickerButton.addEventListener("click", function() {
  firstCard.style.color = "red";
})
}

//----------Fonctionnalité 4------------------------------------
{let secondCard = document.getElementsByClassName("col-md-4")[1];
let clickerButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
clickerButton.addEventListener("click", function() {
  if (secondCard.style.color === "green") {
    secondCard.style.color = "black";
  }
  else {
    secondCard.style.color = "green";
  }
})
}
/*Reprend le code de la fonctionnalité 3 et adapte-le pour qu'il marche sur la 2ème card (et en remplaçant le rouge par du vert).
Maintenant, pour le toggle, il va falloir te faire un petit if / else dans ton AddEventListener. On te donne le début :
if (secondCard.style.color === 'green'){
secondCard.style.color = '' ;
}else … 
*/

//-------------Fonctionnalité 5-------------------------
{let CDN = document.querySelector('[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');
let clickerNavBar = document.getElementById("navbarHeader");
clickerNavBar.addEventListener("dblclick", function() {
  if (CDN.href === 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css') {
    CDN.href = '';
  }
  else {
    CDN.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
  }
})
}