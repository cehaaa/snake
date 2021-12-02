class Board {
  constructor() {
    this.fontColor = "white";
  }

  getMousePosition(event) {
    let rect = canvas.getBoundingClientRect();
    let position = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    return position;
  }

  clear() {
    ctx.clearRect(0, 0, width, height);
  }

  startScreen() {
    ctx.fillStyle = this.fontColor;
    ctx.font = "20px Arial";
    ctx.fillText("PYTHON 🐍", width / 2 - 45, height / 2 - 50);
  }

  highScore() {
    // let highScore = JSON.parse(localStorage.getItem("python_game") || 0);

    ctx.font = "12px Arial";
    ctx.fillStyle = this.fontColor;
    ctx.fillText(
      `High Score is: ${highScore}`,
      width / 2 - 45,
      height / 2 + 60
    );
  }

  scoreBoard(score) {
    ctx.fillStyle = this.fontColor;
    ctx.font = "12px Arial";
    ctx.fillText(`Score: ${score}`, width - 80, 40);
  }
}
