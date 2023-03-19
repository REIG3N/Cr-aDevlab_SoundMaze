
// récupérer la div "character" par son id
const character = document.getElementById('character');

const wall = document.querySelectorAll('.wallCase');


const container = document.getElementById("maze");
// affiche la position du container par rapport à la fenêtre
console.log(container.getBoundingClientRect());


// obtenir la position de l'eelment "character"
let positionX = character.offsetLeft;
let positionY = character.offsetTop;

// // fonction iscollied 
function isCollide(character, wall) {
if(!((a.y + a.height) < (b.y)))
    return 1;
else if(!(a.y > (b.y + b.height)))
    return 2;
else if(!((a.x + a.width) < b.x))
    return 3;
else if(!(a.x > (b.x + b.width)))
    return 4;
return false;
}

// ajouter un écouteur d'événements pour détecter les touches fléchées
document.addEventListener('keydown', (event) => {
    // déplacer la div selon la touche appuyée
    switch (event.key) {

        
        case 'ArrowLeft':
            positionX -= 80;
            console.log(positionX +  " positionX");
            console.log(positionY + " positionY");
            break;
        case 'ArrowUp':
            positionY -= 80;
            console.log(positionX + " positionX");
            console.log(positionY + " positionY");
            break;
        case 'ArrowRight':
            positionX += 80;
            console.log(positionX + " positionX");
            console.log(positionY + " positionY");
            break;
        case 'ArrowDown':
            positionY += 80;
            console.log(positionX + " positionX");
            console.log(positionY + " positionY");
            break;
        default:
            break;
    }
    // mettre à jour la position de la div
    character.style.top = positionY + 'px';
    character.style.left = positionX + 'px';
});


// ajout du code de ml5.js

console.log("ml5 version:", ml5.version);

// Initialize a sound classifier method with SpeechCommands18w model. A callback needs to be passed.
let classifier;
// Options for the SpeechCommands18w model, the default probabilityThreshold is 0
const options = { probabilityThreshold: 0.9 };
// Two variable to hold the label and confidence of the result
let label;
let confidence;

function preload() {
  // Load SpeechCommands18w sound classifier model
  classifier = ml5.soundClassifier('SpeechCommands18w', options);
}

function setup() {
  noCanvas();
  // Create 'label' and 'confidence' div to hold results
  label = createDiv('Label: ...');
  confidence = createDiv('Confidence: ...');
  // Classify the sound from microphone in real time
  classifier.classify(gotResult);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  console.log(results[0]);
  // Show the first label and confidence
  label.html('Label: ' + results[0].label);
  confidence.html('Confidence: ' + nf(results[0].confidence, 0, 2)); // Round the confidence to 0.01
}
