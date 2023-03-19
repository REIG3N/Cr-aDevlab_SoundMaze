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
<<<<<<< HEAD
   let newPosition = getPositionCaracter(ligne, colonne);
   character.style.top = newPosition.positionTop + 'px';
   character.style.left = newPosition.positionLeft + 'px';
=======
    let newPosition = getPositionCaracter(ligne, colonne);
    character.style.top = newPosition.positionTop + 'px';
    character.style.left = newPosition.positionLeft + 'px';
>>>>>>> 2cbfba43d65775379d088c40f664e2c95566f8dd
}

setPositionCarracter(currentLigneCaracter, currentColonneCaracter);

// ajouter un écouteur d'événements pour détecter les touches fléchées
document.addEventListener('keydown', (event) => {
    // déplacer la div selon la touche appuyée
    switch (event.key) {

        case 'ArrowLeft':{
            currentColonneCaracter -= 1;
            let key = ".item_" + currentLigneCaracter + "" + currentColonneCaracter;
            let elt = document.querySelector(key);
            if(elt != null && elt.classList.contains("groundCase")){
<<<<<<< HEAD
               setPositionCarracter(currentLigneCaracter, currentColonneCaracter);
            }else{
               currentColonneCaracter += 1;
=======
                setPositionCarracter(currentLigneCaracter, currentColonneCaracter);
            }else{
                currentColonneCaracter += 1;
>>>>>>> 2cbfba43d65775379d088c40f664e2c95566f8dd
            }
            break;
        }
        case 'ArrowUp':{
            currentLigneCaracter -= 1;
            let key = ".item_" + currentLigneCaracter + "" + currentColonneCaracter;
            let elt = document.querySelector(key);
            if(elt != null && elt.classList.contains("groundCase")){
<<<<<<< HEAD
               setPositionCarracter(currentLigneCaracter, currentColonneCaracter);
            }else{
               currentLigneCaracter += 1;
=======
                setPositionCarracter(currentLigneCaracter, currentColonneCaracter);
            }else{
                currentLigneCaracter += 1;
>>>>>>> 2cbfba43d65775379d088c40f664e2c95566f8dd
            }
            break;
        }
        case 'ArrowRight':{
            currentColonneCaracter +=1;
            let key = ".item_" + currentLigneCaracter + "" + currentColonneCaracter;
            let elt = document.querySelector(key);
            if(elt != null && elt.classList.contains("groundCase")){
<<<<<<< HEAD
               setPositionCarracter(currentLigneCaracter, currentColonneCaracter);
            }else{
               currentColonneCaracter -= 1;
=======
                setPositionCarracter(currentLigneCaracter, currentColonneCaracter);
            }else{
                currentColonneCaracter -= 1;
>>>>>>> 2cbfba43d65775379d088c40f664e2c95566f8dd
            }
            break;
        }
        case 'ArrowDown':{
            currentLigneCaracter += 1;
            let key = ".item_" + currentLigneCaracter + "" + currentColonneCaracter;
            let elt = document.querySelector(key);
            if(elt != null && elt.classList.contains("groundCase")){
<<<<<<< HEAD
               setPositionCarracter(currentLigneCaracter, currentColonneCaracter);
            }else{
               currentLigneCaracter -= 1;
=======
                setPositionCarracter(currentLigneCaracter, currentColonneCaracter);
            }else{
                currentLigneCaracter -= 1;
>>>>>>> 2cbfba43d65775379d088c40f664e2c95566f8dd
            }
            break;
        }
        default:
            break;
    }
});