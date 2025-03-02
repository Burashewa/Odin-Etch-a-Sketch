const container = document.querySelector(".container");
let gridSize = 16;


function getGridSize() {
     gridSize = window.prompt("Enter number of grid not more than 100");
     gridMaker(gridSize);
}

function gridMaker(gridSize){
    container.innerHTML = "";
    for(let d = 0; d < gridSize*gridSize; d++){
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.style.width = `calc(100% / ${gridSize})`;
        cell.style.height = `calc(100% / ${gridSize})`;
        container.appendChild(cell);
    }
}

gridMaker(gridSize)