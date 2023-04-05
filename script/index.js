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
        <div onclick="clickCard(this)" class="card">
            <div class="face back-face">
                <img src="/images/back.png" alt="">
            </div>
            <div class="face front-face">    
                <img src="${arrayGameCards[j]}" alt="">
            </div>
        </div>
    `;
};

let card = null;
let firstCard = null;
let secondCard = null;
let srcFirstCard = null;
let srcSecondCard = null;

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
        return;

    } else {
        srcSecondCard = card.children[1].children[0].src;
        secondCard = card
        turnCard(card)

        if(srcFirstCard == srcSecondCard) {
            console.log('acertou');
            return;
        } else {
            console.log('errou');
            resetCard(firstCard, secondCard)
            return;
        }
    }    
};


