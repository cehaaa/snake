class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;

    this.xSpeed = 0;
    this.ySpeed = 0;

    this.body = [];
    this.tailLength = 1;

    this.xSpeed = scale;
    this.ySpeed = 0;

    this.init();
  }
  init() {
    this.body.push({
      x: this.x,
      y: this.y,
    });
  }
  draw() {
    for (let i = 0; i < this.body.length; i++) {
      let color = i === 0 ? "#75e349" : "orange";
      ctx.fillStyle = color;
      ctx.fillRect(this.body[i].x, this.body[i].y, scale, scale);
    }
  }
  update(props) {
    if (props) {
      this.xSpeed = props.x;
      this.ySpeed = props.y;
    }

    // if (props) {
    this.body.unshift({
      // x: (this.x += props.x),
      // y: (this.y += props.y),
      x: (this.x += this.xSpeed),
      y: (this.y += this.ySpeed),
    });
    this.body.pop();
    // }
  }
  listener(direction) {
    if (direction === "Up") {
      this.update({
        x: 0,
        y: scale * -1,
      });
    }
    if (direction === "Down") {
      this.update({
        x: 0,
        y: scale,
      });
    }
    if (direction === "Right") {
      this.update({
        x: scale,
        y: 0,
      });
    }
    if (direction === "Left") {
      this.update({
        x: scale * -1,
        y: 0,
      });
    }
  }
  eat(foodPos) {
    if (foodPos.x === this.x && foodPos.y === this.y) {
      const tail = this.body[this.body.length - 1];
      this.body.push({
        x: tail.x,
        y: tail.y,
      });

      this.tailLength++;
      return true;
    }
  }
}
