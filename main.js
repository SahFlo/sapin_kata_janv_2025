//fonction pour gérer la hauteur du sapin
function afficherSapin(hauteur) {
    for (let i = 0; i < hauteur; i++) {
        // Espace avant
        let espaces = " ".repeat(hauteur - i - 1);
        
        // Construction du motif
        let motif = "*".repeat(i + 1) + "|" + "*".repeat(i + 1);
        
        // Affichage
        console.log(espaces + "/" + motif + "\\");
    }
}

// Exemple d'utilisation
afficherSapin(4);