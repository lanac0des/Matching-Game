let numberOfFaces = 5;
let level = 1;
let icon = 1;
let lvldisplay = document.querySelector('.lvl');
const icon1 = document.querySelector('#icons');
const theLeftSide = document.querySelector('#leftSide');
const theRightSide = document.querySelector('#rightSide');

//icon1.addEventListener('click', changeIcon(2));
function changeIcon(x) {
    if (x = 1) {
        icon = 1;
    } else if (x = 2) {
        icon = 2;
    }
    nextLevel();
}

function generateFaces(z) {
    if (z = 1) {
        for (let i = 0; i < numberOfFaces; i++) {
        let face = document.createElement('img');
        face.src = 'peach.png';
        face.style.width = '150px';
        let randomTop = Math.floor((Math.random() * 400) + 1);
        let randomLeft = Math.floor((Math.random() * 400) + 1);
        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        theLeftSide.appendChild(face);
        }
    } else if (z = 2) {
        for (let i = 0; i < numberOfFaces; i++) {
        let face = document.createElement('img');
        face.src = 'smile.png';
        face.style.width = '150px';
        let randomTop = Math.floor((Math.random() * 400) + 1);
        let randomLeft = Math.floor((Math.random() * 400) + 1);
        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        theLeftSide.appendChild(face);
        }
    } else {
        for (let i = 0; i < numberOfFaces; i++) {
        let face = document.createElement('img');
        face.src = 'smile.png';
        let randomTop = Math.floor((Math.random() * 400) + 1);
        let randomLeft = Math.floor((Math.random() * 400) + 1);
        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        theLeftSide.appendChild(face);
        }
    }

    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
    
    //icon1.addEventListener('click', changeIcon(2));
    theLeftSide.lastChild.addEventListener('click', nextLevel);
    theLeftSide.addEventListener('click', gameOver);
    theRightSide.addEventListener('click', gameOver);
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
    generateFaces(icon);
    levelUp();
}

function gameOver() {
    alert('Game Over! Score: ' + (level - 1));
    document.body.removeEventListener('click', gameOver);
    leftSideImages.lastChild.removeEventListener('click', nextLevel);
}