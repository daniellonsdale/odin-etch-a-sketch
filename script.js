const gameContainer = document.querySelector("#game-container");
const setSizeButton = document.querySelector("#set-size");
const rainbowToggle = document.querySelector("#rainbow-toggle");
const rainbowText = document.querySelector("#current-rainbow-state");
const boardClear = document.querySelector("#board-clear");
const GAMECONTAINERSIZE = 600;
let gameBoxes;
let rainbow = false;

function initialGrid(){
    let boxSize = Math.floor((GAMECONTAINERSIZE / 16));
    boxSize += "px";
    document.body.style.setProperty("--gameBoxFlexBasis", boxSize);
    for (let i = 0; i < 16*16; i++){
        let box = document.createElement("div");
        box.classList.toggle("game-box");
        gameContainer.appendChild(box);
    }
    gameBoxes = document.querySelectorAll(".game-box");

    //Rainbow/black toggle
    gameBoxes.forEach(function(element){
        element.addEventListener("mouseover", () => {
            if(rainbow){
                element.style.backgroundColor = randomHsl();
            }else{
                element.style.backgroundColor = "black";
            }
        });
    });
}

function customGrid(size){
    let boxSize = Math.floor((GAMECONTAINERSIZE / size));
    boxSize += "px";
    document.body.style.setProperty("--gameBoxFlexBasis", boxSize);
    for (let i = 0; i < size*size; i++){
        let box = document.createElement("div");
        box.classList.toggle("game-box");
        gameContainer.appendChild(box);
    }
    gameBoxes = document.querySelectorAll(".game-box");

    //Add event listeners back
    gameBoxes.forEach(function(element){
        element.addEventListener("mouseover", () => {
            if(rainbow){
                element.style.backgroundColor = randomHsl();
            }else{
                element.style.backgroundColor = "black";
            }
        });
    });
}

initialGrid();

rainbowToggle.addEventListener("click", () => {
    if(rainbow){
        rainbow = false;
        rainbowText.textContent = "Now set to Black"
    }else{
        rainbow = true;
        rainbowText.textContent = "Now set to Rainbow"
    }
});

boardClear.addEventListener("click", () => {
    gameBoxes.forEach(function(element){
        element.style.backgroundColor = "";
    });
});

function removePrev(){
    gameBoxes.forEach(function(element){
        gameContainer.removeChild(element);
    });
}

setSizeButton.addEventListener("click", () => {
    removePrev();
    let size = prompt("Choose grid size (1-100)");
    customGrid(size);
});

//Rainbow function
function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}