const gameContainer = document.querySelector(".game-container");
const snake = document.querySelector(".snake");
const apple = document.querySelector(".apple");
const startButton = document.querySelector(".game-button");

let snakeX = 0; //  Position X du serpent
let snakeY = 0; //   Position Y du serpent
let appleX = 0;
let appleY = 0;
let gameRunning = false;


// fonction pour définir la position actuel de mon serpent
function showSnake() {
  snake.style.left = snakeX + "px";
  snake.style.top = snakeY + "px";
}

// math.random pour définir un chiffre entre 0 et 0.99
// math.floor arrondie le décimal a l'entier inférieur et je le multiplie par 15

//Chiffre aléatoire pour définir la position de la pomme
//

function showApple() {
  appleX = Math.floor(Math.random() * 15) * 20;
  appleY = Math.floor(Math.random() * 15) * 20;
  apple.style.left = appleX + "px";
  apple.style.top = appleY + "px";
}



// Mouvement du serpent

let move = "right"; // Je définie aussi la direction initial du serpent

function moveSnake() {
  if (move === "right") {
    snakeX += 20; // déplacement de 20 px a droite
  } else if (move === "left") {
    snakeX -= 20; // déplacement de 20 px a gauche
  } else if (move === "down") {
    snakeY += 20; // 20px bas
  } else if (move === "up") {
    snakeY -= 20; // 20px vers le haut
  }

  //je rapelle la fonction de position du snake initial pour la mettre a
  // jour a chaque fois que j'appuie sur une touche  ( haut, bas, gauche, droite)
  showSnake();
  // Gére les colisions avec la pomme et le serpent
  snakeCrash();
}

// Je créé des écouteur d'événement pour target l'utilisation des touches
document.addEventListener("keydown", (e) => {
  // si l'évent est une pression de la touche droite et
  //  strictement contraire a la touche gauche
  // je vais a droite
  if (e.key === "ArrowRight" && move !== "left") {
    move = "right";
  } else if (e.key === "ArrowLeft" && move !== "right") {
    move = "left";
  } else if (e.key === "ArrowDown" && move !== "up") {
    move = "down";
  } else if (e.key === "ArrowUp" && move !== "down") {
    move = "up";
  }
});


// setInterval est utilise pour appeler la fonction en continue toutes 
// les millisecondes
let gameInterval = setInterval(moveSnake, 200);


// Gérer les collisions avec la pomme et le serpent

function snakeCrash() {

  if (!gameRunning) {
    return;
  }
    // colision zone de jeu
    if ( snakeX < 0 || snakeX >= 300 || snakeY < 0 || snakeY >= 300) {
        clearInterval(gameInterval); // Game Over
        gameRunning = false;
        alert("Game Over, t'es claqué mon chef");
    }
//---------------------------------------------------------
    // Collision avec le serpent, a dev
    //------------------------------------------------------
    // Collision avec la pomme
    if(snakeX === appleX && snakeY === appleY) {
        //-------------------------------------------------------------
        // le serpent dois grandir, et aller un peu plus vite, a dev
        //-------------------------------------------------------------
    }
}

function startGame() {
  if (!gameRunning) {
  snakeX = 0;
  snakeY = 0;
  showSnake();
  showApple();
  move = "right";
  gameInterval = setInterval(moveSnake, 200);
  gameRunning = true;
}
}

startButton.addEventListener("click", startGame);

