/**
 *  Pierre bat Ciseaux
    Ciseaux bat Feuille
    Feuille bat Pierre
 */
const tableJeu = ["pierre", "ciseaux", "feuille"];

const userPlay = prompt("Jouer ").toLowerCase();
console.log(`Vous avez joué : ${userPlay}`);

const playPc = Math.floor(Math.random() * tableJeu.length);
const valuePc = tableJeu[playPc];
console.log(`Le PC a joué : ${valuePc}`);

if (!tableJeu.includes(userPlay)) {
    alert("Choix invalide, veuillez choisir entre pierre, ciseaux ou feuille.");
} else if (userPlay === valuePc) {
    alert("Match nul !");
} else if (
    (userPlay === "pierre" && valuePc === "ciseaux") ||
    (userPlay === "ciseaux" && valuePc === "feuille") ||
    (userPlay === "feuille" && valuePc === "pierre")
) {
    alert("Vous avez gagné !");
} else {
    alert("Le PC a gagné !");
}