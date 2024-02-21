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
      if (keyIsDown(LEFT_ARROW) && this.Xpos > 0) {
        this.Xpos -= 15;
      }
      if (keyIsDown(RIGHT_ARROW) && this.Xpos < 550) {
        this.Xpos += 15;
      }
    }
    display() {
      image(this.sprite, this.Xpos, 550, 50, 50);
      fill(255);
      text("Points: " + this.points, 10, 20);
    }
    collide() {
        for (let i = this.objectsArr.length - 1; i >= 0; i--) {
            if (this.objectsArr[i].Ypos >= 550 && this.objectsArr[i].Xpos > this.Xpos && this.objectsArr[i].Xpos < this.Xpos + 50 || this.objectsArr[i].Ypos >= 550 && this.objectsArr[i].Xpos + 50 > this.Xpos && this.objectsArr[i].Xpos + 50 < this.Xpos + 50) {
            this.points += this.objectsArr[i].points;
            this.objectsArr.splice(i, 1);
            return true;
            }
        }
        for (let i = this.badObjectsArr.length - 1; i >= 0; i--) {
          if (this.badObjectsArr[i].Ypos >= 550 && this.badObjectsArr[i].Xpos > this.Xpos && this.badObjectsArr[i].Xpos < this.Xpos + 50 || this.badObjectsArr[i].Ypos >= 550 && this.badObjectsArr[i].Xpos + 50 > this.Xpos && this.badObjectsArr[i].Xpos + 50 < this.Xpos + 50) {
            this.lives -= this.badObjectsArr[i].lives;
            this.badObjectsArr.splice(i, 1);
            return true;
          }
      }
        return false;
    }
  }