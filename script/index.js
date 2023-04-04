function comparador() { 
	return Math.random() - 0.5; 
}

const arrayCards = {
    card1: {
        url: "/images/bobrossparrot.gif"
    },
    card2: {
        url: "/images/explodyparrot.gif"
    },
    card3: {
        url: "/images/fiestaparrot.gif"
    },
    card4: {
        url: "/images/metalparrot.gif"
    },
    card5: {
        url: "/images/revertitparrot.gif"
    },
    card6: {
        url: "/images/tripletsparrot.gif"
    },
    card7: {
        url: "/images/unicornparrot.gif"
    },
};

let amountCards = prompt('How many cards do you want to play with?');

while(amountCards < 4 || amountCards > 14) {
    amountCards = prompt('Enter a number between 4 and 14! How many cards do you want to play with?');
    while((amountCards%2) != 0) {
        amountCards = prompt('Enter an even number! How many cards do you want to play with?');
    }
}
