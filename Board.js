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
}
