class Food {
  constructor() {
    this.x = 0;
    this.y = 0;

    this.special = false;
  }
  pickPosition() {
    this.x = (Math.floor((Math.random() * width) / scale - 1) + 1) * scale;
    this.y = (Math.floor((Math.random() * height) / scale - 1) + 1) * scale;
  }

  draw(special) {
    this.special = special;

    let color = this.special ? "green" : "red";

    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, scale, scale);
  }
}
