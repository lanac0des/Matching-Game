let numberOfFaces = 5;
let level = 1;
let lvldisplay = document.querySelector('.lvl');
const theLeftSide = document.querySelector('#leftSide');
const theRightSide = document.querySelector('#rightSide');

function generateFaces() {
    for (let i = 0; i < numberOfFaces; i++) {
        let face = document.createElement('img');
        face.src = 'smile.png';
        let randomTop = Math.floor((Math.random() * 400) + 1);
        let randomLeft = Math.floor((Math.random() * 400) + 1);
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

let lvldis = document.createElement('h2');
lvldis.textContent ='Level: ' + level;
lvldisplay.appendChild(lvldis);

function levelUp() {
    lvldis.textContent ='Level: ' + level;
}

function nextLevel(event) {
    event.stopPropagation();
    numberOfFaces += 5;
    level++;

    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
    generateFaces();
    levelUp();
}

function gameOver() {
    alert('Game Over! Score: ' + (level - 1));
    document.body.removeEventListener('click', gameOver);
    leftSideImages.lastChild.removeEventListener('click', nextLevel);
}