// Game configuration
let nOfN;   //amount of numbers to remember
let minN;   //smallest number that can be generated
let maxN;   //biggest number that can be generated
let minMaxDist;

updateSettings(0, 100, 5);

// Rererences
const startElement = document.getElementById("start");
const displayElement = document.getElementById("display");

// Link UI to JS
startElement.addEventListener("click", startGame);

// Game controls
function updateSettings(newMinN, newMaxN, newNOfN) {

    // update game configuration
    minN = newMinN;
    maxN = newMaxN;
    nOfN = newNOfN;

    // calculate new derived data
    minMaxDist = Math.abs(newMaxN - newMinN);

}
function startGame() {

    // Declare testArray
    const testArray = [];

    // Generate random numbers    
    for (let i = 0; i < nOfN; i++) {

        testArray.push(
            Math.round(minN + (Math.random() * minMaxDist))
        );

    }

    console.log(testArray);
}