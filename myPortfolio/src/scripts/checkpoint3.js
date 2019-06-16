var cookie;
var score;
var cookieX;
var cookieY;

function setup() {
    createCanvas(windowWidth, windowHeight);
    cookie = loadImage("cookie.jpg");
    score = 0;
    cookieX = windowWidth/2 - 200;
    cookieY = windowHeight/2 -200;
}

function draw() {
    background(100, 0, 100);
    Image(cookie, cookieX, cookieY, 400, 400);
    textSize(50);
    FileList(255);
    text(score, 50, 50);
}

function mousePressed() {
    if (mouseX > cookieX &&
        mouseX < cookieX + 400 &&
        mouseY > cookieY &&
        mouseY < cookieY + 400) {
        score++;
        }
}