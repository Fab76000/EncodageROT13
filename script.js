// encodage ROT_13 ou chiffre de César
let cle = 13;
let chaine = "CODE";
let chaineEncodee = "";

for (let i = 0; i < chaine.length; i++) {

    let lettre = chaine[i];
    let valeurLettre = lettre.codePointAt(0);
    let nouvelleValeur;

    let borneInferieur = String.fromCodePoint(65 + 26 - cle);

    if (lettre >= borneInferieur && lettre <= "Z") {
        nouvelleValeur = valeurLettre + cle - 26;
    } else { nouvelleValeur = valeurLettre + cle }

    let nouveauSymbole = String.fromCodePoint(nouvelleValeur);
    chaineEncodee += nouveauSymbole
}

console.log(chaineEncodee);

// avec le modulo avec variables intermédiaires et autre valeur de clé

let cle = 18;
let chaine = "JAVASCRIPT";
let chaineEncodee = "";

for (let i = 0; i < chaine.length; i++) {
    lettre = chaine[i];
    valeurLettre = lettre.codePointAt(0);
    positionAlphabetLettreClaire = valeurLettre - 65;
    positionAlphabetLettreEncodee = (positionAlphabetLettreClaire + cle) % 26;
    nouvelleValeur = positionAlphabetLettreEncodee + 65;
    nouvelleLettre = String.fromCodePoint(nouvelleValeur);
    chaineEncodee += nouvelleLettre;
}

console.log(chaineEncodee);


// avec le modulo sans variables intermédiaires et autre valeur de clé

let cle = 18;
let chaine = "JAVASCRIPT";
let chaineEncodee = "";

for (let i = 0; i < chaine.length; i++) {
    lettre = chaine[i];
    nouveauSymbole = String.fromCodePoint((lettre.codePointAt(0) - 65 + cle) % 26 + 65);
    chaineEncodee += nouveauSymbole;

}

console.log(chaineEncodee);