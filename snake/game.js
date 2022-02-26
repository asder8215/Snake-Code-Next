// setup canvas
let canvas = document.getElementById('display');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
let ctx = canvas.getContext('2d');

// variables
const gridSize = 40;
const gridWidth = Math.floor(canvas.width / gridSize);
const gridHeight = Math.floor(canvas.height / gridSize);

let snakeCoordinates = [{x:5, y:3}, {x:4, y:3}, {x:3, y:3}];
let snakeDirection = "right";

// draw helpers
function erase()
{
  ctx.fillStyle = '#000044';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function drawSquare(x, y)
{
  ctx.fillStyle = 'green';
  ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
}
function drawHead(x, y)
{
  ctx.fillStyle = 'darkgreen';
  ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
}
function drawCircle(x, y)
{
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc((x + 0.5) * gridSize, (y + 0.5) * gridSize, gridSize / 2, 0, 2 * Math.PI);
  ctx.fill();
}

// user input
window.addEventListener('keydown', event => {
    console.log(event.code);
    if (event.code == "ArrowUp")
    {
        snakeDirection = "up";
        
    }
    if (event.code == "ArrowDown")
    {
        snakeDirection = "down";
        
    }
    if (event.code == "ArrowLeft")
    {
        snakeDirection = "left";
        
    }
    if (event.code == "ArrowRight")
    {
        snakeDirection = "right";
        
    }
})


function drawSnake() {
    drawHead(snakeCoordinates[0].x, snakeCoordinates[0].y);
    for (let i=1; i < snakeCoordinates.length; i++)
    {
        let body = snakeCoordinates[i]
        drawSquare(body.x, body.y);
    }
}
let snake = snakeCoordinates
setInterval(() => {
  let head = snake[0]
    if (snakeDirection == "up") {
        snake.unshift({x: head.x, y: head.y - 1});
    }
    else if (snakeDirection == "down") {
      snake.unshift({x: head.x, y: head.y + 1});
    }
    else if (snakeDirection == "left") {
      snake.unshift({x: head.x - 1, y: head.y});
    }
    else if (snakeDirection == "right") {
      snake.unshift({x: head.x + 1, y: head.y});
    }

snake.pop()
erase()
drawSnake()
drawCircle(7,3)
}
, 100);





// todo program the game





// Discussion:
// - How can we represent a snake using an array?
//    - Keep coordinates (x, y) of the head/the rest of the squares
// - How can we draw the snake?
//    - we will use a for loop to loop the array
// - How can we move the snake over time?
//    - a while block
//    - setInterval(callback, 100)
// - How can the user change the direction of the snake?
//    - keypress event
//    - if else statements
