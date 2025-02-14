const tableJeu = ["pierre", "ciseaux", "feuille"];

do {
    let userPlay = prompt("Jouer (pierre, ciseaux, feuille) ou 'stop' pour quitter :").toLowerCase();

    if (userPlay === "stop") {
        if (confirm("Voulez-vous Jouer?")) {
            alert("Jeu Interrompu !");
            break;
        } else {
            continue;
        }
    }

    if (!tableJeu.includes(userPlay)) {
        alert("Choix invalide ! Veuillez choisir entre pierre, ciseaux ou feuille.");
        continue;
    }

    const valuePc = tableJeu[Math.floor(Math.random() * tableJeu.length)];
    console.log(`Vous avez joué : ${userPlay}`);
    console.log(`Le PC a joué : ${valuePc}`);

    let resultat = "Match nul !";
    if (
        (userPlay === "pierre" && valuePc === "ciseaux") ||
        (userPlay === "ciseaux" && valuePc === "feuille") ||
        (userPlay === "feuille" && valuePc === "pierre")
    ) {
        resultat = "Vous avez gagné !";
    } else if (userPlay !== valuePc) {
        resultat = "Le PC a gagné !";
    }

    alert(resultat);

} while (true);








