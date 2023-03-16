const MAX_TRIES = 10;

document.addEventListener("DOMContentLoaded", () => {
  // Select form and input elements

  let numberOfTries = 0;
  const form = document.querySelector("form");
  const input = document.querySelector("#guess-input");
  const feedback = document.querySelector("#feedback");
  const tries = document.querySelector("#tries");
  // Event listener for form submit
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get user input
    const guess = input.value;

    // TODO: Add game logic
    // - Compare user's guess to the secret number
    // - Give feedback to the user (too high, too low, correct)
    // - You can change the content of the feedback element using feedback.textContent = "Feedback text"
    // - Keep track of the number of tries
    // - You can change the content of the tries element using tries.textContent = "Number of tries"
    // - Repeat until the game is won or the maximum number of tries is reached

    // Reset input field
    input.value = "";
    input.focus();
  });
});

// Function to generate a random secret number between 1 and 100
function generateSecretNumber() {}

// Function to compare a guess to the secret number and return feedback to the user
function compareGuess(guess, secretNumber) {}

// Export functions for testing
module.exports = {
  generateSecretNumber,
  compareGuess,
};
