const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const scale = 20;
const width = canvas.width;
const height = canvas.height;

const snake = new Snake();
const button = new Button();
const board = new Board();
const food = new Food();

button.draw();

const init = () => {
  button.clear();
  start();
};

const start = () => {
  snake.draw();
  food.pickPosition();
  board.clear();

  setInterval(() => {
    board.clear();

    food.draw();

    snake.draw();
    snake.update();

    if (snake.eat(food)) {
      food.pickPosition();
    }
  }, 800);
};

canvas.addEventListener("click", (event) => {
  board.getMousePosition(event);
  if (button.click(board.getMousePosition(event))) init();
});

window.addEventListener("keydown", (event) => {
  const direction = event.key.replace("Arrow", "");
  snake.listener(direction);
});
