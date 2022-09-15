const FPS = 30; // Frames per second (speed)
const bs = 30; // ball size
let bx, by;
let xv, yv; // (velocity - pixels per frame)
let canvas, context;

canvas = document.querySelector("#canvas")
context = canvas.getContext("2d");


// canvas.addEventListener("mouseover", () => {
//     canvas.style.cursor = "col-resize";
// })

// set up interval - inbuilt function 'setInterval()'
setInterval(update, 1000 / FPS)       // calls function 'update' (noted below) at specified intervals. Calls it 1000 divided by FPS(30), so every one thirtieth of a second. 


// ball starting position

bx = canvas.width / 2;
by = canvas.height / 2;

// random ball starting speed (between 25 and 100 pps-pixels per second)
xv = Math.floor(Math.random() * 101 + 25) / FPS; // math.random gives us a random number between 0 and 1. We want to make it between 25 and 100 so times by 101 and add 25
// math.floor rounds down to nearest integer. We divide this by the frames per second as before it was pixels per second
yv = Math.floor(Math.random() * 101 + 25) / FPS;


// random ball direction
if (Math.floor(Math.random() * 2) == 0) {      // if this random number between 0 and 1, multiplied by 2 and then rounded down to the nearest integer - run the function (like a coin toss!)
    xv = -xv;   // -xv means it will be going in the other direction

}

if (Math.floor(Math.random() * 2) == 0) {      // if this random number between 0 and 1, multiplied by 2 and then rounded down to the nearest integer - run the function (like a coin toss!)
    yv = -yv;

}
// update function
function update() {
    //move the ball
    bx += xv;
    by += yv;


    // bounce the ball off each wall
    if (bx - bs / 2 < 0 && xv < 0) {                        // if the ball x value minus the ball size divided by 2 (I imagine because ) is less than 1 and the velocity is less than 0, the velocity will be set at a minus 
        xv = -xv;
    }

    // draw background and ball
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "yellow";
    context.fillRect(bx - bs / 2, by - bs / 2, bs, bs); // bx is wherever the ball is. We minus the ball
}


// we don't want the x and the y velocity to be the same as we want the direction of the ball to be random. 
// // ctx.style.backgroundColor = "#F3F1EA";
// ctx.fillStyle = "#F3F1EA";
// ctx.fillRect(0, 0, canvas.width, canvas.height);
// ctx.moveTo(0, 0);
// ctx.lineTo(200,100);
// ctx.stroke();


// ctx.beginPath();
// ctx.arc(105, 50, 40, 0, 2 * Math.PI);
// ctx.stroke();

// function draw()
// circle(30, 30, 20);