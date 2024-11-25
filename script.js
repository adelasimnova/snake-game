const playboard = document.getElementById("playboard");
const scoreElement = document.getElementById("score");
const highScoreElement = document.getElementById("high-score");
const controls = document.querySelectorAll(".controls i")

let appleX = 1;
let appleY = 1;

let headX = 5;
let headY = 5;

let direction = "right";

let velocityX = 0;
let velocityY = 0;

let score = 0; 

let highScore = localStorage.getItem('highScore') ?? 0;
highScoreElement.innerText=`High Score: ${highScore}`

let gameOver = false; 

function changeVelocity(event) {
    if (event.key == "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
        direction = 'right';
    } else if (event.key == "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;
        direction = 'left';
    } else if (event.key == "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
        direction = 'up';
    } else if (event.key == "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
        direction = 'down';
    }
    }

function updateApplePosition() {
    appleX = Math.floor(Math.random() * 15) + 1;
    appleY = Math.floor(Math.random() * 15) + 1;
}

function handleGameOver(){
    clearInterval(intervalId);
    alert("Game Over! Press OK to replay.");
    location.reload();
}

function renderGame() {
    if(gameOver) {
        handleGameOver();
    }

    if (headX == appleX && headY == appleY) {
        updateApplePosition();
        score = score + 1;
        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore);
        }
        scoreElement.innerText=`Score: ${score}`
        highScoreElement.innerText=`High Score: ${highScore}`
    }

    headX = headX + velocityX;
    headY = headY + velocityY;

    if (headX > 15 || headY > 15 || headX < 1 || headY < 1 ) {
        gameOver = true;
        return;
    }

    let html = `<div class="apple-image-wrapper" style="grid-area: ${appleY}/${appleX};"><img class="apple-image" src="./assets/apple.png"/></div>`;
    html = html + `<div class="head-image-wrapper" style="grid-area: ${headY}/${headX};"><img class="head-image" src="./assets/${direction}.png"/></div>`;

    playboard.innerHTML=html;
}

updateApplePosition()
renderGame();
const intervalId = setInterval(renderGame, 200);
document.addEventListener("keydown", changeVelocity)

controls.forEach((i) => {
    i.addEventListener("click", () => changeVelocity({ key: i.dataset.key}))
})

