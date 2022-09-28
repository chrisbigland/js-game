//CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES CLASSES
//EN CARD CLASS
class EnNounCard {
  constructor(word, picture, id) {
    (this.word = word), (this.picture = picture), (this.id = id);
    // this.audio = audio
  }

  // below - change 'id' to 'data-id' once I've made the cards visible.
  createEnLanguageCard() {
    const languageCard = `
          <div class="en-card" id="british-${this.id}">
              <div id="en-card-content">
                  <h2>${this.word}</h2> 
                  <img id="enImg" src="${this.picture}">
              </div>
          </div>`;
    return languageCard;
  }
}

// PT CARD CLASS
class PtNounCard {
  constructor(word, picture, id, help) {
    (this.word = word),
      (this.picture = picture),
      (this.id = id),
      (this.help = help);
  }

  // playAudio() {
  //     // grab the audio tag -> then hit play/pause -> look into audio/video tag W3Schools - add in the following 'onclick' to the 'help' button below. <button onclick=${this.playAudio()}>
  // }

  //PT CREATE LANGUAGE CARD METHOD
  createPtLanguageCard() {
    let languageCard = `
      <div class="pt-card" id="pt-${this.id}">
          <div id="pt-card-content">
              <h2>${this.word}</h2> 
              <div id="pt-buttons">
                  <button id="help pt-${this.id}">HELP!</button> 
                  <button>AUDIO</button>
              </div>
          </div>
      </div>`;
    return languageCard;
  }

  showHelpingSentence() {
    let languageCard = `
            <div class="pt-card" id="pt-${this.id}">
                <div id="pt-card-content">
                    <h2>${this.help}</h2>
                    <button id="return">RETURN</button>
                </div>
            </div>`;
    return languageCard;
  }
}

//VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES

// CARD DATA stored as variables
const enDog = new EnNounCard("dog", "./images/dog.jpeg", 1);
const enCat = new EnNounCard("cat", "./images/cat.png", 2);
const enRabbit = new EnNounCard("rabbit", "./images/rabbit.png", 3);
const enChicken = new EnNounCard("chicken", "./images/chicken.png", 4);
const enPig = new EnNounCard("pig", "./images/pig.png", 5);
const enCow = new EnNounCard("cow", "./images/cow.png", 6);
const enSheep = new EnNounCard("sheep", "./images/sheep.png", 7);
const enHorse = new EnNounCard("horse", "./images/horse.png", 8);
const enLion = new EnNounCard("lion", "./images/lion.png", 9);
const enElephant = new EnNounCard("elephant", "./images/elephant.png", 10);
const enMonkey = new EnNounCard("monkey", "./images/monkey.png", 11);
const enBear = new EnNounCard("bear", "./images/bear.png", 12);
const enMouse = new EnNounCard("mouse", "./images/mouse.png", 13);
const enFrog = new EnNounCard("frog", "./images/frog.png", 14);
const enWolf = new EnNounCard("wolf", "./images/wolf.png", 15);
const enTiger = new EnNounCard("tiger", "./images/tiger.png", 16);

const ptDog = new PtNounCard(
  "cachorro (m)",
  "./images/dog.png",
  1,
  "Ela ganhou um cão de Natal."
);
const ptCat = new PtNounCard(
  "gato (m)",
  "./images/cat.webp",
  2,
  "Minha tia tem um gato preto."
);
const ptRabbit = new PtNounCard(
  "coelho (m)",
  "./images/rabbit.png",
  3,
  "Os colelhos estão comendo as verduras da minha horta."
);
const ptChicken = new PtNounCard(
  "galinha (f)",
  "./images/chicken.png",
  4,
  "Havia três galinhas correndo pela fazenda."
);
const ptPig = new PtNounCard(
  "porco (m)",
  "./images/pig.png",
  5,
  "Porcos adoram rolar na lama"
);
const ptCow = new PtNounCard(
  "vaca (f)",
  "./images/cow.png",
  6,
  "Vaca é um grande animal que é criada em fazendas para o consumo de leite."
);
const ptSheep = new PtNounCard(
  "ovelha (f)",
  "./images/sheep.png",
  7,
  "As ovelhas são criadas pora o consumo da sua lã ou da sua carne."
);
const ptHorse = new PtNounCard(
  "cavalo (m)",
  "./images/horse.png",
  8,
  "Muitos vaqueiros andavam a cavalo."
);
const ptLion = new PtNounCard(
  "leão (m)",
  "./images/lion.png",
  9,
  "Dizem que o leão é o rei da selva."
);
const ptElephant = new PtNounCard(
  "elefante (m)",
  "./images/elephant.png",
  10,
  "Os elefantes têm um nariz comprido e flexível chamado tromba."
);
const ptMonkey = new PtNounCard(
  "macaco (m)",
  "./images/monkey.png",
  11,
  "Há um monte de tipos de macacos na África."
);
const ptBear = new PtNounCard(
  "urso (m)",
  "./images/bear.png",
  12,
  "Se você ver um urso, é importante não fugir rapidamente."
);
const ptMouse = new PtNounCard(
  "rato (m)",
  "./images/mouse.png",
  13,
  "O gato perseguiu o rato."
);
const ptFrog = new PtNounCard(
  "sapo (m)",
  "./images/frog.png",
  14,
  "Eu costumava ir até o lago e brincar com os sapos."
);
const ptWolf = new PtNounCard(
  "lobo (m)",
  "./images/wolf.png",
  15,
  "O lobo uivou para a lua."
);
const ptTiger = new PtNounCard(
  "tigre (m)",
  "./images/tiger.png",
  16,
  "Os tigres têm listras laranjas e pretas."
);

const enCardContainer = document.querySelector("#en-card-container");
const ptCardContainer = document.querySelector("#pt-card-container");

// EN CARD ARRAY
let enCardArr = [
  enDog,
  enCat,
  enRabbit,
  enChicken,
  enPig,
  enCow,
  enSheep,
  enHorse,
  enLion,
  enElephant,
  enMonkey,
  enBear,
  enMouse,
  enFrog,
  enWolf,
  enTiger,
];

// PT CARD ARRAY
const ptCardArr = [
  ptDog,
  ptCat,
  ptRabbit,
  ptChicken,
  ptPig,
  ptCow,
  ptSheep,
  ptHorse,
  ptLion,
  ptElephant,
  ptMonkey,
  ptBear,
  ptMouse,
  ptFrog,
  ptWolf,
  ptTiger,
];

const audioBtnContent = document.querySelector("#test-audio").children[0]; //getting access to the audio element, which is the child of the button.
const audioBtn = document.querySelector("#test-audio");

const enCardContent = document.querySelector("#en-card-content");

let enCardSelected;
let ptCardSelected;

let userChoicesArr = []; // limit to two items
let matchedChoices = []; //if they match then put them into an array

// Array.forEach(card => {
//     let enCard = new card(card.animal, card.imgSrc, card.audio)
// })

let newEnArray = [];

let seconds = 0;
let minutes = 4;
let oneEnCardShowing = false;

const timer = document.querySelector("#timer");
const timerSeconds = document.querySelector("#timer-seconds");
const timerMins = document.querySelector("#timer-mins");
const zeroSecond = document.querySelector("#zero-second");
const newGameBtn = document.querySelector("#new-game-btn");
let myInterval;
const help = document.querySelector("#help");
console.log(help);

//SETTING enCard variable to a node list of everything with class '.en-card'
const enCard = document.querySelectorAll(".en-card");
console.log(enCard);

let gameInPlayOrNot = false;

//FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS
// AUDIO FUNCTION
const playAudio = () => {
  // const isPlaying = false;
  audioBtnContent.play();
};

//GET EN CARDS FUNCTION
const getEnCards = () => {
  enCardContainer.innerHTML = "";
  enCardArr.forEach((card) => {
    enCardContainer.innerHTML += card.createEnLanguageCard();
    return enCardArr;
  });
  const enCard = document.querySelectorAll(".en-card"); // adding variable here because enCard needs to be created first.
  console.log(enCard);

  // SHOW CARD WHEN CLICKING - EVENT LISTENER AND FOREACH
  enCard.forEach((card) => {
    console.log(`game is in play = ${gameInPlayOrNot}`);
    if (gameInPlayOrNot === true) {
      card.addEventListener("click", (e) => {
        console.log(e.target.id);
        enCardSelected = e.target;
        console.log(enCardSelected);
        // for loop to check through en cards. if more than 1 has the style 'visible', don't perform the next action (making cards visible on click)
        if (
          oneEnCardShowing === false                    // if no EN cards are showing
        ) {
          enCardSelected.childNodes[1].style.visibility = "visible";            //make the selected card show
          console.log(`one en card is showing = ${oneEnCardShowing}`);
          oneEnCardShowing = true;                                              //oneEnCardShowing var set to let us know it's now being shown
          console.log(`one en card is showing = ${oneEnCardShowing}`);
          userChoicesArr.push(enCardselected);
          console.log(userChoicesArr);
        } 
        else if (enCardSelected.childNodes[1].style.visibility === "visible") {
        enCardSelected.childNodes[1].style.visibility = "hidden"; //otherwise if selected card is showing then hide it and set oneEnCardShowing to false. 
        oneEnCardShowing = false;
        console.log(`one en card is showing = ${oneEnCardShowing}`);
        }
        return enCardSelected;
      });
    }
  });
};

const getPtCards = () => {
  ptCardContainer.innerHTML = "";
  ptCardArr.forEach((card) => {
    ptCardContainer.innerHTML += card.createPtLanguageCard();
    return ptCardArr;
  });

  const ptCard = document.querySelectorAll(".pt-card");
  console.log(ptCard); // empty nodelist???

  ptCard.forEach((card) => {
    if (gameInPlayOrNot === true) {
      card.addEventListener("click", (e) => {
        console.log(e.target.id);
        console.log(ptCardSelected);
        ptCardSelected = e.target;
        if (ptCardSelected.childNodes[1].style.visibility === "hidden") {
          ptCardSelected.childNodes[1].style.visibility = "visible";
        } else {
          ptCardSelected.childNodes[1].style.visibility = "hidden";
        }
        // if (e.target.id === "help") {
        //   help.addEventListener("click", () => {
        //     showHelpingSentence();
        //   });
        // }
        return ptCardSelected;
      });
    }
  });
};

// SHOW CARD FUNCTION
// const showCard = (cardEl) => {
//   console.log(cardEl.childNodes[1].style);
//   cardEl.childNodes[1].style.visibility = "visible";
// };

// //HIDE CARD FUNCTION
// const hideCard = (cardEl) => (cardEl.childNodes[1].style.visibility = "hidden");

const myIntervalTimer = () => {
  myInterval = setInterval(function myTimer() {
    if (seconds === 0) {
      // reducing the minutes by 1 when seconds gets to 0.
      minutes = minutes - 1; // not 100% sure why this can't be minutes--?
      timerMins.innerHTML = `${minutes}`;
      seconds = 60; //replenishing seconds to 60
    }
    --seconds; // seconds countdown by x1 every time function run (every second)
    timerSeconds.innerHTML = `${seconds}`;
    if (seconds < 10) {
      zeroSecond.innerHTML = "0";
    }
    if (seconds >= 10) {
      zeroSecond.innerHTML = "";
    }
    if (seconds === 0 && minutes === 0) {
      clearInterval(myTimer); // stops timer when secs and mins on 0
      // alert("Times Up!")
      gameInPlayOrNot = false;
      showTimesUp();
    }
  }, 1000);
};

const showTimesUp = () => {
  timer.innerHTML = `<p id="times-up" style="text-align:center;color:#ffa500;font-size:5em;">Time's up!</p>`;
};

const hideTimesUp = () => {
  timer.innerHTML = `<h2 id="timer"><span id="timer-mins">${timerMins}</span>:<span id="zero-second"></span><span id="timer-seconds">${timerSeconds}</span></h2>`;
};

//TIMER
//setinterval function
//clearinterval function

// const resetTimer = () => {
//     seconds = 0;
//     minutes = 4;
//     clearInterval(myTimer)
// }

//EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS
audioBtn.addEventListener("click", () => {
  playAudio();
});

// NEW GAME BUTTON EVENT LISTENER
newGameBtn.addEventListener("click", () => {
  gameInPlayOrNot = true;
  console.log(`game is in play = ${gameInPlayOrNot}`);
  if (timerMins === 4) {
    myIntervalTimer();
  } else if (minutes === 0 && seconds === 0) {
    // (currently showing time's up)
    minutes = 4;
    // timer.innerHTML = `${minutes}:${seconds}`;
    hideTimesUp(); // should reset html to show time
    clearInterval(myInterval);
    myIntervalTimer();
  } else {
    // if game already in play
    seconds = 0;
    minutes = 4;
    clearInterval(myInterval);
    myIntervalTimer();
  } // setInterval repeats a function at every given time-interval. first parameter is the function, second is the time in milliseconds.
  console.log(gameInPlayOrNot);

  //SHUFFLE enCardArr (and later add on ptCardArr
  let arrayShuffle = function (arr) {
    // creating new arrayShuffle function. Parameter/placeholder 'arr'
    let newPos, // declaring new variables 'newPos' and 'temp' to be used within function
      temp;

    for (let i = arr.length - 1; i > 0; i--) {
      // for loop starts at end value and works backwards. Runs for as long as index greater than 1.
      newPos = Math.floor(Math.random() * (i + 1)); // we need to create a random number between 0 and 8 (or the number of indexes in the arr) to get a new index position. Here we creating a random number betw 0 and 0.99 then * by i + 1 (as that is the real no of positions. counting from 1) then rounded DOWN. This gives us a new, random position number of max 8. First round of loop multiplies by 9 (index 8 + 1), then by 8 (index 7 + 1) etc.
      temp = arr[i]; // assigning each array value to a temporary variable so this is stored to temp.
      arr[i] = arr[newPos]; // now placing the new position number as an index number value on each array value
      arr[newPos] = temp; // we will now place what we put into 'temp' into our array value with a new index number(position). Doing this in a loop means each value is swapped.
      // include an update to HTML here so that card content updated as looping through?
    }
    return arr;
  };

  newEnArray = arrayShuffle(enCardArr);
  newPtArray = arrayShuffle(ptCardArr);
  console.log(enCardArr);
  console.log(ptCardArr);

  getEnCards();
  getPtCards();
});

//STARTING LOGIC
getEnCards();
getPtCards();

// GET HELP FOR PT CARDS
// ptCard.forEach((card) => {
//   console.log(card.childNodes[0].nextSibling.nextSibling);
// help.addEventListener("click", () => {
// ptCardContainer.innerHTML = card.showHelpingSentence();
// // need to put an event listener on the button, which is a child of pt-card, pt-card-content and pt-buttons
// })
// });

// OUTSTANDING ACTIONS
// TIMER - Allow timer to restart after time's up.
// allow the picture to be clicked as well as the rest of the card when hiding cards - issue with either the word or the card picture dissappearing depending on where on the card you click.
// add audio files - work out how to target each card as they've been created en masse using a function. Currently for the test button I already have the html written, however instead perhaps I could place the audio files within the class data and then amend the html that's written to include the button??Could we add the button into each PtNounCard instead?
//time's up overspills when screen is small
/// make text flash different colours when time's up - use interval timer for this?
// Vacchi to record audios
// fix card layout with the lives.
// work out why I can't add anything onto the userchoicearr - shows up as not defined when I select a card
// shuffle - seems to produce the same results if clicking quickly but leaving a second or two in between you get different results
//complete readme - add wordreference to acknowledgements
//create dropdown menu for other vocab sets.
// selected card array - if display is shown as visible then add to array. If it's set to hidden then remove from array. 

// 'found a pair' button - only allow it to be clicked when x1 en and x1 pt card have been selected.

// let testertext = document.querySelector("#tester-text")

// setInterval(function (timesUpInterval) {
//     testertext.innerHTML = "TESTING ON";
//     testertext.style.visibility = "hidden"
// }, 500)
