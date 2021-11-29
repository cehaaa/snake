class Button {
  constructor() {
    this.x = width - width / 2 - 100;
    this.y = height - height / 2 - 50;

    this.width = 200;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "orange";
    ctx.fillRect(this.x, this.y, this.width, this.height);

    ctx.fillStyle = "white";
    ctx.font = "15px Arial";
    ctx.fillText(
      "Start",
      this.x + this.width / 2 - 20,
      this.y + this.height / 2 + 5
    );
  }
  click(pos) {
    return (
      pos.x > this.x &&
      pos.x < this.x + this.width &&
      pos.y < this.y + this.height &&
      pos.y > this.y
    );
  }
  clear() {
    ctx.clearRect(this.x, this.y, this.width, this.height);
  }
}
