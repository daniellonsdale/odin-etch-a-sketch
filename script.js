const gameContainer = document.querySelector("#game-container");
const setSizeButton = document.querySelector("#set-size");
const GAMECONTAINERSIZE = 600;

function initialGrid(){
    let boxSize = Math.floor((GAMECONTAINERSIZE / 16));
    boxSize += "px";
    document.body.style.setProperty("--gameBoxFlexBasis", boxSize);
    for (let i = 0; i < 16*16; i++){
        let box = document.createElement("div");
        box.classList.toggle("game-box");
        gameContainer.appendChild(box);
    }
}

initialGrid();