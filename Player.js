class Player {
    constructor(Xpos, lives, points, objectsArr, badObjectsArr, sprite) {
      this.Xpos = Xpos;
      this.lives = lives;
      this.points = points;
      this.objectsArr = objectsArr;
      this.badObjectsArr = badObjectsArr;
      this.sprite = sprite;
    }
    move() {
      if (keyIsDown(LEFT_ARROW) && this.Xpos > 0) { //checks whether or not its at the left edge of the screen - if yes it cannot move any further
        this.Xpos -= 15; //moves the player left along the x-axis
      }
      if (keyIsDown(RIGHT_ARROW) && this.Xpos < 550) { //checks whether or not its at the right edge of the screen - if yes it cannot move any further
        this.Xpos += 15; //moves the player right along the x-axis
      }
    }
    display() {
      image(this.sprite, this.Xpos, 550, 50, 50);
      fill(255);
      text("Points: " + this.points, 10, 30);
    }
    collide() {
        //collision logic for good objects
        for (let i = this.objectsArr.length - 1; i >= 0; i--) { //checks through the entire array
          //checks whether or not the object is within the player's collision side
            if (this.objectsArr[i].Ypos >= 550 && this.objectsArr[i].Xpos > this.Xpos && this.objectsArr[i].Xpos < this.Xpos + 50 || this.objectsArr[i].Ypos >= 550 && this.objectsArr[i].Xpos + 50 > this.Xpos && this.objectsArr[i].Xpos + 50 < this.Xpos + 50) {
            this.points += this.objectsArr[i].points; //increases points
            this.objectsArr.splice(i, 1);
            return true;
            }
        }
        //collision logic for bad objects
        for (let i = this.badObjectsArr.length - 1; i >= 0; i--) { //checks through the entire array
          //checks whether or not the badObject is within the player's collision side
          if (this.badObjectsArr[i].Ypos >= 550 && this.badObjectsArr[i].Xpos > this.Xpos && this.badObjectsArr[i].Xpos < this.Xpos + 50 || this.badObjectsArr[i].Ypos >= 550 && this.badObjectsArr[i].Xpos + 50 > this.Xpos && this.badObjectsArr[i].Xpos + 50 < this.Xpos + 50) {
            this.lives -= this.badObjectsArr[i].lives; //decreases points
            this.badObjectsArr.splice(i, 1);
            return true;
          }
      }
        return false;
    }
  }