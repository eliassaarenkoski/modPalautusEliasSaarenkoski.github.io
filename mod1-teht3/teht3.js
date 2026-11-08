"use strict";
    let luku1 = parseInt(prompt("anna ensimmäinen luku: "));
    let luku2 = parseInt(prompt("anna ensimmäinen luku: "));
    let luku3 = parseInt(prompt("anna ensimmäinen luku: "));

let yhteensa = luku1 + luku2 + luku3
let keskiarvo = yhteensa / 3;
let tulo = luku1 * luku2 * luku3 ;
    document.querySelector("#target").innerHTML = `Lukujen summa on : ${yhteensa }
    lukujen tulo on ${tulo} ja keskiarvo on  ${keskiarvo}`


