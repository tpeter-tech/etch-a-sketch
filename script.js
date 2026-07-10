const container = document.querySelector("#canvas-container");
const resizeBtn = document.querySelector("#resize-btn");

// 1. DYNAMIC GRID INJECTION LAYOUT ENGINE
function createGrid(squaresPerSide) {
    container.innerHTML = "";

    const totalSquares = squaresPerSide * squaresPerSide;
    const squareSizePercentage = 100 / squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        
        square.style.width = `${squareSizePercentage}%`;
        square.style.height = `${squareSizePercentage}%`;

        // EXTRA CREDIT HOVER: Generates a completely unique rainbow trail
        square.addEventListener("mouseenter", () => {
            const randomR = Math.floor(Math.random() * 256);
            const randomG = Math.floor(Math.random() * 256);
            const randomB = Math.floor(Math.random() * 256);
            
            square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        });

        container.appendChild(square);
    }
}

// 2. CANVAS LAYOUT RESIZER CONFIGURATION
function resizeCanvas() {
    let userInput = prompt("Enter canvas density resolution (Max: 100 squares per side):");
    
    // Safety verification check: Make sure user input is a number within limits
    let squares = parseInt(userInput);

    if (isNaN(squares) || squares < 1 || squares > 100) {
        alert("Please enter a valid integer parameter between 1 and 100.");
        return;
    }

    // Generate the fresh canvas configuration dimensions
    createGrid(squares);
}

// 3. EVENT LOG COUPLING LINKS
resizeBtn.addEventListener("click", resizeCanvas);

// Initialize application canvas layout parameters
createGrid(16);