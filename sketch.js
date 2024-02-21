let player;
let objectArr = [];
let badObjectArr = [];
let spawnCondition;
let acceleration = 0.1
function preload() { //loads the images
    playerImg = loadImage("playerImg.png"); //assigning to variables
    coinImg = loadImage("coinImg.png");
    bombImg = loadImage("bombImg.png");
    backgroundImg = loadImage("backgroundImg.png");
}

function setup() {
  createCanvas(600, 600); //create canvas
  player = new Player(300, 5, 0, objectArr, badObjectArr, playerImg); //creating the player + including global arrays badObjectArr and objectArr
}

function draw() {
    background(backgroundImg);
    textSize(32);
    fill(255);
    text("Lives: " + player.lives, 10, 50);
   if (player.lives > 0) { //condition for the game to run 
    //player logic
    player.move(); 
    player.display();
    if (player.collide()) {
        acceleration += 0.01; //increases the objects falling speed, making the game continuously harder
    }
    //objects logic
    if (objectArr.length + badObjectArr.length < 4) { //limits the amount of objects allowed to appear on the screen at once
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
    

    for (let i = objectArr.length - 1; i >= 0; i--) { //checking through all objcets in the array
        // Check if the array element is an instance of the GameObject class
        if (objectArr[i] instanceof gameObject) {
            objectArr[i].display();
            objectArr[i].move();

            if (objectArr[i].Ypos >= 600) {//checks whether or not the object is past the player and has fallen through
                objectArr.splice(i, 1);
                player.lives -= 1;//because its part of the objectArr it decreases a life (good object)
            }
        }
    }
    for (let i = badObjectArr.length -1; i >= 0; i--) {
        if (badObjectArr[i] instanceof badGameObject) {
            badObjectArr[i].move();
            badObjectArr[i].display();

            if (badObjectArr[i].Ypos >= 600) {
                badObjectArr.splice(i,1); //because its part of the badGameObject, it doesn't dcrease a life and removes itself from the array (bad object)
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
        text("Points: " + player.points, 200, 350); //displays the users final score
        text("Press F5 to restart", 200, 400);
    }
}

