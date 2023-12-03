let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;


window.onload = function(){
    setgame();
}

function setgame(){ //Setting up the game
    
    //Creating 3*3 grid for board
    for(let i=0; i<9; i++){
        let tile = document.createElement("div");
        tile.id= i.toString(); //Giving each tile a unique id from 0-8
        tile.addEventListener("click", selectTile); //Creating an Event listener-> when div is clicked it will call selectTile()
        document.getElementById("board").appendChild(tile)
    }

    setInterval(setMole,1000); //Set mole will be called in interval of 1000ms(1 secs)
    setInterval(setPlant, 1500) //Set Plant will be called in interval of 1500ms(1.5 secs)
}

function getRandomTile(){
    let num = Math.floor(Math.random()*9); //Math.random will provide number between 0-9(Except 9) and Math.floor will round-off the number to lower whole number
    return num.toString();
}

function setMole(){
    if (gameOver){
        return; //If clicked on Plant and Game over it will not continue the function
    }
    
    if (currMoleTile){
        currMoleTile.innerHTML = ""
    } //This will clear the Mole on privious pipe(div)

    let mole = document.createElement("img"); //Creating mole image
    mole.src = "./images/monty-mole.png";

    let n = getRandomTile();
    if (currPlantTile && currPlantTile.id == n){
        return;
    } //If plant has already occupied the tile Mole will not be assigned the same tile.  

    currMoleTile = document.getElementById(n); //Assigning the mole to the n(0-8) id pipe(div)
    currMoleTile.appendChild(mole); ////Inserting the mole image to the div
}

function setPlant(){
    if (gameOver){
        return; //If clicked on Plant and Game over it will not continue the function
    }
    
    if (currPlantTile){
        currPlantTile.innerHTML = "";
    } ////This will clear the Plant on privious pipe(div)

    let plant = document.createElement("img"); //Creating plant image
    plant.src = "./images/plant.png";

    let n = getRandomTile();
    if (currMoleTile && currMoleTile.id == n){
        return;
    }//If Mole has already occupied the tile Plant will not be assigned the same tile.

    currPlantTile = document.getElementById(n); //Assigning the plant to the n(0-8) id pipe(div)
    currPlantTile.appendChild(plant); //Inserting the plant image to the div
}

function selectTile(){
    if (gameOver){
        return; //If clicked on Plant and Game over it will not continue the function
    }

    if (this == currMoleTile){ //Checking if the this tile(which is clicked) is same as where the mole is
        score += 10; //Update the score
        document.getElementById("score").innerHTML = score.toString(); //This will display the updated score
    }
    else if(this == currPlantTile) {
        document.getElementById("score").innerHTML = "Game over... Your Score: " + score.toString(); 
        gameOver = true;
    }
}