/* Tutorial 4
Example 2 JavaScript code
*/
// Prompt the user for their name
let name = prompt("Please enter your name:");

// Validate the name input
if (name === null || name.trim() === "") {
    console.log("Sorry, the name cannot be blank.");
} else {
    // Prompt the user for the number of units completed
    let unitsInput = prompt("Please enter the number of units completed:");

    // Validate the units input
    if (unitsInput === null || unitsInput.trim() === "") {
        console.log("Sorry, the number of units cannot be blank.");
    } else {
        // Convert the input to a number
        let units = Number.parseInt(unitsInput, 10);

        // Check if the input is a valid integer >= 0
        if (!isNaN(units) && Number.isInteger(units) && units >= 0) {
            // Determine the grade standing
            let gradeStanding;
            if (units >= 0 && units <= 30) {
                gradeStanding = "Freshman";
            } else if (units >= 31 && units <= 60) {
                gradeStanding = "Sophomore";
            } else if (units >= 61 && units <= 90) {
                gradeStanding = "Junior";
            } else {
                gradeStanding = "Senior";
            }

            // Output the result
            console.log(`Hello ${name}\nYour grade standing is ${gradeStanding}`);
        } else {
            // Handle invalid units input
            console.log(`Sorry, "${unitsInput}" is not a valid number of units. Please enter a whole number >= 0.`);
        }
    }
}
console.log("kanchi's Output from Tutorial 4 Example 2");