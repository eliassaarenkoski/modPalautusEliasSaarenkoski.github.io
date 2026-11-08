"use strict";
let numero = Math.floor(Math.random() * 4) ;
let nimi = prompt("anna nimesi :")
let tupa;
if (numero === 0) {
    tupa = "Rohkelikko";
}
else if (numero === 1) {
    tupa = "Luihuinen";
}
else if (numero === 2) {
    tupa = "Puuskupuh";
}
else if (numero === 3) {
    tupa = "Korpinkynsi";
}
document.querySelector("#target").innerHTML =
    `${nimi}, sinä olet ${tupa}.`;