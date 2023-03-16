// Import your game logic from app.js
// Example:
const { generateSecretNumber, compareGuess } = require("../app.js");

describe("The guessing game", () => {
  let secretNumber;

  beforeEach(() => {
    // Generate a new secret number before each test
    secretNumber = generateSecretNumber();
  });

  it("should correctly compare a correct guess", () => {
    const guess = secretNumber.toString();
    const result = compareGuess(guess, secretNumber);
    expect(result).toBe("Correct!");
  });

  it("should correctly compare a lower guess", () => {
    const guess = (secretNumber - 1).toString();
    const result = compareGuess(guess, secretNumber);
    expect(result).toBe("Too low");
  });

  it("should correctly compare a higher guess", () => {
    const guess = (secretNumber + 1).toString();
    const result = compareGuess(guess, secretNumber);
    expect(result).toBe("Too high");
  });

  it("should return an error message for an invalid guess", () => {
    const guess = "invalid";
    const result = compareGuess(guess, secretNumber);
    expect(result).toBe("Invalid guess");
  });
});
