class Food {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  pickLocation() {
    this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() * cols - 1) + 1) * scale;
  }

  draw() {
    ctx.fillStyle = "#FF1919";
    ctx.fillRect(this.x, this.y, scale, scale);
  }
}
