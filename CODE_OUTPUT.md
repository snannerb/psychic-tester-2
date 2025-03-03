**This file consists of the entire unaltered output for reference.**

Here's the **fully functioning code** for the **Psychic Ability Test App**, including all files and filepaths. You can copy and paste these into your project structure and run the app effortlessly.

---

### **Project Structure**
```
psychic-ability-test/
│
├── index.html
├── styles.css
└── script.js
```

---

### **1. HTML (`index.html`)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Psychic Ability Test</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</head>
<body>
  <div class="container">
    <header>
      <h1>Psychic Ability Test</h1>
      <p>Guess the hidden words to test your psychic powers!</p>
    </header>
    <main>
      <button id="start-button">Start Test</button>
      <div id="test-area" class="hidden">
        <p>Round <span id="round">1</span> of 5</p>
        <input type="text" id="guess-input" placeholder="Your guess..." maxlength="20">
        <button id="submit-button">Submit</button>
        <p id="result"></p>
      </div>
      <div id="score-area" class="hidden">
        <p>Psychic Score: <span id="score">0</span></p>
      </div>
    </main>
    <footer>
      <a href="https://pixeloracle.com" target="_blank" rel="noopener noreferrer">Pixel Oracle</a>
    </footer>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

---

### **2. CSS (`styles.css`)**
```css
/* Reset styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body styling */
body {
  font-family: 'Press Start 2P', cursive;
  background-color: #000;
  color: #00ff00;
  line-height: 1.6;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Container styling */
.container {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

header h1 {
  margin-bottom: 20px;
  font-size: 24px;
}

header p {
  margin-bottom: 30px;
  font-size: 14px;
}

/* Button styling */
button {
  font-family: 'Press Start 2P', cursive;
  background-color: #00ff00;
  color: #000;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin: 10px;
}

button:hover {
  background-color: #00cc00;
}

/* Input styling */
input {
  font-family: 'Press Start 2P', cursive;
  background-color: #000;
  color: #00ff00;
  border: 2px solid #00ff00;
  padding: 10px;
  margin: 10px;
  width: 200px;
}

/* Hidden elements */
.hidden {
  display: none;
}

/* Result and score styling */
#result, #score-area {
  margin-top: 20px;
  font-size: 16px;
}

/* Footer styling */
footer {
  margin-top: 50px;
  font-size: 12px;
}

footer a {
  color: #00ff00;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

/* Responsive design */
@media (max-width: 600px) {
  header h1 {
    font-size: 20px;
  }

  header p {
    font-size: 12px;
  }

  button, input {
    width: 100%;
    margin: 10px 0;
  }
}
```

---

### **3. JavaScript (`script.js`)**
```javascript
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
    resultDisplay