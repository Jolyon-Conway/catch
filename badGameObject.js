class badGameObject extends gameObject{
    constructor(Xpos, Ypos, Xvel, Yvel, lives, acceleration, sprite) {
        super(Xpos, Ypos, Xvel, Yvel, 0, acceleration, sprite);
        this.lives = lives;
    }
}