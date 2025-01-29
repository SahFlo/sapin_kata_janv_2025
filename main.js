function afficherSapin(hauteur) {
  for (let i = 1; i <= hauteur; i++) {
    let character = "//"
    for(let k = hauteur; k > i; k--) {
        character = "*" + character
   
    // for(let j = 1; j < i + 1; j++){
    //     character = character + "#"
    // }
    }
    console.log(character)
  }
}

// Exemple d'utilisation
afficherSapin(4);
