const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 50;
const CANVAS_HEIGHT = canvas.height = 50;

const playerImage = new Image();
playerImage.src = 'Mobile - Pizza Boy - Player.png';
const spriteWidth = 32;
const spriteHeight = 40;
let frameX = 0;
let frameY = 1;
let gameFrame = 0;
const staggerFrames = 10;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(100,50,100,100);
    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, 50, 50);
    if (gameFrame % staggerFrames == 0) {
        if (frameX < 2) frameX++;
        else frameX = 0;
    }
    gameFrame++;
    requestAnimationFrame(animate);

};
animate();

window.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        window.location.href = "/html/letter.html";
    }
});
