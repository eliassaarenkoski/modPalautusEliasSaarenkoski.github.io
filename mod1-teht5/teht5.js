let vuosi = Number(prompt("Syötä vuosiluku:"));

if (vuosi % 400 == 0) {
    document.querySelector("#target").innerHTML = "Vuosi on karkausvuosi.";

} else if (vuosi % 100 === 0) {
    document.querySelector("#target").innerHTML = "Vuosi ei ole karkausvuosi.";

} else if (vuosi % 4 == 0) {
    document.querySelector("#target").innerHTML = "Vuosi on karkausvuosi.";

} else {
    document.querySelector("#target").innerHTML = "Vuosi ei ole karkausvuosi.";
}