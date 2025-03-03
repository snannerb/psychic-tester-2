// List of words for the test
const words = [
  "APPLE", "BANANA", "CHERRY", "DURIAN", "ELDERBERRY",
  "FIG", "GRAPE", "HONEYDEW", "KIWI", "LEMON",
  "MANGO", "NECTARINE", "ORANGE", "PAPAYA", "QUINCE"
];

let hiddenWords = [];
let currentRound = 1;
let score = 0;

// DOM elements
const startButton = document.getElementById("start-button");
const testArea = document.getElementById("test-area");
const roundDisplay = document.getElementById("round");
const guessInput = document.getElementById("guess-input");
const submitButton = document.getElementById("submit-button");
const resultDisplay = document.getElementById("result");
const scoreArea = document.getElementById("score-area");
const scoreDisplay = document.getElementById("score");

// Event listeners
startButton.addEventListener("click", startTest);
submitButton.addEventListener("click", submitGuess);

// Start the test
function startTest() {
  startButton.classList.add("hidden");
  testArea.classList.remove("hidden");
  scoreArea.classList.remove("hidden");
  resetTest();
}

// Reset the test for a new round
function resetTest() {
  hiddenWords = getRandomWords(2);
  guessInput.value = "";
  resultDisplay.textContent = "";
  roundDisplay.textContent = currentRound;
}

// Get random words from the list
function getRandomWords(count) {
  const shuffled = words.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Validate user input (alphabetic characters only)
function validateInput(input) {
  return /^[A-Za-z]+$/.test(input);
}

// Submit the user's guess
function submitGuess() {
  const guess = guessInput.value.trim().toUpperCase();

  // Input validation
  if (guess === "") {
    resultDisplay.textContent = "Please enter a guess!";
    return;
  }

  if (!validateInput(guess)) {
    resultDisplay.