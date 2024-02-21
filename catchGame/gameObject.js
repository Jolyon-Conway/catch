class gameObject {
    constructor (Xpos, Ypos, Xvel, Yvel, points, acceleration, sprite) {
      this.Xpos = random(0,550);
      this.Ypos = Ypos;
      this.Xvel = Xvel;
      this.Yvel = Yvel;
      this.points = points;
      this.acceleration = acceleration
      this.sprite = sprite;
    }
  
    display() {
      image(this.sprite, this.Xpos, this.Ypos, 50, 50);
    }
  
    move(){
      this.Xpos += this.Xvel;
      this.Ypos += this.Yvel;
      this.Yvel += this.acceleration;
    }
  }