// Créer une application qui génère des haïkus aléatoires en combinant différentes phrases pré-enregistrées selon la structure traditionnelle 5-7-5.
// Button qui relance la génération
// Afficher les phrases dans le DOM
// Suivre les phrases déjà séléctionné

// Variables

const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const btnGenerate = document.querySelector('.btn-gen');
// Phrases 5 syllables

let  fiveSyllables = [
    "Le vent souffle fort",
    "Une feuille tombe",
    "Le chat dort tranquille",
    "Les étoiles brillent",
    "Matin de printemps",
    "La mer est calme",
    "Un oiseau chante",
    "Soleil d’été chaud",
    "Lune dans le ciel",
    "Douce pluie d’automne",
    "Un enfant sourit",
    "Nuit sans un bruit",
    "Le feu crépite",
    "Un livre ouvert",
    "Le temps s’arrête",
    "Fleur de cerisier",
    "Ruisseau qui murmure",
    "Brise matinale",
    "Chanson d’oiseau",
    "L’arbre se balance"
]

//  Phrases 7 Syllables

let sevenSyllables = [
    "Le soleil se lève doucement",
    "Les vagues frappent les rochers",
    "Un papillon vole en silence",
    "Les feuilles dansent avec le vent",
    "Le crépuscule embrase le ciel",
    "Le chant des grillons commence",
    "La lune éclaire le jardin",
    "Le chat guette dans l’ombre",
    "Les enfants jouent au ballon",
    "Une étoile filante passe",
    "Les fleurs s’ouvrent au matin",
    "Un oiseau se pose là-haut",
    "Le ruisseau coule doucement",
    "Les nuages couvrent le ciel",
    "Les montagnes touchent le ciel",
    "Une brise chaude souffle",
    "Les bateaux voguent sur l’eau",
    "Le silence règne la nuit",
    "Les arbres murmurent des secrets",
    "Les papillons dansent en été"
]

let selectedLineFive = [];
let selectedLineSeven = [];

// Choix aléatoire dans tableau
function pickRandom(array) {
    chosenLine = array[Math.floor(Math.random() * array.length)];
    const reduceArray = array.reduce();
    selectedLineFive.push(chosenLine);
    return chosenLine
}

// Générateur
function generateHaiku(){
    line1.innerHTML = pickRandom(fiveSyllables);
    line2.innerHTML = pickRandom(sevenSyllables);
    line3.innerHTML = pickRandom(fiveSyllables);
}

generateHaiku();

// Btn qui génère un nouveau haiku
btnGenerate.addEventListener('mouseup', generateHaiku)

// SetInterval génération automatique

async function getPhrase() {
    try {
        const response = await fetch(url);
        let data = response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}