function comparador() { 
	return Math.random() - 0.5; 
};

const arrayCards = [
    "/images/bobrossparrot.gif",
    "/images/explodyparrot.gif",
    "/images/fiestaparrot.gif",
    "/images/metalparrot.gif",
    "/images/revertitparrot.gif",
    "/images/tripletsparrot.gif",
    "/images/unicornparrot.gif",
];

let arrayGameCards = [];

let amountCards = prompt('How many cards do you want to play with?');

while(amountCards < 4 || amountCards > 14) {
    amountCards = prompt('Enter a number between 4 and 14! How many cards do you want to play with?');
    while((amountCards%2) != 0) {
        amountCards = prompt('Enter an even number! How many cards do you want to play with?');
    };
};

arrayCards.sort(comparador);

for(i=0; i < (amountCards/2); i++) {
    arrayGameCards.push(arrayCards[i]);
    arrayGameCards.push(arrayCards[i]);
};

arrayGameCards.sort(comparador);

for(j=0; j < arrayGameCards.length; j++) {
    const element = document.querySelector(".container");
    const currentValue = document.querySelector(".container").innerHTML; 

    element.innerHTML = currentValue + `
        <div onclick="clickCard(this)" id="${j}" class="card" data-test="card"> 
            <div class="face back-face">
                <img src="/images/back.png" alt="" data-test="face-down-image">
            </div>
            <div class="face front-face">    
                <img src="${arrayGameCards[j]}" alt="" data-test="face-up-image">
            </div>
        </div>
    `;
};

let card = null;
let firstCard = null;
let secondCard = null;
let srcFirstCard = null;
let srcSecondCard = null;
let points = 0;
let moves = 0;

function finishedGame() {
    setTimeout(() => {
        alert(`Você ganhou em ${moves} jogadas!`)
    }, 400);
    
}

function resetCard(card1, card2) {
    setTimeout(() => {
        turnCard(card1)
        turnCard(card2)
        firstCard = null;
        secondCard = null;
        srcFirstCard = null;
        srcSecondCard = null;
    }, 1000);
}

function hitCard(card1, card2) {
    card1.onclick = null;
    card2.onclick = null;
    firstCard = null;
    secondCard = null;
    srcFirstCard = null;
    srcSecondCard = null;
    
    points = points + 2;

    if(points == amountCards) {
        finishedGame() 
    }
}

function turnCard(card) {
    card.children[0].classList.toggle("front-face")
    card.children[1].classList.toggle("front-face")
}

function clickCard(card) {
    if(firstCard !== null && secondCard !== null) {
        return;
    }

    if(firstCard == null) {
        srcFirstCard = card.children[1].children[0].src;
        firstCard = card
        turnCard(card)
        moves++;
        return;

    } else {
        if(firstCard.id == card.id) {return;}

        srcSecondCard = card.children[1].children[0].src;
        secondCard = card
        turnCard(card)
        moves++;

        if(srcFirstCard == srcSecondCard) {
            hitCard(firstCard, secondCard)
            return;
        } else {
            resetCard(firstCard, secondCard)
            return;
        }
    }    
};


