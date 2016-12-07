var s;
var scl = 20;
var food;
var r = floor(random() * 255) + 1;
var g = floor(random() * 255) + 1;
var b = floor(random() * 255) + 1;

function setup() {
    createCanvas(600, 600);
    s = new Snake();
    frameRate(8);
    pickLocation();
}

function pickLocation()
{
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(51);

    if(s.eat(food))
    {
        pickLocation();
        r = floor(random() * 255) + 1;
        g = floor(random() * 255) + 1;
        b = floor(random() * 255) + 1;
    }

    s.death();
    s.update();
    s.show();

    fill(r, g, b);
    rect(food.x, food.y, scl, scl);
}

function keyPressed()
{
    if(keyCode === UP_ARROW)
    {
        if(s.yspeed !== 1)
            s.dir(0, -1);
    }
    else if(keyCode === DOWN_ARROW)
    {
        if(s.yspeed !== -1)
            s.dir(0, 1);
    }
    else if(keyCode === RIGHT_ARROW)
    {
        if(s.xspeed !== -1)
            s.dir(1, 0);
    }
    else if(keyCode === LEFT_ARROW)
    {
        if(s.xspeed !== 1)
            s.dir(-1, 0);
    }
}
