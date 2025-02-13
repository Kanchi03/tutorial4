/* Tutorial 4
Example 7 JavaScript code
*/
// Function to validate time input
function isValidTime(hours, minutes, seconds) {
    return (
        Number.isInteger(hours) && hours >= 0 && hours <= 23 &&
        Number.isInteger(minutes) && minutes >= 0 && minutes <= 59 &&
        Number.isInteger(seconds) && seconds >= 0 && seconds <= 59
    );
}

// Prompt the user for hours, minutes, and seconds
let hours = parseInt(prompt("Enter the hours (0-23):"));
let minutes = parseInt(prompt("Enter the minutes (0-59):"));
let seconds = parseInt(prompt("Enter the seconds (0-59):"));

// Validate the input
if (isValidTime(hours, minutes, seconds)) {
    // Increment the time by one second
    seconds++;

    // Handle overflow of seconds
    if (seconds > 59) {
        seconds = 0;
        minutes++;

        // Handle overflow of minutes
        if (minutes > 59) {
            minutes = 0;
            hours++;

            // Handle overflow of hours
            if (hours > 23) {
                hours = 0;
            }
        }
    }

    // Output the results
    console.log(`Time input: ${hours}h${minutes}m${seconds - 1}s`);
    console.log(`One second later: ${hours}h${minutes}m${seconds}s`);
} else {
    console.log("Invalid input. Please enter valid hours (0-23), minutes (0-59), and seconds (0-59).");
}
console.log("kanchi's Output from Tutorial 4 Example 7");