let osallistujat = [];
let maara = Number(prompt("Kuinka monta osallistujaa?"));
for (let i = 0; i < maara; i++) {
    let nimi = prompt("Syötä osallistujan nimi:");
    osallistujat.push(nimi);
}
osallistujat.sort();
let lista = "<ol>";
for (let i = 0; i < osallistujat.length; i++) {
    lista += "<li>" + osallistujat[i] + "</li>";
}
lista += "</ol>";
document.getElementById("target").innerHTML = lista;