class Board {
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
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("PYTHON 🐍", width / 2 - 45, height / 2 - 50);
  }

  scoreBoard(score) {
    ctx.fillStyle = "white";
    ctx.font = "12px Arial";
    ctx.fillText(`Score: ${score}`, width - 80, 40);
  }
}
