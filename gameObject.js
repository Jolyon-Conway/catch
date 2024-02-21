class gameObject {
    constructor (Xpos, Ypos, Xvel, Yvel, points, acceleration, sprite) {
      this.Xpos = random(0,550); //randomises the xpos so that they dont all spawn in the same area
      this.Ypos = Ypos;
      this.Xvel = Xvel;
      this.Yvel = Yvel;
      this.points = points;
      this.acceleration = acceleration
      this.sprite = sprite;
    }
  
    display() {
      image(this.sprite, this.Xpos, this.Ypos, 50, 50); //shows where the object is on the screen
    }
  
    move(){
      this.Xpos += this.Xvel;
      this.Ypos += this.Yvel;
      this.Yvel += this.acceleration; //accelerates object depending on how many have been caught
    }
  }