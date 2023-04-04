function comparador() { 
	return Math.random() - 0.5; 
}

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
    }
}

arrayCards.sort(comparador);

for(i=0; i < (amountCards/2); i++) {
    arrayGameCards.push(arrayCards[i]);
    arrayGameCards.push(arrayCards[i]);
}

arrayGameCards.sort(comparador);

for(j=0; j < arrayGameCards.length; j++) {
    const element = document.querySelector(".container");
    const currentValue = document.querySelector(".container").innerHTML; 

    element.innerHTML = currentValue + `
        <div class="card">
            <img src="${arrayGameCards[j]}" alt="">
        </div>`
    ;
}
