const enCardContainer = document.querySelector("#en-card-container");
const ptCardContainer = document.querySelector("#pt-card-container");
const gameContainer = document.querySelector("#game-container")

class EnNounCard {
    constructor(word, picture){
    this.word = word,
    this.picture = picture
    }

createEnLanguageCard() {
    const languageCard = `<style>               
    div {
        border: 2px solid black;
        height:     
    }
    #enImg {
        width: 50%; 
        height: 50%;
    }
    </style>
    <div><h2>${this.word}</h2> <img id="enImg" src="${this.picture}"></div>` 
    return languageCard;
}

}

// GAME CONTAINER STYLINGS
gameContainer.style.display = "flex";

// EN CARD CONTAINER STYLINGS
enCardContainer.style.border = "5px solid red";
enCardContainer.style.height = "80vh";
enCardContainer.style.width = "40vw";

// PT CARD CONTAINER STYLINGS
ptCardContainer.style.border = "5px solid blue";
ptCardContainer.style.height = "80vh";
ptCardContainer.style.width = "40vw";


class PtNounCard {
    constructor (word, picture, hint) {
    this.word = word,
    this.picture = picture,
    this.hint = hint
}

getWordAndLanguage() {
    return `The word is ${this.word}, and the language is ${this.language}`
}

createPtLanguageCard() {
    const languageCard = `${this.word} <button>AJUDA!</button> <button>AUDIO</button>`
    return languageCard;
}

}
const enDog = new EnNounCard ("dog", "./images/dog.jpeg");
const enCat = new EnNounCard ("cat", "./images/cat.webp");
const enRabbit = new EnNounCard ("rabbit", "./images/rabbit.jpeg");

const ptDog = new PtNounCard ("cachorro", "./images/dog.jpeg")
const ptCat = new PtNounCard ("gato", "./images/cat.webp")
const ptRabbit = new PtNounCard ("coelho", "./images/rabbit.jpeg")

// ptCardContainer.innerHTML += ptDog.createPtLanguageCard()
// ptCardContainer.innerHTML += ptCat.createPtLanguageCard()
// ptCardContainer.innerHTML += ptRabbit.createPtLanguageCard()
// enCardContainer.innerHTML += enDog.createEnLanguageCard()
// enCardContainer.innerHTML += enCat.createEnLanguageCard()
// enCardContainer.innerHTML += enRabbit.createEnLanguageCard()
// NEXT - create loop to do the above so I don't have to do it again and again. PUT them all in an array and loop through them??

// EN CARD ARRAY
const enCardArr = [enDog, enCat, enRabbit]

enCardArr.forEach((card) => {
    enCardContainer.innerHTML += card.createEnLanguageCard();
})


// PT CARD ARRAY
const ptCardArr = [ptDog, ptCat, ptRabbit]

ptCardArr.forEach((card) => {
    ptCardContainer.innerHTML += card.createPtLanguageCard();
})