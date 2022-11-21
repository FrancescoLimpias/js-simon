// Game configuration
let nOfN;   //amount of numbers to remember
let minN;   //smallest number that can be generated
let maxN;   //biggest number that can be generated
let minMaxDist;

updateSettings(0, 100, 5);

// Rererences
const startElement = document.getElementById("start");
const displayElement = document.getElementById("display");
const inputsElement = document.getElementById("inputs");
const numberElement = document.getElementById("input-number");
const confirmButton = document.getElementById("confirm");

// Link UI to JS
startElement.addEventListener("click", startGame);
confirmButton.addEventListener("click", addNumber);

// Game controls
let timer, testArray;
function updateSettings(newMinN, newMaxN, newNOfN) {

    // update game configuration
    minN = newMinN;
    maxN = newMaxN;
    nOfN = newNOfN;

    // calculate new derived data
    minMaxDist = Math.abs(newMaxN - newMinN);

}
function startGame() {

    // reset timer
    clearTimeout(timer);

    // reset interface
    displayElement.innerHTML = "";
    inputsElement.classList.remove("active");

    // reset arrays
    testArray = [];
    resultArray = [];

    // Generate and display random numbers    
    for (let i = 0; i < nOfN; i++) {

        // create a random number
        const randomNumber =
            Math.round(     //round number to nearest integer
                minN + (Math.random() * minMaxDist)
            );

        // store the random number for later use
        testArray.push(randomNumber);

        // print the number
        displayElement.insertAdjacentHTML("beforeend", "<li>" + randomNumber + "</li>");
    }

    // Start memorization timer
    timer = setTimeout(startTest, 3000);
}
function endGame() {

    // Produce score
    let score = 0;
    for (let i = 0; i < testArray.length; i++) {
        if (testArray[i] == resultArray[i]) {
            score++;
        }
    }

    // Display result
    if (score == nOfN) {
        // victory

        displayElement.insertAdjacentHTML("beforeend", "Winner!");
    } else {
        // defeat

        displayElement.insertAdjacentHTML("beforeend", `Lost! ${score}/${nOfN}`);
    }
}

// Event handlers
function startTest() {

    // Clear displayElement
    displayElement.innerHTML = "";

    // Show inputs
    inputsElement.classList.add("active");

}
let resultArray = [];
function addNumber() {

    // Get the inserted value
    const insertedNumber = numberElement.value;

    // validate and store number
    if (!isNaN(insertedNumber)) {

        resultArray.push(insertedNumber);

    }

    numberElement.value = "";

    // Check if resultArray is full
    if (resultArray.length == nOfN) {

        endGame();

    }
}