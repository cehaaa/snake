class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;

    this.dir = "Right";

    this.body = [];

    this.xSpeed = scale * 1;
    this.ySpeed = 0;

    this.total = 0;

    this.score = 0;
  }

  draw() {
    ctx.fillStyle = "orange";

    for (let i = 0; i < this.body.length; i++) {
      ctx.fillRect(this.body[i].x, this.body[i].y, scale, scale);
    }

    ctx.fillStyle = "darkorange";
    ctx.fillRect(this.x, this.y, scale, scale);
  }

  update() {
    for (let i = 0; i < this.body.length - 1; i++) {
      this.body[i] = this.body[i + 1];
    }

    this.body[this.total - 1] = {
      x: this.x,
      y: this.y,
    };

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    this.checkBoundary();
    this.checkCollision();
  }

  listener(dir) {
    // switch (dir) {
    //   case "Up":
    //     this.xSpeed = 0;
    //     this.ySpeed = -scale * 1;
    //     break;
    //   case "Down":
    //     this.xSpeed = 0;
    //     this.ySpeed = scale * 1;
    //     break;
    //   case "Left":
    //     this.xSpeed = -scale * 1;
    //     this.ySpeed = 0;
    //     break;
    //   case "Right":
    //     this.xSpeed = scale * 1;
    //     this.ySpeed = 0;
    //     break;
    // }

    if (dir === "Up" && this.dir != "Down") {
      this.dir = dir;
      this.xSpeed = 0;
      this.ySpeed = scale * -1;
    }

    if (dir === "Down" && this.dir != "Up") {
      this.dir = dir;
      this.xSpeed = 0;
      this.ySpeed = scale * 1;
    }

    if (dir === "Left" && this.dir != "Right") {
      this.dir = "Left";
      this.xSpeed = scale * -1;
      this.ySpeed = 0;
    }

    if (dir === "Right" && this.dir != "Left") {
      this.dir = "Right";
      this.xSpeed = scale * 1;
      this.ySpeed = 0;
    }
  }

  eat(food, special) {
    if (food.x === this.x && food.y === this.y) {
      if (special) {
        this.score += 2;
        this.total++;
      } else {
        this.score++;
        this.total++;
      }
      return true;
    } else return false;
  }

  checkBoundary() {
    if (this.x > width) {
      this.x = 0;
    }

    if (this.y > height) {
      this.y = 0;
    }

    if (this.x < 0) {
      this.x = width;
    }

    if (this.y < 0) {
      this.y = height;
    }
  }

  checkCollision() {
    for (let i = 0; i < this.body.length; i++) {
      if (this.x === this.body[i].x && this.y === this.body[i].y) {
        alert("Game over");
      }
    }
  }
}
