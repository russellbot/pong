// Canvas
const { body } = document;
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
const width = 500;
const height = 700;
const screenWidth = window.screen.width;
const canvasPosition = screenWidth / 2 - width / 2;
const isMobile = window.matchMedia('(max-width: 600px)');
const gameOverEl = document.createElement('div');

// Render Everything on Canvas
function renderCanvas() {
    // Canvas Background
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    // Paddle Color
    context.fillStyle = 'white';

    // Player Paddle (bottom)
    context.fillRect(paddleBottomX, height -20, paddleWidth, paddleHeight);

    // Computer Paddle (top)
    context.fillRect(paddleTopX, 10, paddleWidth, paddleHeight);
}

// Create Canvas Element
function createCanvas() {
    canvas.width = width;
    canvas.height = height;
    body.appendChild(canvas);
    renderCanvas();
}

createCanvas();