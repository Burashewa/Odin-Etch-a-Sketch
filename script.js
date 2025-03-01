const container = document.querySelector(".container");

function gridMaker(numDivs){
    for(let d = 0; d < numDivs; d++){
        let cell = document.createElement("div");
        container.appendChild(cell);
    }
}

gridMaker(256)