const container = document.querySelector(".container");
let gridSize = 16;


function getGridSize() { // Called when 'Number of Grid' button is Clicked
     gridSize = window.prompt("Enter number of grid not more than 100");
     if(gridSize ==''){
        window.alert("Please Enter Grid side its required!")
        gridSize = window.prompt("Enter number of grid not more than 100");
     }
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

        cell.addEventListener("mouseover", ()=>{ //Color the grids while hovering
            
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);
                
                cell.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.7)`;
            
            
        });
        const reset = document.querySelector(".reset");
        reset.addEventListener("click", ()=>{
            cell.style.backgroundColor = ""
        })  
    }
}

gridMaker(gridSize)


 