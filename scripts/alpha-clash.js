// function play() {
//   //Step1- Hide the home screen. To hide the screen add hidden class to the home section..

//   const homeSection = document.getElementById('home-screen');
//   homeSection.classList.add('hidden');
//   // console.log(homeSection.classList);

//   //Step2- Show the playground
//   const playgroundSection = document.getElementById('play-ground');
//   playgroundSection.classList.remove('hidden');
//   // console.log(playgroundSection);


// }
function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;
  console.log('player pressed', playerPressed);

  // get the expected to press
  const currentAlphaElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphaElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // console.log(playerPressed, expectedAlphabet);

  // Check matched or not
  if (playerPressed === expectedAlphabet) {
    console.log('You get a point');

    const currentScore = getTextElementValueById('current-score');
    // console.log(currentScore);
    const updateScore = currentScore + 1;
    setTextElementValueById('current-score', updateScore);


    -------------------------------
    // // uPDATE Score
    // // 1.Get the current score
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);


     currentScore = getTextElementValueById('current-score');

    // // 2.Increase the score by 1
    const newScore = currentScore + 1;


    // // --Start a new round--
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
    
  }
  else {

    const currentLife = getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life', updatedLife);


    if (updatedLife === 0) {
      gameOver();
    }






    -----------------------------------
    // console.log("You missed, you lost a life..");
    // // Step-1: Get the current life number
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);

    // // Step-2: Reduce the life count
    // const newLife = currentLife - 1;


    // // Step-3: Display the updated life count
    // currentLifeElement.innerText = newLife;
  }
}

document.addEventListener('keyup',handleKeyboardKeyUpEvent);



function continueGame() {
  // Step-1-Generate a random alphabet..
  const alphabet =  getARandomAlphaBet();
  // console.log('Your random alphabet', alphabet)

  // Set randomly generated alphabet to the screen
  const currentAlphaElement = document.getElementById('current-alphabet');
  currentAlphaElement.innerText = alphabet;

  // Set background color
  setBackgroundColorById(alphabet);
}





function play() {
  hideElementById('home-screen');
  showElementById('play-ground');
  continueGame();
  
  // reset score and life
  setTextElementValueById('current life', 5);
  setTextElementValueById('current-score', 0);

  continueGame();
}

function gameOver() {
  hideElementById('play-ground');
  showElementById('final-score');

  // update final score
  // 1.Get the final score
  const lastScore = getTextElementValueById('current-score');
  console.log(lastScore);
  setTextElementValueById('last-score', lastScore);

  // Clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById('current-alphabet');
  // console.log(currentAlphabet);
  removeBackgroundColorById(currentAlphabet);
}