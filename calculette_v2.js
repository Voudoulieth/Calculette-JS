console.dir(resultat);

// déterminer les actions a executer par les boutons
// associer l'action add au bouton btnadd
// associer l'action soustraction au bouton btnsous

// document.querySelector("#btnadd").addEventListener("click", addition);
document.querySelector("#btnadd").addEventListener("click",  ()=>calcul(add));
document.querySelector("#btnsous").addEventListener("click", ()=>calcul(sous));
document.querySelector("#btnmult").addEventListener("click", ()=>calcul(mult));
document.querySelector("#btndiv").addEventListener("click",  ()=>calcul(divide));

document.querySelector("#nb1").addEventListener("click", toto);


function toto() {
  console.log("coucou");
} 

let add  = (nombre1,nombre2) => Number(nombre1) + Number(nombre2); // fais la même chose qu'un return
let sous = (nombre1,nombre2) => Number(nombre1) - Number(nombre2);
let mult = (nombre1, nombre2) => Number(nombre1) * Number(nombre2);
let divide = (nombre1, nombre2) => Number(nombre1) / Number(nombre2);

function calcul(unefonction){
  
  let nb1 = document.querySelector("#nb1").value;
  // let nombre1 = Math.floor(20 * Math.random());


  let nb2 = document.querySelector("#nb2").value;
  // let nombre2 = Math.floor(20 * Math.random());


  let total = unefonction(nb1,nb2);
  document.querySelector("#resultat").innerHTML = "<p>Le résultat est " + total + "</p>"

}


