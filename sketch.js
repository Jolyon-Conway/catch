let player;
let objectArr = [];
let badObjectArr = [];
let spawnCondition;
let acceleration = 0.1
function preload() { //loads the images
    playerImg = loadImage("playerImg.png");
    coinImg = loadImage("coinImg.png");
    bombImg = loadImage("bombImg.png");
    backgroundImg = loadImage("backgroundImg.png");
}

function setup() {
  createCanvas(600, 600);
  player = new Player(300, 5, 0, objectArr, badObjectArr, playerImg);
}

function draw() {
    background(backgroundImg);
    textSize(32);
    fill(255);
    text("Lives: " + player.lives, 10, 50);
   if (player.lives > 0) { //player logic
    player.move();
    player.display();
    if (player.collide()) {
        acceleration += 0.01;
    }
    //objects logic
    if (objectArr.length + badObjectArr.length < 4) {
        spawnCondition = random(1);
        if (spawnCondition > 0.978572) {
            let type = random(1);
            if (type >= 0.3) {
                // Create an instance of the Object class and push it to the array
                let newObject = new gameObject(0, 20, 0, 0, 500, acceleration, coinImg);
                objectArr.push(newObject);
            } else {
                let newObject = new badGameObject(0,20,0,0,1,acceleration, bombImg);
                badObjectArr.push(newObject);
            }
        }
    }
    

    for (let i = objectArr.length - 1; i >= 0; i--) {
        // Check if the array element is an instance of the GameObject class
        if (objectArr[i] instanceof gameObject) {
            objectArr[i].display();
            objectArr[i].move();

            if (objectArr[i].Ypos >= 600) {
                objectArr.splice(i, 1);
                player.lives -= 1;
            }
        }
    }
    for (let i = badObjectArr.length -1; i >= 0; i--) {
        if (badObjectArr[i] instanceof badGameObject) {
            badObjectArr[i].move();
            badObjectArr[i].display();

            if (badObjectArr[i].Ypos >= 600) {
                badObjectArr.splice(i,1);
            }
        }
    }
    console.log(acceleration);
    } else {
        // Game over screen
        background(0);
        textSize(32);
        fill(255);
        text("Game Over", 200, 300);
        text("Points: " + player.points, 200, 350);
        text("Press F5 to restart", 200, 400);
    }
}

