# Portuguese Pairs Memory Game Javascript Project

<br>  


## Description
I created this game as a project during my web development course with a view to consolidate to knowledge I'd gained so far as a trainee developer, focusing predominantly on JavaScript. 

I decided to create a class-based pairs language learning card game, which allowed me to combine my interest in foreign languages alongside some of the key course content as well as JavaScript features new to me that I could research while game adaptations. I was able to practice using classes, functions, event listeners, if statements, array iterators and for loops (among others) and the new content I learnt included creating an interval timer, adding audio and creating a 'shuffle' function. 

Games are a great way to make study more enjoyable, and as the card content is all saved within variables, these can be easily adapted to include new words, audios, pictures and helping sentences for different stages of language learning. 

The result is a fun exercise that can be used flexibly to suit learners' needs with new vocabulary sets that you can link to the options in the drop down menu (currently for display purposes). 

<br>  
<br>  



## How to play the game
As with the normal pairs game, we are looking to match two cards, in this case an English card with a Portuguese one. 

Game play starts by hitting 'new game', at which point the 'arrayShuffle()' function is run and the cards are randomised. If the English word shown is the same as it is in Portuguese, the player should select 'I found a pair!' and the cards will be marked as 'paired off' and no longer playable. Otherwise, they should select 'Not a pair!' and the cards will flip back over again. Incorrect selection of these buttons will cause the player to lose a life (they have three) and this is shown by the heart icons in the centre. 

A new game can be started at any time and players have 4 minutes to make all of their matches before the game's over. Finally, if the player is unsure of the meaning of the word, hitting 'help!' will display a helping sentence containing the word, allowing them to see the word in context and they can hear the pronunciation of the word via the 'audio' button. 

<br>  
<br>  


## How to adapt the game
Different vocabulary can be used by defining new (EnNounCard and PtNounCard) classes, saving them as variables and replacing the in the enCardArray and ptCardArray. Different word types or even phrases could be used by adapting the existing classes or creating new ones as long as the aforementioned arrays are amended accordingly. 

With the functionality being in place, the game could be further adapted to new languages. 

The time length can also be amended by changing the 'minutes' and 'seconds' variable on lines 279 and 280 as desired. 


<br>  
<br>  


## Credits
- _nology coaches Jake, Charlie and Dan for their support and guidance. 
- notificationsounds.com, soundjay.com and pixabay.com for the audio samples. 
- Diego Vacchi for the Portuguese audio clips. 