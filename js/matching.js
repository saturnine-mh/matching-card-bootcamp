document.querySelector("#topRow1").addEventListener("click", playGame);
document.querySelector("#topRow2").addEventListener("click", playGame);
document.querySelector("#topRow3").addEventListener("click", playGame);
document.querySelector("#topRow4").addEventListener("click", playGame);
document.querySelector("#topRow5").addEventListener("click", playGame);
document.querySelector("#bottomRow1").addEventListener("click", playGame);
document.querySelector("#bottomRow2").addEventListener("click", playGame);
document.querySelector("#bottomRow3").addEventListener("click", playGame);
document.querySelector("#bottomRow4").addEventListener("click", playGame);
document.querySelector("#bottomRow5").addEventListener("click", playGame);
document.querySelector("#start").addEventListener("click", start);
document.querySelector("#reset").addEventListener("click", reset);
let gameBoard = [
    {id: 0, images: 'images/jupiter.gif'},
    {id: 1, images: 'images/jupiter.gif'},
    {id: 2, images: 'images/earth.gif'},
    {id: 3, images: 'images/earth.gif'},
    {id: 4, images: 'images/blackhole.gif'},
    {id: 5, images: 'images/blackhole.gif'},
    {id: 6, images: 'images/saturn.gif'},
    {id: 7, images: 'images/saturn.gif'},
    {id: 8, images: 'images/astro.gif'},
    {id: 9, images: 'images/astro.gif'},

];
let gameImage = []
// let gameBoard = []
let turnCounter = 0;
let boxesClicked = [];
let boxColorArray = [];
let boxColor = [];
let matchCounter = 0;

function shuffle() {
    let currentIndex = gameBoard.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [gameBoard[currentIndex], gameBoard[randomIndex]] = [
        gameBoard[randomIndex], gameBoard[currentIndex]];
        
    }
  
    
    
  }
  shuffle()
  console.log(gameBoard)

function start(){
    document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
}



function playGame() {
  let boxID = event.target.id;
  document.querySelector("#topRow1");
  console.log(boxID);
  console.log(event);
  console.log(gameBoard);
 for(let i = 0; i < gameBoard.length; i++){
    gameImage.push(gameBoard[i].images)
 }
 console.log(gameImage)
  if (boxID == "topRow1IMG") {
    console.log(gameBoard[0].images, 'hi 2025');
    // document.getElementById('top1').style.backgroundColor = randomColor
    if (gameBoard[0].images == gameImage[0]) {
      document.getElementById("topRow1IMG").src = gameBoard[0].images;
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
      boxesClicked.push(boxID);
      console.log(boxesClicked);
    } else if (gameBoard[0].images == gameImage[1]) {
      document.getElementById("topRow1IMG").src = gameBoard[1].images
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
      boxesClicked.push(boxID);
      console.log(boxesClicked);
    }
      else if (gameBoard[0].images == gameImage[2]) {
        document.getElementById("topRow1IMG").src = gameBoard[2].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[0].images == gameImage[3]) {
        document.getElementById("topRow1IMG").src = gameBoard[3].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[0].images == gameImage[4]) {
        document.getElementById("topRow1IMG").src = gameBoard[4].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[0].images == gameImage[5]) {
        document.getElementById("topRow1IMG").src = gameBoard[5].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[0].images == gameImage[6]) {
        document.getElementById("topRow1IMG").src = gameBoard[6].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[0].images == gameImage[7]) {
        document.getElementById("topRow1IMG").src = gameBoard[7].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[0].images == gameImage[8]) {
        document.getElementById("topRow1IMG").src = gameBoard[8].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[0].images == gameImage[9]) {
        document.getElementById("topRow1IMG").src = gameBoard[9].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
  }
  
  
  else if (boxID == "topRow2IMG") {
    console.log(gameBoard[1]);
    // document.getElementById('top1').style.backgroundColor = randomColor
    if (gameBoard[1].images == gameImage[0]) {
      document.getElementById("topRow2IMG").src = gameBoard[0].images
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
      boxesClicked.push(boxID);
      console.log(boxesClicked);
    } else if (gameBoard[1].images == gameImage[1]) {
      document.getElementById("topRow2IMG").src = gameBoard[1].images
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
      boxesClicked.push(boxID);
      console.log(boxesClicked);
    }
    else if (gameBoard[1].images == gameImage[2]) {
        document.getElementById("topRow2IMG").src = gameBoard[2].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[1].images == gameImage[3]) {
        document.getElementById("topRow2IMG").src = gameBoard[3].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[1].images == gameImage[4]) {
        document.getElementById("topRow2IMG").src = gameBoard[4].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[1].images == gameImage[5]) {
        document.getElementById("topRow2IMG").src = gameBoard[5].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[1].images == gameImage[6]) {
        document.getElementById("topRow2IMG").src = gameBoard[6].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[1].images == gameImage[7]) {
        document.getElementById("topRow2IMG").src = gameBoard[7].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[1].images == gameImage[8]) {
        document.getElementById("topRow2IMG").src = gameBoard[8].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[1].images == gameImage[9]) {
        document.getElementById("topRow2IMG").src = gameBoard[9].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
  }
  
  
  else if (boxID == "topRow3IMG") {
    console.log(gameBoard[2]);
    // document.getElementById('top1').style.backgroundColor = randomColor
    if (gameBoard[2].images == gameImage[0]) {
      document.getElementById("topRow3IMG").src = gameBoard[0].images
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
      boxesClicked.push(boxID);
      console.log(boxesClicked);
    } else if (gameBoard[2].images == gameImage[1]) {
      document.getElementById("topRow3IMG").src = gameBoard[1].images
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
      boxesClicked.push(boxID);
      console.log(boxesClicked);
    }
    else if (gameBoard[2].images == gameImage[2]) {
        document.getElementById("topRow3IMG").src = gameBoard[2].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[2].images == gameImage[3]) {
        document.getElementById("topRow3IMG").src = gameBoard[3].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[2].images == gameImage[4]) {
        document.getElementById("topRow3IMG").src = gameBoard[4].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[2].images == gameImage[5]) {
        document.getElementById("topRow3IMG").src = gameBoard[5].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[2].images == gameImage[6]) {
        document.getElementById("topRow3IMG").src = gameBoard[6].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[2].images == gameImage[7]) {
        document.getElementById("topRow3IMG").src = gameBoard[7].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[2].images == gameImage[8]) {
        document.getElementById("topRow3IMG").src = gameBoard[8].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[2].images == gameImage[9]) {
        document.getElementById("topRow3IMG").src = gameBoard[9].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
  } 
  
  
  else if (boxID == "topRow4IMG") {
    console.log(gameBoard[1]);
    // document.getElementById('top1').style.backgroundColor = randomColor
    if (gameBoard[3].images == 0) {
      document.getElementById("topRow4IMG").src = gameBoard[0].images
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
      boxesClicked.push(boxID);
      console.log(boxesClicked);
    } else if (gameBoard[3].images == 1) {
      document.getElementById("topRow4IMG").src = gameBoard[1].images
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
      boxesClicked.push(boxID);
      console.log(boxesClicked);
    }
    else if (gameBoard[3].images == gameImage[2]) {
        document.getElementById("topRow4IMG").src = gameBoard[2].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[3].images == gameImage[3]) {
        document.getElementById("topRow4IMG").src = gameBoard[3].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[3].images == gameImage[4]) {
        document.getElementById("topRow4IMG").src = gameBoard[4].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[3].images == gameImage[5]) {
        document.getElementById("topRow4IMG").src = gameBoard[5].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[3].images == gameImage[6]) {
        document.getElementById("topRow4IMG").src = gameBoard[6].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[3].images == gameImage[7]) {
        document.getElementById("topRow4IMG").src = gameBoard[7].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[3].images == gameImage[8]) {
        document.getElementById("topRow4IMG").src = gameBoard[8].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[3].images == gameImage[9]) {
        document.getElementById("topRow4IMG").src = gameBoard[9].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
  } 


  else if (boxID == "topRow5IMG") {
    console.log(gameBoard[4]);
    // document.getElementById('top1').style.backgroundColor = randomColor
    if (gameBoard[4].images == 0) {
      document.getElementById("topRow5IMG").src = gameBoard[0].images
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
      boxesClicked.push(boxID);
      console.log(boxesClicked);
    } else if (gameBoard[4].images == 1) {
      document.getElementById("topRow5IMG").src = gameBoard[1].images
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
      boxesClicked.push(boxID);
      console.log(boxesClicked);
    }
    else if (gameBoard[4].images == gameImage[2]) {
        document.getElementById("topRow5IMG").src = gameBoard[2].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[4].images == gameImage[3]) {
        document.getElementById("topRow5IMG").src = gameBoard[3].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[4].images == gameImage[4]) {
        document.getElementById("topRow5IMG").src = gameBoard[4].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[4].images == gameImage[5]) {
        document.getElementById("topRow5IMG").src = gameBoard[5].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[4].images == gameImage[6]) {
        document.getElementById("topRow5IMG").src = gameBoard[6].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[4].images == gameImage[7]) {
        document.getElementById("topRow5IMG").src = gameBoard[7].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[4].images == gameImage[8]) {
        document.getElementById("topRow5IMG").src = gameBoard[8].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[4].images == gameImage[9]) {
        document.getElementById("topRow5IMG").src = gameBoard[9].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
  } 
  
  
  else if (boxID == "bottomRow1IMG") {
    console.log(gameBoard[5]);
    // document.getElementById('top1').style.backgroundColor = randomColor
    if (gameBoard[5].images == gameImage[0]) {
      document.getElementById("bottomRow1IMG").src = gameBoard[0].images
      boxesClicked.push(boxID);
      console.log(boxesClicked);
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    } else if (gameBoard[5].images == gameImage[1]) {
      document.getElementById("bottomRow1IMG").src = gameBoard[1].images
      boxesClicked.push(boxID);
      console.log(boxesClicked);
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    }
    else if (gameBoard[5].images == gameImage[2]) {
        document.getElementById("bottomRow1IMG").src = gameBoard[2].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[5].images == gameImage[3]) {
        document.getElementById("bottomRow1IMG").src = gameBoard[3].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[5].images == gameImage[4]) {
        document.getElementById("bottomRow1IMG").src = gameBoard[4].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[5].images == gameImage[5]) {
        document.getElementById("bottomRow1IMG").src = gameBoard[5].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[5].images == gameImage[6]) {
        document.getElementById("bottomRow1IMG").src = gameBoard[6].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[5].images == gameImage[7]) {
        document.getElementById("topRow1IMG").src = gameBoard[7].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[5].images == gameImage[8]) {
        document.getElementById("topRow1IMG").src = gameBoard[8].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[5].images == gameImage[9]) {
        document.getElementById("topRow1IMG").src = gameBoard[9].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
  } 
  
  
  else if (boxID == "bottomRow2IMG") {
    console.log(gameBoard[6]);
    // document.getElementById('top1').style.backgroundColor = randomColor
    if (gameBoard[6].images == gameImage[0]) {
      document.getElementById("bottomRow2IMG").src = gameBoard[0].images
      boxesClicked.push(boxID);
      console.log(boxesClicked);
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    } else if (gameBoard[6].images == gameImage[1]) {
      document.getElementById("bottomRow2IMG").src = gameBoard[1].images
      boxesClicked.push(boxID);
      console.log(boxesClicked);
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    }
    else if (gameBoard[6].images == gameImage[2]) {
        document.getElementById("bottomRow2IMG").src = gameBoard[2].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[6].images == gameImage[3]) {
        document.getElementById("bottomRow2IMG").src = gameBoard[3].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[6].images == gameImage[4]) {
        document.getElementById("bottomRow2IMG").src = gameBoard[4].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[6].images == gameImage[5]) {
        document.getElementById("bottomRow2IMG").src = gameBoard[5].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[6].images == gameImage[6]) {
        document.getElementById("bottomRow2IMG").src = gameBoard[6].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[6].images == gameImage[7]) {
        document.getElementById("bottomRow2IMG").src = gameBoard[7].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[6].images == gameImage[8]) {
        document.getElementById("bottomRow2IMG").src = gameBoard[8].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[6].images == gameImage[9]) {
        document.getElementById("bottomRow2IMG").src = gameBoard[9].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
  } 
  
  
  else if (boxID == "bottomRow3IMG") {
    console.log(gameBoard[7]);
    // document.getElementById('top1').style.backgroundColor = randomColor
    if (gameBoard[7].images == gameImage[0]) {
      document.getElementById("bottomRow3IMG").src = gameBoard[0].images
      boxesClicked.push(boxID);
      console.log(boxesClicked);
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    } else if (gameBoard[7].images == gameImage[1]) {
      document.getElementById("bottomRow3IMG").src = gameBoard[1].images
      boxesClicked.push(boxID);
      console.log(boxesClicked);
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    }
    else if (gameBoard[7].images == gameImage[2]) {
        document.getElementById("bottomRow3IMG").src = gameBoard[2].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[7].images == gameImage[3]) {
        document.getElementById("bottomRow3IMG").src = gameBoard[3].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[7].images == gameImage[4]) {
        document.getElementById("bottomRow3IMG").src = gameBoard[4].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[7].images == gameImage[5]) {
        document.getElementById("bottomRow3IMG").src = gameBoard[5].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[7].images == gameImage[6]) {
        document.getElementById("bottomRow3IMG").src = gameBoard[6].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[7].images == gameImage[7]) {
        document.getElementById("bottomRow3IMG").src = gameBoard[7].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[7].images == gameImage[8]) {
        document.getElementById("bottomRow3IMG").src = gameBoard[8].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
      else if (gameBoard[7].images == gameImage[9]) {
        document.getElementById("bottomRow3IMG").src = gameBoard[9].images
        turnCounter = turnCounter + 1;
        document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
        boxesClicked.push(boxID);
        console.log(boxesClicked);
      }
  } 



  else if (boxID == "bottomRow4IMG") {
    console.log(gameBoard[8],'last box');
    // document.getElementById('top1').style.backgroundColor = randomColor
    if (gameBoard[8].images == gameImage[0]) {
      document.getElementById("bottomRow4IMG").src = gameBoard[0].images
      boxesClicked.push(boxID);
      console.log(boxesClicked);
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    } else if (gameBoard[8].images == gameImage[1]) {
      document.getElementById("bottomRow4IMG").src = gameBoard[1].images
      boxesClicked.push(boxID);
      console.log(boxesClicked);
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    }
  else if (gameBoard[8].images == gameImage[2]) {
    document.getElementById("bottomRow4IMG").src = gameBoard[2].images
    turnCounter = turnCounter + 1;
    document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    boxesClicked.push(boxID);
    console.log(boxesClicked);
  }
  else if (gameBoard[8].images == gameImage[3]) {
    document.getElementById("bottomRow4IMG").src = gameBoard[3].images
    turnCounter = turnCounter + 1;
    document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    boxesClicked.push(boxID);
    console.log(boxesClicked);
  }
  else if (gameBoard[8].images == gameImage[4]) {
    document.getElementById("bottomRow4IMG").src = gameBoard[4].images
    turnCounter = turnCounter + 1;
    document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    boxesClicked.push(boxID);
    console.log(boxesClicked);
  }
  else if (gameBoard[8].images == gameImage[5]) {
    document.getElementById("bottomRow4IMG").src = gameBoard[5].images
    turnCounter = turnCounter + 1;
    document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    boxesClicked.push(boxID);
    console.log(boxesClicked);
  }
  else if (gameBoard[8].images == gameImage[6]) {
    document.getElementById("bottomRow4IMG").src = gameBoard[6].images
    turnCounter = turnCounter + 1;
    document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    boxesClicked.push(boxID);
    console.log(boxesClicked);
  }
  else if (gameBoard[8].images == gameImage[7]) {
    document.getElementById("bottomRow4IMG").src = gameBoard[7].images
    turnCounter = turnCounter + 1;
    document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    boxesClicked.push(boxID);
    console.log(boxesClicked);
  }
  else if (gameBoard[8].images == gameImage[8]) {
    document.getElementById("bottomRow4IMG").src = gameBoard[8].images
    turnCounter = turnCounter + 1;
    document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    boxesClicked.push(boxID);
    console.log(boxesClicked);
  }
  else if (gameBoard[8].images == gameImage[9]) {
    document.getElementById("bottomRow4IMG").src = gameBoard[9].images
    turnCounter = turnCounter + 1;
    document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    boxesClicked.push(boxID);
    console.log(boxesClicked);
  }
}


  else if (boxID == "bottomRow5IMG") {
    console.log(gameBoard[9],'last box');
    // document.getElementById('top1').style.backgroundColor = randomColor
    if (gameBoard[9].images == gameImage[0]) {
      document.getElementById("bottomRow5IMG").src = gameBoard[0].images
      boxesClicked.push(boxID);
      console.log(boxesClicked);
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    } else if (gameBoard[9].images == gameImage[1]) {
      document.getElementById("bottomRow5IMG").src = gameBoard[1].images
      boxesClicked.push(boxID);
      console.log(boxesClicked);
      turnCounter = turnCounter + 1;
      document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    }
  else if (gameBoard[9].images == gameImage[2]) {
    document.getElementById("bottomRow5IMG").src = gameBoard[2].images
    turnCounter = turnCounter + 1;
    document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    boxesClicked.push(boxID);
    console.log(boxesClicked);
  }
  else if (gameBoard[9].images == gameImage[3]) {
    document.getElementById("bottomRow5IMG").src = gameBoard[3].images
    turnCounter = turnCounter + 1;
    document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    boxesClicked.push(boxID);
    console.log(boxesClicked);
  }
  else if (gameBoard[9].images == gameImage[4]) {
    document.getElementById("bottomRow5IMG").src = gameBoard[4].images
    turnCounter = turnCounter + 1;
    document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    boxesClicked.push(boxID);
    console.log(boxesClicked);
  }
  else if (gameBoard[9].images == gameImage[5]) {
    document.getElementById("bottomRow5IMG").src = gameBoard[5].images
    turnCounter = turnCounter + 1;
    document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    boxesClicked.push(boxID);
    console.log(boxesClicked);
  }
  else if (gameBoard[9].images == gameImage[6]) {
    document.getElementById("bottomRow5IMG").src = gameBoard[6].images
    turnCounter = turnCounter + 1;
    document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    boxesClicked.push(boxID);
    console.log(boxesClicked);
  }
  else if (gameBoard[9].images == gameImage[7]) {
    document.getElementById("bottomRow5IMG").src = gameBoard[7].images
    turnCounter = turnCounter + 1;
    document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    boxesClicked.push(boxID);
    console.log(boxesClicked);
  }
  else if (gameBoard[9].images == gameImage[8]) {
    document.getElementById("bottomRow5IMG").src = gameBoard[8].images
    turnCounter = turnCounter + 1;
    document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    boxesClicked.push(boxID);
    console.log(boxesClicked);
  }
  else if (gameBoard[9].images == gameImage[9]) {
    document.getElementById("bottomRow5IMG").src = gameBoard[9].images
    turnCounter = turnCounter + 1;
    document.querySelector("h2").innerText = "Turn Counter: " + turnCounter;
    boxesClicked.push(boxID);
    console.log(boxesClicked);
  }
}



  function checkMatch() {
    if (turnCounter % 2 == 0) {
      for (let i = 0; i < boxesClicked.length; i++) {
        let boxColor = document.getElementById(boxesClicked[i]).src;
        boxColorArray.push(boxColor);
        console.log(boxColor, boxColorArray);
      }
      if (boxColorArray[0] == boxColorArray[1]) {
        console.log("match");
        console.log(boxColor);
        matchCounter = matchCounter + 1;
        boxesClickedEmptyMatch()
      } else if (turnCounter % 2 == 0) {
        if (boxColorArray[0] !== boxColorArray[1]) {
          console.log("not match");
          // document.getElementById('topRow1').style.backgroundColor = 'white'
          // document.getElementById('topRow2').style.backgroundColor = 'white'
          // document.getElementById('bottomRow1').style.backgroundColor = 'white'
          // document.getElementById('bottomRow2').style.backgroundColor = 'white'
          // document.getElementById('bottomRow3').style.backgroundColor = 'white'
          // document.getElementById('bottomRow4').style.backgroundColor = 'white'
          // document.getElementById('topRow3').style.backgroundColor = 'white'
          // document.getElementById('topRow4').style.backgroundColor = 'white'

          for (let i = 0; i < boxesClicked.length; i++) {
            // console.log('hi2010')
            // console.log(boxesClicked.length, 'boxes')
            //
            delay(i);
            boxesClickedEmptyNoMatch();
          }
          function delay(i) {
            setTimeout(() => {
              console.log(boxesClicked);
              console.log(boxesClicked[i], "hi ellie", i);
              document.getElementById(boxesClicked[i]).src = 'images/stars.gif';
            }, 1000);
          }
        }
      }

      // boxColor = []
      function boxesClickedEmptyNoMatch() {
        setTimeout(() => {
          boxesClicked = [];
          boxColorArray = [];
        }, 1001);
      }
      function boxesClickedEmptyMatch() {
       
          boxesClicked = [];
          boxColorArray = [];
        
      }
      console.log(boxColor, boxColorArray, "hi mom");
    }
  }
  checkMatch();
  function checkWin() {
    if (matchCounter == 5) {
      alert(`You Won! It took you ${turnCounter} turns to win! Press the reset button to play again!`);
      matchCounter = 0;
    }
  }
  checkWin();
}



