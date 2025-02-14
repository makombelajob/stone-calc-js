/**
 *  Pierre bat Ciseaux
    Ciseaux bat Feuille
    Feuille bat Pierre
 */

const tableJeu = ["pierre", "ciseaux", "feuille"];
const userPlay = prompt("Jouer ").toLowerCase();

console.log(userPlay);
const playPc = Math.floor(Math.random(tableJeu) * tableJeu.length);
const valuePc = tableJeu[playPc];
console.log(valuePc);
// 1 => pierre
if ( playPc === 0 && userPlay === "ciseaux" ) {
    alert("Pc a gagner");
} else if (playPc === 0 && userPlay === "feuille") {
    alert("Vous avait battu le PC");
} else if (playPc === 0 && userPlay === "pierre") {
    alert("Match Null");
}
// 1 => ciseaux
if (playPc === 1 && userPlay === "ciseaux") {
    alert("Match Null");
} else if (playPc === 1 && userPlay === "pierre") {
    alert("Vous avait battu le PC");
} else if (playPc === 1 && userPlay === "feuille") {
    alert("Pc a gagner");
}
// 2 => feuille
if (playPc === 2 && userPlay === "pierre") {
    alert("Pc a ganger");
} else if (playPc === 2 && userPlay === "ciseaux") {
    alert("Vous avait battu le PC");
} else if (playPc === 2 && userPlay === "feuille") {
    alert("Match null");
}