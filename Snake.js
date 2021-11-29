class Snake {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;

    this.xSpeed = 0;
    this.ySpeed = 0;

    this.snakeBody = [];
    this.tailLength = 1;
  }
  draw() {
    ctx.fillStyle = "orange";
    ctx.fillRect(this.x, this.y, scale, scale);
  }
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  listener(direction) {
    if (direction === "Up") {
      if (this.ySpeed === scale) return;

      this.xSpeed = 0;
      this.ySpeed = -scale;
    }

    if (direction === "Down") {
      if (this.ySpeed === -scale) return;

      this.xSpeed = 0;
      this.ySpeed = scale;
    }

    if (direction === "Right") {
      if (this.xSpeed === -scale) return;

      this.xSpeed = scale;
      this.ySpeed = 0;
    }

    if (direction === "Left") {
      if (this.xSpeed === scale) return;

      this.xSpeed = -scale;
      this.ySpeed = 0;
    }
  }
  eat(foodPos) {
    if (foodPos.x === this.x && foodPos.y === this.y) {
      this.tailLength++;
      return true;
    }
  }
}
