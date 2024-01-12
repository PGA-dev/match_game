
let numberOfFaces = 5;
const animalArray = ['Butterfly.png', 'Unicorn.png', 'Wolf.png', 'Bear.png', 'Cat.png', 'Corgi.png', 'Deer.png', 'Dinosaur.png', 'Dog.png', 'Dragonfly.png', 'Falcon.png', 'Rabbit.png', 'Seahorse.png'];
let rounds = 0;
let score = 0;
let currentScore = 0;
// let highScore = 0;
const theLeftSide = document.getElementById('leftSide');
const theRightSide = document.getElementById('rightSide');
//const scoreBox = document.getElementById('scoreBox').innerHTML= getScore(score);
function generateFaces() {
    for (i = 0; i < numberOfFaces; i++) {
        let randomFace = Math.floor(Math.random() * animalArray.length);
        let face = document.createElement('img');
        face.src = 'image/' + animalArray[randomFace];
        let randomTop = Math.floor(Math.random() * 400) + 1;
        let randomLeft = Math.floor(Math.random() * 400) + 1;
        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        theLeftSide.appendChild(face);

    }
    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

    theLeftSide.lastChild.addEventListener('click', nextLevel);
    document.body.addEventListener('click', gameOver);
}


function nextLevel() {
    event.stopPropagation();
    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
    updateValues();
    updateCurrentScore();
    generateFaces('click');

}

function updateValues() {
    rounds += 1;
    numberOfFaces += 5;

}


function updateCurrentScore() {
    score += 100 * (rounds);
    return score;
}

function getScore(score) {
    currentScore = score;
    return currentScore;
}

function gameOver() {
    alert('You Lose!\n\n You won ' + rounds + ' rounds, and made:  ' + score + ' points! ');
    document.body.removeEventListener('click', gameOver);
    theLeftSide.lastChild.removeEventListener('click', nextLevel);
    reloadGame();
}
function reloadGame() {
    location.reload();
}

