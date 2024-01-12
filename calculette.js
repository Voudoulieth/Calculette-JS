console.dir(resultat);

// déterminer les actions a executer par les boutons
// associer l'action add au bouton btnadd
// associer l'action soustraction au bouton btnsous

// document.querySelector("#btnadd").addEventListener("click", addition);
document.querySelector("#btnadd").addEventListener("click", ()=>calcul(add));
document.querySelector("#btnsous").addEventListener("click", ()=>calcul(soustraction));
document.querySelector("#btnmult").addEventListener("click", multiplication);
document.querySelector("#btndiv").addEventListener("click", division);

// récuperer la saisie de nb1

// récuperer la saisie de nb2

// coder les actions
// function addition() {
//     // récupérer la saisie nb1
//     let nombre1 = document.querySelector("#nb1").value;
//     // let nombre1 = Math.floor(20 * Math.random());
//   console.log('nb1 : '+ nombre1);

//   let nombre2 = document.querySelector("#nb2").value;
//     // let nombre2 = Math.floor(20 * Math.random());
//   console.log ('nb2 : ' + nombre2);

//   let somme = Number(nombre1) + Number(nombre2);
//   console.log("J'aditionne : " + somme);

//  // mettre à jour la div en ajoutant "<p>Le résultat est 14</p>"

//  document.querySelector("#resultat").innerHTML = "<p>Le résultat est " + somme + "</p>"

// }


let add = (nombre1,nombre2)=> {
//   // récupérer la saisie nb1
//   nombre1 = document.querySelector("#nb1").value;
//   // let nombre1 = Math.floor(20 * Math.random());
// console.log('nb1 : '+ nombre1);

//   nombre2 = document.querySelector("#nb2").value;
//   // let nombre2 = Math.floor(20 * Math.random());
// console.log ('nb2 : ' + nombre2);

let somme = Number(nombre1) + Number(nombre2);
console.log("J'aditionne : " + somme);

// mettre à jour la div en ajoutant "<p>Le résultat est 14</p>"

// document.querySelector("#resultat").innerHTML = "<p>Le résultat est " + somme + "</p>"
  return somme;
}

function calcul(unefonction){
  
  let nb1 = document.querySelector("#nb1").value;
//   // let nombre1 = Math.floor(20 * Math.random());
// console.log('nb1 : '+ nombre1);

  let nb2 = document.querySelector("#nb2").value;
//   // let nombre2 = Math.floor(20 * Math.random());
// console.log ('nb2 : ' + nombre2);

  total = unefonction(nb1,nb2);
  document.querySelector("#resultat").innerHTML = "<p>Le résultat est " + total + "</p>"

}
// function total1()
// let total = 
// document.querySelector("#resultat").innerHTML = "<p>Le résultat est " + total + "</p>"



function soustraction() {
    // nombre1 = document.querySelector("#nb1").value;
    // console.log('nb1 : '+ nombre1);
  
    // nombre2 = document.querySelector("#nb2").value;
    // console.log ('nb2 : ' + nombre2);

    let reste = Number(nombre1) - Number(nombre2);
  console.log("je soustrait : " + reste);

  // document.querySelector("#resultat").innerHTML = "<p>Le résultat est " + reste + "</p>"

  return reste;
}

function multiplication() {
    nombre1 = document.querySelector("#nb1").value;
    console.log('nb1 : '+ nombre1);
  
    nombre2 = document.querySelector("#nb2").value;
    console.log ('nb2 : ' + nombre2);

    let produit = Number(nombre1) * Number(nombre2);
  console.log("je multiplie : " + produit);

  document.querySelector("#resultat").innerHTML = "<p>Le résultat est " + produit + "</p>"
}

function division() {
    nombre1 = document.querySelector("#nb1").value;
    console.log('nb1 : '+ nombre1);
  
    nombre2 = document.querySelector("#nb2").value;
    console.log ('nb2 : ' + nombre2);

    let dividende = Number(nombre1) / Number(nombre2);
  console.log("je divise : " + dividende);

  document.querySelector("#resultat").innerHTML = "<p>Le résultat est " + dividende + "</p>"
  
}


// calculer nb1 + nb2
// let total =  division()
// document.querySelector("#resultat").innerHTML = "<p>Le résultat est " + total + "</p>"
