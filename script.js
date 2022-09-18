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

createPtLanguageCard() {
    const languageCard = `${this.word} <button>AJUDA!</button> <button>AUDIO</button>`
    return languageCard;
}

}
const enDog = new EnNounCard ("dog", "./images/dog.jpeg");
const enCat = new EnNounCard ("cat", "./images/cat.webp");
const enRabbit = new EnNounCard ("rabbit", "./images/rabbit.jpeg");
const enChicken = new EnNounCard ("chicken", "./images/chicken.jpeg");
const enPig = new EnNounCard ("pig", "./images/pig.jpeg");
const enCow = new EnNounCard ("cow", "./images/cow.jpeg");
const enSheep = new EnNounCard ("sheep", "./images/sheep.jpeg");
const enHorse = new EnNounCard ("horse", "./images/horse.jpeg");
const enLion = new EnNounCard ("lion", "./images/lion.jpeg");
const enElephant = new EnNounCard ("elephant", "./images/elephant.jpeg");
const enMonkey = new EnNounCard ("monkey", "./images/monkey.jpeg");
const enBear = new EnNounCard ("bear", "./images/bear.jpeg");
const enMouse = new EnNounCard ("mouse", "./images/mouse.jpeg");
const enFrog = new EnNounCard ("frog", "./images/frog.jpeg");
const enWolf = new EnNounCard ("wolf", "./images/wolf.jpeg");
const enTiger = new EnNounCard ("tiger", "./images/tiger.jpeg");

const ptDog = new PtNounCard ("cachorro (m)", "./images/dog.jpeg")
const ptCat = new PtNounCard ("gato (m)", "./images/cat.webp")
const ptRabbit = new PtNounCard ("coelho (m)", "./images/rabbit.jpeg")
const ptChicken = new PtNounCard ("galinha (f)", "./images/chicken.jpeg")
const ptPig = new PtNounCard ("porco (m)", "./images/pig.jpeg");
const ptCow = new PtNounCard ("vaca (f)", "./images/cow.jpeg");
const ptSheep = new PtNounCard ("ovelha (f)", "./images/sheep.jpeg");
const ptHorse = new PtNounCard ("cavalo (m)", "./images/horse.jpeg");
const ptLion = new PtNounCard ("leão (m)", "./images/lion.jpeg");
const ptElephant = new PtNounCard ("elefante (m)", "./images/elephant.jpeg");
const ptMonkey = new PtNounCard ("macaco (m)", "./images/monkey.jpeg");
const ptBear = new PtNounCard ("urso (m)", "./images/bear.jpeg");
const ptMouse = new PtNounCard ("rato (m)", "./images/mouse.jpeg");
const ptFrog = new PtNounCard ("sapo (m)", "./images/frog.jpeg");
const ptWolf = new PtNounCard ("lobo (m)", "./images/wolf.jpeg");
const ptTiger = new PtNounCard ("tigre (m)", "./images/tiger.jpeg");

// ptCardContainer.innerHTML += ptDog.createPtLanguageCard()
// ptCardContainer.innerHTML += ptCat.createPtLanguageCard()
// ptCardContainer.innerHTML += ptRabbit.createPtLanguageCard()
// enCardContainer.innerHTML += enDog.createEnLanguageCard()
// enCardContainer.innerHTML += enCat.createEnLanguageCard()
// enCardContainer.innerHTML += enRabbit.createEnLanguageCard()
// NEXT - create loop to do the above so I don't have to do it again and again. PUT them all in an array and loop through them??

// EN CARD ARRAY
const enCardArr = [enDog, enCat, enRabbit, enChicken, enPig, enCow, enSheep, enHorse, enLion, enElephant, enMonkey, enBear, enMouse, enFrog, enWolf, enTiger]

enCardArr.forEach((card) => {
    enCardContainer.innerHTML += card.createEnLanguageCard();
})


// PT CARD ARRAY
const ptCardArr = [ptDog, ptCat, ptRabbit, ptChicken, ptPig, ptCow, ptSheep, ptHorse, ptLion, ptElephant, ptMonkey, ptBear, ptMouse, ptFrog, ptWolf, ptTiger]

ptCardArr.forEach((card) => {
    ptCardContainer.innerHTML += card.createPtLanguageCard();
})