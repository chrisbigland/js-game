const enCardContainer = document.querySelector("#en-card-container");
const ptCardContainer = document.querySelector("#pt-card-container");


// let userChoicesArr = []; // limit to two items
// let matchedChoices = [];


//EN CARD CLASS
class EnNounCard {
    constructor(word, picture, id){
    this.word = word,
    this.picture = picture
    this.id = id;
        // this.audio = audio
    }

    // below - change 'id' to 'data-id' once I've made the cards visible. 
createEnLanguageCard() {
    const languageCard = `
    <div class="en-card" id="british-${this.id}"><div id="en-card-content"><h2>${this.word}</h2> <img id="enImg" src="${this.picture}"></div></div>` 
    return languageCard;
}



}

// PT CARD CLASS
class PtNounCard {
    constructor (word, picture, id, hint) {
    this.word = word,
    this.picture = picture,
    this.id = id,
    this.hint = hint
}

// playAudio() {
//     // grab the audio tag -> then hit play/pause -> look into audio/video tag W3Schools - add in the following 'onclick' to the 'help' button below. <button onclick=${this.playAudio()}>
// }


//PT CREATE LANGUAGE CARD METHOD
createPtLanguageCard() {
    const languageCard = `
    <div id="pt-card">
        <div id="pt-card-content"><h2>${this.word}</h2> <div id="pt-buttons"><button>HELP!</button> <button>AUDIO</button></div></div>
    </div>`
    return languageCard;
}

}

// CARD DATA stored as variables
const enDog = new EnNounCard ("dog", "./images/dog.jpeg", 1);
const enCat = new EnNounCard ("cat", "./images/cat.png", 2);
const enRabbit = new EnNounCard ("rabbit", "./images/rabbit.png", 3);
const enChicken = new EnNounCard ("chicken", "./images/chicken.png", 4);
const enPig = new EnNounCard ("pig", "./images/pig.png", 5);
const enCow = new EnNounCard ("cow", "./images/cow.png", 6);
const enSheep = new EnNounCard ("sheep", "./images/sheep.png", 7);
const enHorse = new EnNounCard ("horse", "./images/horse.png", 8);
const enLion = new EnNounCard ("lion", "./images/lion.png", 9);
const enElephant = new EnNounCard ("elephant", "./images/elephant.png", 10);
const enMonkey = new EnNounCard ("monkey", "./images/monkey.png", 11);
const enBear = new EnNounCard ("bear", "./images/bear.png", 12);
const enMouse = new EnNounCard ("mouse", "./images/mouse.png", 13);
const enFrog = new EnNounCard ("frog", "./images/frog.png", 14);
const enWolf = new EnNounCard ("wolf", "./images/wolf.png", 15);
const enTiger = new EnNounCard ("tiger", "./images/tiger.png", 16);

const ptDog = new PtNounCard ("cachorro (m)", "./images/dog.png", 1)
const ptCat = new PtNounCard ("gato (m)", "./images/cat.webp", 2)
const ptRabbit = new PtNounCard ("coelho (m)", "./images/rabbit.png", 3)
const ptChicken = new PtNounCard ("galinha (f)", "./images/chicken.png", 4)
const ptPig = new PtNounCard ("porco (m)", "./images/pig.png", 5);
const ptCow = new PtNounCard ("vaca (f)", "./images/cow.png", 6);
const ptSheep = new PtNounCard ("ovelha (f)", "./images/sheep.png", 7);
const ptHorse = new PtNounCard ("cavalo (m)", "./images/horse.png", 8);
const ptLion = new PtNounCard ("leão (m)", "./images/lion.png", 9);
const ptElephant = new PtNounCard ("elefante (m)", "./images/elephant.png", 10);
const ptMonkey = new PtNounCard ("macaco (m)", "./images/monkey.png", 11);
const ptBear = new PtNounCard ("urso (m)", "./images/bear.png", 12);
const ptMouse = new PtNounCard ("rato (m)", "./images/mouse.png", 13);
const ptFrog = new PtNounCard ("sapo (m)", "./images/frog.png", 14);
const ptWolf = new PtNounCard ("lobo (m)", "./images/wolf.png", 15);
const ptTiger = new PtNounCard ("tigre (m)", "./images/tiger.png", 16);

// Array.forEach(card => {
//     let enCard = new card(card.animal, card.imgSrc, card.audio)
// })

// EN CARD ARRAY
let enCardArr = [enDog, enCat, enRabbit, enChicken, enPig, enCow, enSheep, enHorse, enLion, enElephant, enMonkey, enBear, enMouse, enFrog, enWolf, enTiger]

    enCardArr.forEach((card) => {
    enCardContainer.innerHTML += card.createEnLanguageCard();

    return enCardArr;
    // to make the pics shuffle too, could copy the above foreach and get it to run after cards shuffled so html amended again. Could turn into a function so that there is less code. 
   
})


//SETTING enCard variable to a node list of everything with class '.en-card'
const enCard = document.querySelectorAll(".en-card");
console.log(enCard);


// SHOW CARD FUNCTION
const showCard = (cardEl) => cardEl.childNodes[0].style.visibility = "visible"; // with childNodes we can access children of element




const enCardContent = document.querySelector("#en-card-content");
let enCardSelected;   
// SHOW CARD WHEN CLICKING - EVENT LISTENER AND FOREACH
enCard.forEach((card) => {                  // looping through the enCard node list to add the click event listener
    card.addEventListener("click", (e) => {
        console.log(e.target.id);
        enCardSelected = e.target
        showCard(enCardSelected)
        console.log(enCardSelected.childNodes[0])
        // enCardSelected.childNodes[0].style.visibility = "visible";
        return enCardSelected;
        // console.log(enCardSelected)
        // // const enCardIDVar = document.querySelector(`#${enCard}`)
        // enCardSelected.classList.add("unhide")
    })
})

console.log(enCardContent)

//TIMER
//setinterval function
//clearinterval function
let newEnArray = [];

let seconds = 04;
let minutes = 0;

const timer = document.querySelector("#timer");
const timerSeconds = document.querySelector("#timer-seconds");
const timerMins = document.querySelector("#timer-mins");
const zeroSecond = document.querySelector("#zero-second")
const newGameBtn = document.querySelector("#new-game-btn");


newGameBtn.addEventListener("click", () => {
    setInterval(function myTimer() {
    if (seconds === 0) {            // reducing the minutes by 1 when seconds gets to 0. 
        minutes = minutes - 1  // not 100% sure why this can't be minutes--?
        timerMins.innerHTML = `${minutes}`
        seconds = 60            //replenishing seconds to 60
    }
    seconds--                   // seconds countdown by x1 every time function run (every second)
    timerSeconds.innerHTML = seconds;
    if (seconds < 10) {
        zeroSecond.innerHTML = "0";
    }
    if (seconds >= 10) {
        zeroSecond.innerHTML = "";
    }
    if (seconds === 0 && minutes === 0) {
        clearInterval(myTimer);      // stops timer when secs and mins on 0
        // alert("Times Up!")
        timer.innerHTML = `<p style="text-align:center;color:#ffa500;">Time's up!</p>`
    }
}, 1000) // setInterval repeats a function at every given time-interval. first parameter is the function, second is the time in milliseconds. 

//SHUFFLE enCardArr (and later add on ptCardArr
    let arrayShuffle = function(arr) { // creating new arrayShuffle function. Parameter/placeholder 'arr'
        let newPos,                     // declaring new variables 'newPos' and 'temp' to be used within function
            temp;

        for (let i = arr.length - 1; i > 0; i--) { // for loop starts at end value and works backwards. Runs for as long as index greater than 1. 
            newPos = Math.floor(Math.random() * (i + 1));  // we need to create a random number between 0 and 8 (or the number of indexes in the arr) to get a new index position. Here we creating a random number betw 0 and 0.99 then * by i + 1 (as that is the real no of positions. counting from 1) then rounded DOWN. This gives us a new, random position number of max 8. First round of loop multiplies by 9 (index 8 + 1), then by 8 (index 7 + 1) etc.
            temp = arr[i]; // assigning each array value to a temporary variable so this is stored to temp.
            arr[i] = arr[newPos]; // now placing the new position number as an index number value on each array value
            arr[newPos] = temp // we will now place what we put into 'temp' into our array value with a new index number(position). Doing this in a loop means each value is swapped. 
            // include an update to HTML here so that card content updated as looping through?
        }
        // enCardContainer.innerHTML += [i].createEnLanguageCard()
        //     arr.forEach((card) => {
        // enCardContainer.innerHTML += card.createEnLanguageCard(); 
        return arr;
    }               

    enCardArr = arrayShuffle(enCardArr);// enCardArr is now shuffled - need to amend pics 
    // enCardArr.forEach((card) => {
    //     enCardContainer.innerHTML += card.createEnLanguageCard(); 
    console.log(enCardArr)
    // enCardArr.forEach((card) => {
    //     enCardContainer.innerHTML += card.createEnLanguageCard();
    //     return enCardArr;
    // })
    
})

// PT CARD ARRAY
const ptCardArr = [ptDog, ptCat, ptRabbit, ptChicken, ptPig, ptCow, ptSheep, ptHorse, ptLion, ptElephant, ptMonkey, ptBear, ptMouse, ptFrog, ptWolf, ptTiger]

ptCardArr.forEach((card) => {
    ptCardContainer.innerHTML += card.createPtLanguageCard();
})


// OUTSTANDING ACTIONS
// add "card" id to both encard and pt card then we can make shuffle happen to both sets of cards at once. 
// amend timer - fix minus issue once alert is cleared. 
// create click event for cards
// make cards flip
// add audio files - work out how to target each card as they've been created em masse using a function. Could we add the button into each PtNounCard instead?
// make design responsive
// make shuffled cards show shuffled pictures too - could put them into a new array, where the function gets called?
/// make text flash different colours when time's up

