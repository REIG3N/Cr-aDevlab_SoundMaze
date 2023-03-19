// récupérer la div "character" par son id
const container = document.getElementById("maze");
const character = document.getElementById('character');

let currentLigneCaracter = 1;
let currentColonneCaracter = 2;

function getPositionCaracter(ligne, colonne){
    let cadreGame = container.getBoundingClientRect();
    return {positionLeft:(cadreGame.width/16 )*(colonne - 1), positionTop:(cadreGame.height/8)*(ligne - 1)};
}

function setPositionCarracter(ligne, colonne){
    let newPosition = getPositionCaracter(ligne, colonne);
    character.style.top = newPosition.positionTop + 'px';
    character.style.left = newPosition.positionLeft + 'px';
}

setPositionCarracter(currentLigneCaracter, currentColonneCaracter);



// ---------------------------------------ajout du code de ml5.js

console.log("ml5 version:", ml5.version);

// Initialize a sound classifier method with SpeechCommands18w model. A callback needs to be passed.
// Options for the SpeechCommands18w model, the default probabilityThreshold is 0
const classifier = ml5.soundClassifier("SpeechCommands18w", modelReady);

// Options for the SpeechCommands18w model, the default probabilityThreshold is 85
const options = { probabilityThreshold: 0.85 };
// Two variable to hold the label and confidence of the result
let label;
let confidence;


function preload() {
    // Load SpeechCommands18w sound classifier model
// -82,21 +82,53 @@ function preload() {
    function setup() {
        noCanvas();
        // Create 'label' and 'confidence' div to hold results
        label = createDiv('Label: ...');
        confidence = createDiv('Confidence: ...');

        // Classify the sound from microphone in real time
        classifier.classify(gotResult);
    }

    function modelReady() {
        // classify sound
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

        console.log(results[0]);
        return results[0];

        // Show the first label and confidence
        label.html('Label: ' + results[0].label);
        confidence.html('Confidence: ' + nf(results[0].confidence, 0, 2)); // Round the confidence to 0.01

    }}





// ajouter un écouteur d'événements pour détecter les touches fléchées
function SoundMovement() {
    switch (gotResult()){
        case 'left':{
            currentColonneCaracter -= 1;
            let key = ".item_" + currentLigneCaracter + "" + currentColonneCaracter;
            let elt = document.querySelector(key);
            if(elt != null && elt.classList.contains("groundCase")){
                setPositionCarracter(currentLigneCaracter, currentColonneCaracter);
            }else{
                currentColonneCaracter += 1;
            }
            break;
        }
        case 'up':{
            currentLigneCaracter -= 1;
            let key = ".item_" + currentLigneCaracter + "" + currentColonneCaracter;
            let elt = document.querySelector(key);
            if(elt != null && elt.classList.contains("groundCase")){
                setPositionCarracter(currentLigneCaracter, currentColonneCaracter);
            }else{
                currentLigneCaracter += 1;
            }
            break;
        }
        case 'right':{
            currentColonneCaracter +=1;
            let key = ".item_" + currentLigneCaracter + "" + currentColonneCaracter;
            let elt = document.querySelector(key);
            if(elt != null && elt.classList.contains("groundCase")){
                setPositionCarracter(currentLigneCaracter, currentColonneCaracter);
            }else{
                currentColonneCaracter -= 1;
            }
            break;
        }
        case 'down':{
            currentLigneCaracter += 1;
            let key = ".item_" + currentLigneCaracter + "" + currentColonneCaracter;
            let elt = document.querySelector(key);
            if(elt != null && elt.classList.contains("groundCase")){
                setPositionCarracter(currentLigneCaracter, currentColonneCaracter);
            }else{
                currentLigneCaracter -= 1;
            }
            break;
        }
        default:
            break;
    }
}

SoundMovement();

