
// récupérer la div "character" par son id
const character = document.getElementById('character');

const wall = document.querySelectorAll('.wallCase');

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