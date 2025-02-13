/* Tutorial 4
Example 5 JavaScript code
*/
// Define the correct password
const correctPassword = "secret";

// Initialize variables
let attempts = 0;
let maxAttempts = 3;
let isCorrect = false;

// Use a loop to prompt the user for the password
while (attempts < maxAttempts) {
    // Prompt the user for the password
    let userInput = prompt("Please enter the password:");

    // Check if the input matches the correct password
    if (userInput === correctPassword) {
        isCorrect = true;
        attempts++;
        break; // Exit the loop if the password is correct
    } else {
        attempts++;
    }
}

// Output the result
if (isCorrect) {
    console.log(`You entered the correct password after ${attempts} attempt(s).`);
} else {
    console.log(`Your account is locked! You failed to enter the correct password ${maxAttempts} times.`);
}
console.log("kanchi's Output from Tutorial 4 Example 5");