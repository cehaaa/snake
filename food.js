class Food {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  pickPosition() {
    this.x = (Math.floor((Math.random() * width) / scale - 1) + 1) * scale;
    this.y = (Math.floor((Math.random() * height) / scale - 1) + 1) * scale;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, scale, scale);
  }
}
