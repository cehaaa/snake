const canvas = document.querySelector(".canvas");
const score = document.querySelector(".score");
const ctx = canvas.getContext("2d");

const scale = 20;
const rows = canvas.height / scale;
const cols = canvas.width / scale;

const snake = new Snake();
const food = new Food();

const start = () => {
  init();
};

const init = () => {
  snake.draw();
  food.pickLocation();

  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    food.draw();
    snake.update();
    snake.draw();

    if (snake.eat(food)) {
      snake.updateScore(10);
      food.pickLocation();
    }
  }, 200);
};

window.addEventListener("keydown", (event) => {
  const direction = event.key.replace("Arrow", "");
  snake.changeDirection(direction);
});
