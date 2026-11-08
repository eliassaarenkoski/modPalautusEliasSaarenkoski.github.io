let luvut = [];
let luku;
while (true) {
    luku = Number(prompt("Syötä luku:"));
    if (luvut.includes(luku)) {
        console.log("Luku on annettu!");
        break;
    }
    luvut.push(luku);
}
luvut.sort((a, b) => a - b);
for (let i = 0; i < luvut.length; i++) {
    console.log(luvut[i]);
}