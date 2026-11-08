let koirat = [];

for (let i = 0; i < 6; i++) {
    let nimi = prompt("Syötä koiran nimi:");
    koirat.push(nimi);
}
koirat.sort().reverse();
let lista = "<ul>";
for (let i = 0; i < koirat.length; i++) {
    lista += "<li>" + koirat[i] + "</li>";
}
lista += "</ul>";
document.getElementById("target").innerHTML = lista;