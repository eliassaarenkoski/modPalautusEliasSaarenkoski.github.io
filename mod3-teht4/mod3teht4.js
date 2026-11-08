let luvut = [];
let luku;
while (luku !== 0) {
    luku = Number(prompt("Syötä jokin luku. 0 lopettaa kysymisen : "));
    if (luku !== 0) {
        luvut.push(luku);
    }
}
luvut.sort((a, b) => b - a);
for (let i = 0; i < luvut.length; i++) {
    console.log(luvut[i]);
}