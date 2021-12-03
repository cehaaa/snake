const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const scale = 20;
const width = canvas.width;
const height = canvas.height;

const snake = new Snake();
const button = new Button();
const board = new Board();
const food = new Food();

const highScore = JSON.parse(localStorage.getItem("python_game") || 0);

button.draw();
board.startScreen();
board.highScore();

const init = () => {
  button.clear();
  start();
};

const start = () => {
  board.clear();
  food.pickPosition();
  setInterval(() => {
    ctx.clearRect(0, 0, width, height);
    board.scoreBoard(snake.score);

    if (snake.score % 5 === 0) {
      food.draw(true);
    } else food.draw(false);

    snake.update();
    snake.draw();

    if (snake.eat(food, food.special)) {
      food.pickPosition();
    }
  }, 200);
};

canvas.addEventListener("click", (event) => {
  board.getMousePosition(event);
  if (button.click(board.getMousePosition(event))) init();
});

window.addEventListener("keydown", (event) => {
  const direction = event.key.replace("Arrow", "");
  snake.listener(direction);
});
