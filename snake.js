class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;

    this.xSpeed = scale * 1;
    this.ySpeed = 0;

    this.total = 0;
    this.tail = [];

    this.score = 0;
  }

  draw() {
    ctx.fillStyle = "#00B200";

    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }

    ctx.fillRect(this.x, this.y, scale, scale);
  }

  update() {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    this.tail[this.total - 1] = { x: this.x, y: this.y };

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // if snake hit the wall
    if (this.x > canvas.width) {
      this.x = 0;
    }

    if (this.y > canvas.height) {
      this.y = 0;
    }

    if (this.x < 0) {
      this.x = canvas.width;
    }

    if (this.y < 0) {
      this.y = canvas.height;
    }
  }

  changeDirection(direction) {
    switch (direction) {
      case "Up":
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;

      case "Down":
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;

      case "Left":
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;

      case "Right":
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
    }
  }

  eat(food) {
    this.updateScore(1);

    score.innerHTML = this.score;

    if (this.x === food.x && this.y === food.y) {
      this.total++;
      return true;
    }

    return false;
  }

  updateScore(score = 10) {
    this.score += score;
  }
}
