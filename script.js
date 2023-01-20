//CLASSES 
//EN CARD CLASS
class EnNounCard {
  constructor(word, picture, id) {
    (this.word = word), (this.picture = picture), (this.id = id);
  }

  createEnLanguageCard() {
    const languageCard = `
          <div class="en-card" id="${this.id}">
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
  constructor(word, picture, id, help, audio) {
    (this.word = word),
      (this.picture = picture),
      (this.id = id),
      (this.help = help),
      (this.audio = audio);
  }

  //PT CREATE LANGUAGE CARD METHOD
  createPtLanguageCard() {
    let languageCard = `
      <div class="pt-card" id="${this.id}">
          <div id="pt-card-content">
              <h2 id="pt-word">${this.word}</h2> 
              <div id="pt-buttons">
                  <button id="help ${this.id}">HELP!</button> 
                  <button id="audio-button ${this.id}">AUDIO</button>
              </div>
          </div>
      </div>`;
    return languageCard;
  }

  showHelpingSentence() {
    let helpingContent = `
                <div id="pt-card-content ${this.id}">
                    <h2>${this.help}</h2>
                    <button id="return ${this.id}">RETURN</button>
                </div>
            </div>`;

    return helpingContent;
  }

  returnCardContent() {
    const ptCardContent = document.querySelector("#pt-card-content");
    let cardContent = `
    <h2 id="pt-word">${this.word}</h2> 
    <div id="pt-buttons">
        <button id="help ${this.id}">HELP!</button> 
        <button id="audio-button ${this.id}">AUDIO</button>
    </div>`;
    return cardContent;
  }

  playAudioFile() {
    let audioContent = `<audio id="pt-Audio" src="${this.audio}"></audio>`;
    return audioContent;
  }
}

//VARIABLES

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
  "Ela ganhou um cão de Natal.",
  "./audio-files/cachorro.m4a"
);
const ptCat = new PtNounCard(
  "gato (m)",
  "./images/cat.webp",
  2,
  "Minha tia tem um gato preto.",
  "./audio-files/gato.m4a"
);
const ptRabbit = new PtNounCard(
  "coelho (m)",
  "./images/rabbit.png",
  3,
  "Os coelhos estão comendo as verduras da minha horta.",
  "./audio-files/coelho.m4a"
);
const ptChicken = new PtNounCard(
  "galinha (f)",
  "./images/chicken.png",
  4,
  "Havia três galinhas correndo pela fazenda.",
  "./audio-files/galinha.m4a"
);
const ptPig = new PtNounCard(
  "porco (m)",
  "./images/pig.png",
  5,
  "Porcos adoram rolar na lama",
  "./audio-files/porco.m4a"
);
const ptCow = new PtNounCard(
  "vaca (f)",
  "./images/cow.png",
  6,
  "Vaca é um grande animal que é criada em fazendas para o consumo de leite.",
  "./audio-files/vaca.m4a"
);
const ptSheep = new PtNounCard(
  "ovelha (f)",
  "./images/sheep.png",
  7,
  "As ovelhas são criadas pora o consumo da sua lã ou da sua carne.",
  "./audio-files/ovelha.m4a"
);
const ptHorse = new PtNounCard(
  "cavalo (m)",
  "./images/horse.png",
  8,
  "Muitos vaqueiros andavam a cavalo.",
  "./audio-files/cavalo.m4a"
);
const ptLion = new PtNounCard(
  "leão (m)",
  "./images/lion.png",
  9,
  "Dizem que o leão é o rei da selva.",
  "./audio-files/leão.m4a"
);
const ptElephant = new PtNounCard(
  "elefante (m)",
  "./images/elephant.png",
  10,
  "Os elefantes têm um nariz comprido e flexível chamado tromba.",
  "./audio-files/elefante.m4a"
);
const ptMonkey = new PtNounCard(
  "macaco (m)",
  "./images/monkey.png",
  11,
  "Há um monte de tipos de macacos na África.",
  "./audio-files/macaco.m4a"
);
const ptBear = new PtNounCard(
  "urso (m)",
  "./images/bear.png",
  12,
  "Se você ver um urso, é importante não fugir rapidamente.",
  "./audio-files/urso.m4a"
);
const ptMouse = new PtNounCard(
  "rato (m)",
  "./images/mouse.png",
  13,
  "O gato perseguiu o rato.",
  "./audio-files/rato.m4a"
);
const ptFrog = new PtNounCard(
  "sapo (m)",
  "./images/frog.png",
  14,
  "Eu costumava ir até o lago e brincar com os sapos.",
  "./audio-files/sapo.m4a"
);
const ptWolf = new PtNounCard(
  "lobo (m)",
  "./images/wolf.png",
  15,
  "O lobo uivou para a lua.",
  "./audio-files/lobo.m4a"
);
const ptTiger = new PtNounCard(
  "tigre (m)",
  "./images/tiger.png",
  16,
  "Os tigres têm listras laranjas e pretas.",
  "./audio-files/tigre.m4a"
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

const audioBtnContent = document.querySelector("#test-audio").children[0];
const audioBtn = document.querySelector("#test-audio");

const enCardContent = document.querySelector("#en-card-content");

let enCardSelected = "";
let ptCardSelected = "";

let userChoicesArr = []; // limit to two items
let matchedChoices = []; //if they match then put them into an array

let seconds = 60;
let minutes = 4;
let oneEnCardShowing = false;
let onePtCardShowing = false;
let cardsMatch = false;
let livesArr = [3, 2, 1];
let ptVarForHelp;
let ptVarForReturn;
let ptVarForAudio;

const timer = document.querySelector("#timer");
const timerSeconds = document.querySelector("#timer-seconds");
const timerMins = document.querySelector("#timer-mins");
const zeroSecond = document.querySelector("#zero-second");
const newGameBtn = document.querySelector("#new-game-btn");
let myInterval;
const help = document.querySelector("#help");

const submit = document.querySelector("#submit");

//SETTING enCard variable to a node list of everything with class '.en-card'
const enCard = document.querySelectorAll(".en-card");

let gameInPlayOrNot = false;

const flipAud = document.querySelector("#flip-aud");
const winAud = document.querySelector("#win-aud");
const shuffleAud = document.querySelector("#shuffle-aud");
const rightAnswAud = document.querySelector("#right-answ-aud");
const wrongAnswAud = document.querySelector("#wrong-answ-aud");
const gameOverAud = document.querySelector("#game-over-aud");

const pairBtn = document.querySelector("#pair-btn");
const notPairBtn = document.querySelector("#not-pair-btn");
const lifeOne = document.querySelector("#life-1");
const lifeTwo = document.querySelector("#life-2");
const lifeThree = document.querySelector("#life-3");

//FUNCTIONS
// AUDIO FUNCTION
const playAudio = () => {
  audioBtnContent.play();
};

//GET EN CARDS FUNCTION
const getEnCards = () => {
  enCardContainer.innerHTML = "";
  enCardArr.forEach((card) => {
    enCardContainer.innerHTML += card.createEnLanguageCard();
    return enCardArr;
  });
  const enCard = document.querySelectorAll(".en-card"); 

  // SHOW CARD WHEN CLICKING - EVENT LISTENER AND FOREACH
  enCard.forEach((card) => {
    if (gameInPlayOrNot === true) {
      card.addEventListener("click", (e) => {
        if (enCardSelected === "") {
          enCardSelected = e.target;
        }

        // for loop to check through en cards. if more than 1 has the style 'visible', don't perform the next action (making cards visible on click)
        if (e.target.id === "enImg") {
          e.target.parentElement.style.visibility = "hidden";
          oneEnCardShowing = false;
        }
        if (
          oneEnCardShowing === false // if no EN cards are showing
        ) {
          enCardSelected.childNodes[1].style.visibility = "visible";
          oneEnCardShowing = true;
          flipAud.play();
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

  ptCard.forEach((card) => {
    if (gameInPlayOrNot === true) {
      card.addEventListener("click", (e) => {
        if (e.target.id.includes("help")) {
          ptVarForHelp = e.target.id.slice(5); // variable set with id of the help button's card
          for (let i = 0; i < ptCardArr.length; i++) {
            if (ptVarForHelp == ptCardArr[i].id) {
              card.childNodes[1].innerHTML = ptCardArr[i].showHelpingSentence();
            }
          }
          return;
        }

        if (e.target.id.includes("return")) {
          ptVarForReturn = e.target.id.slice(7);
          for (let i = 0; i < ptCardArr.length; i++) {
            if (ptVarForReturn == ptCardArr[i].id) {
              card.childNodes[1].innerHTML = ptCardArr[i].returnCardContent(); 
            }
          }
          return;
        }

        if (e.target.id.includes("audio-button")) {
          ptVarForAudio = e.target.id.slice(13);

          for (let i = 0; i < ptCardArr.length; i++) {
            if (ptVarForAudio == ptCardArr[i].id) {
              const ptAudios = document.querySelector("#pt-audios");
              ptAudios.innerHTML = ptCardArr[i].playAudioFile();
              let ptAudio = document.querySelector("#pt-Audio");
              ptAudio.play();
            }
          }
          return;
        }

        if (ptCardSelected === "") {
          ptCardSelected = e.target;
        }

        if (onePtCardShowing === false) {
          ptCardSelected.childNodes[1].style.visibility = "visible";
          onePtCardShowing = true;
          flipAud.play();
        }

        return ptCardSelected;
      });
    }
  });
};

const myIntervalTimer = () => {
  myInterval = setInterval(function myTimer() {
    if (seconds === 0 && minutes === 0) {
      clearInterval(myTimer);
      gameInPlayOrNot = false;
      showTimesUp();
    }

    if (seconds === 0) {
      // reducing the minutes by 1 when seconds gets to 0.
      minutes = minutes - 1;
      timerMins.innerHTML = `${minutes}`;
      seconds = 60; //replenishing seconds to 60
    }
    --seconds; // seconds countdown by x1 every time function run (every second)
    timerSeconds.innerHTML = seconds == 60 ? "00" : `${seconds}`;

    if (seconds < 10) {
      zeroSecond.innerHTML = ":0";
    }
    if (seconds >= 10) {
      zeroSecond.innerHTML = ":";
    }
  }, 1000);
};

const showTimesUp = () => {
  timer.innerHTML = `<p id="times-up">Time's up!</p>`;
};

const hideTimesUp = () => {
  timer.innerHTML = "";
  timerMins.innerHTML = minutes;
  timerSeconds.innerHTML = "00"; timer.appendChild(timerMins);
  timer.appendChild(zeroSecond);
  timer.appendChild(timerSeconds);
};

const doCardsMatch = () => {
  if (oneEnCardShowing === true && onePtCardShowing === true) {
    // will only run if two cards showing
    if (enCardSelected.id === ptCardSelected.id) {
      enCardSelected.innerHTML = `<h2 style="color:orange;text-align:center;background-color:white;opacity:0.9;">PAIRED OFF ✅</h2>`;
      ptCardSelected.innerHTML = `<h2 style="color:orange;text-align:center;background-color:white;opacity:0.9;">PAIRED OFF ✅</h2>`;
      rightAnswAud.play();
      enCardSelected = "";
      ptCardSelected = "";
      oneEnCardShowing = false;
      onePtCardShowing = false;
      matchedChoices.push("x1match");
      if (matchedChoices.length === 16) {
        winAud.play();
        clearInterval(myInterval);
        alert("Congratulations! You won!");
      }
      cardsMatch = true;
    } else {
      if (livesArr.length === 3) {
        lifeOne.style.visibility = "hidden";
        wrongAnswAud.play();
        alert("it's not a match");
      } else if (livesArr.length === 2) {
        lifeTwo.style.visibility = "hidden";
        wrongAnswAud.play();
        alert("it's not a match");
      } else {
        lifeThree.style.visibility = "hidden";
        gameOverAud.play();
        alert("Game Over");
        clearInterval(myInterval);
      }
      enCardSelected.childNodes[1].style.visibility = "hidden";
      ptCardSelected.childNodes[1].style.visibility = "hidden";
      enCardSelected = "";
      ptCardSelected = "";
      oneEnCardShowing = false;
      onePtCardShowing = false;
      livesArr.shift();
    }
  } else if (gameInPlayOrNot === true) {
    alert("Please ensure you've selected one of each language card");
  } else {
    alert("Start the game by hitting the 'new game' button");
  }
  return cardsMatch;
};

const doCardsNotMatch = () => {
  if (oneEnCardShowing === true && onePtCardShowing === true) {
    // will only run if two cards showing
    if (enCardSelected.id === ptCardSelected.id) {
      enCardSelected.childNodes[1].style.visibility = "hidden";
      ptCardSelected.childNodes[1].style.visibility = "hidden";
      oneEnCardShowing = false;
      onePtCardShowing = false;
      if (livesArr.length === 3) {
        lifeOne.style.visibility = "hidden";
        wrongAnswAud.play();
        alert("it was a match!");
        ptCardSelected = "";
      } else if (livesArr.length === 2) {
        wrongAnswAud.play();
        lifeTwo.style.visibility = "hidden";
        ptCardSelected = "";
        alert("it was a match!");
      } else {
        lifeThree.style.visibility = "hidden";
        ptCardSelected = "";
        gameOverAud.play();
        alert("Game Over");
        clearInterval(myInterval);
      }
      enCardSelected = "";
      ptCardSelected = "";
      livesArr.shift();
      cardsMatch = true; // might not need this - check
    } else {
      enCardSelected.childNodes[1].style.visibility = "hidden";
      ptCardSelected.childNodes[1].style.visibility = "hidden";
      enCardSelected = "";
      ptCardSelected = "";
      oneEnCardShowing = false;
      onePtCardShowing = false;
    }
  } else {
    alert(`Please ensure you've selected one of each language card`);
  }
  return cardsMatch;
};

//EVENT LISTENERS 
audioBtn.addEventListener("click", () => {
  playAudio();
});

// NEW GAME BUTTON EVENT LISTENER
newGameBtn.addEventListener("click", () => {
  enCardSelected = "";
  ptCardSelected = "";
  oneEnCardShowing = false;
  onePtCardShowing = false;
  seconds = 0;
  minutes = 4;
  if (!gameInPlayOrNot) {
    // if game not in play i.e. if time's up or just landed on page
    hideTimesUp();
    myIntervalTimer();
    gameInPlayOrNot = true;
  } else {
    // if game already in play
    // should reset html to show time
    clearInterval(myInterval);
    myIntervalTimer();
  }
 

  //SHUFFLE
  let arrayShuffle = function (arr) {
    let newPos,
      temp;

    for (let i = arr.length - 1; i > 0; i--) {
      newPos = Math.floor(Math.random() * (i + 1));
      temp = arr[i]; 
      arr[i] = arr[newPos]; 
      arr[newPos] = temp; 
      shuffleAud.play();
    }
    return arr;
  };

  arrayShuffle(enCardArr);
  arrayShuffle(ptCardArr);

  if (livesArr.length < 3) {
    livesArr = [3, 2, 1];
    lifeOne.style.visibility = "visible";
    lifeTwo.style.visibility = "visible";
    lifeThree.style.visibility = "visible";
  }
  getEnCards();
  getPtCards();
});

submit.addEventListener("click", (e) => {
  alert("This new vocabulary set is coming soon!");
});

pairBtn.addEventListener("click", (e) => {
  doCardsMatch();
});

notPairBtn.addEventListener("click", () => {
  doCardsNotMatch();
});

//STARTING LOGIC
getEnCards();
getPtCards();

// OUTSTANDING ACTIONS
//fix alignment for 'paired off' text.
// CODE REFACTORING - could I merge returnCardContent() and createPtLanguageCard()?
//Ensure I can click on a card after clicking on 'paired off' card
//rabbit pic overflows. Overspilling text for help - cow.
// make cards 'data-id'
// move new game button - too easy to click on
//readme pics
