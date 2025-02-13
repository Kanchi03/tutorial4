/* Tutorial 4
Example 3 JavaScript code
*/
// Prompt the user for a day of the week
let dayEntered = prompt("Please enter a day of the week (three-letter abbreviation, e.g., sun, mon, tue):");

// Validate the input
if (dayEntered === null || dayEntered.trim() === "") {
    console.log("Sorry, the input cannot be blank.");
} else {
    // Convert input to lowercase and trim whitespace
    dayEntered = dayEntered.trim().toLowerCase();

    // Determine the following day using switch/case
    let followingDay;
    switch (dayEntered) {
        case "sun":
            followingDay = "mon";
            break;
        case "mon":
            followingDay = "tue";
            break;
        case "tue":
            followingDay = "wed";
            break;
        case "wed":
            followingDay = "thu";
            break;
        case "thu":
            followingDay = "fri";
            break;
        case "fri":
            followingDay = "sat";
            break;
        case "sat":
            followingDay = "sun";
            break;
        default:
            // Handle invalid input
            console.log(`Sorry, "${dayEntered}" is not a valid day. Please enter a three-letter abbreviation (e.g., sun, mon, tue).`);
            break;
    }

    // Output the result if the input is valid
    if (followingDay) {
        console.log(`You entered: ${dayEntered}\nThe following day is: ${followingDay}`);
    }
}
console.log("kanchi's Output from Tutorial 4 Example 3");