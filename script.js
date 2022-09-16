const FPS = 30; // Frames per second (speed)
const bs = 30; // ball size
let bx, by;
let xv, yv; // (velocity - pixels per frame)
let canvas, context;

canvas = document.querySelector("#canvas")
context = canvas.getContext("2d");

// the context is what we use to draw on the canvas element


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
if (Math.floor(Math.random() * 2) == 0) {       // if this random number between 0 and 1, multiplied by 2 and then rounded down to the nearest integer (will either be 1 or 0) is equal to 0 - run the function (like a coin toss!)
    xv = -xv;   // -xv means it will be going in the other direction

}

if (Math.floor(Math.random() * 2) == 0) {     
    yv = -yv;

}
// update function
function update() {
    //move the ball
    bx += xv;
    by += yv;


    // bounce the ball off each wall - put in conditions to detect if ball is near the wall
    if (bx - bs / 2 < 0 && xv < 0) {                        // if the ball x value minus half of the ball size is less than 0 (going off the left of the screen) and the velocity is less than 0 (means it's travelling towards the left), the velocity will be set at a minus (making it go other way in x direction) 
        xv = -xv; // want to switch the x velocity to a minus so that it will go the other way in the x direction. 
    }

    if (bx + bs / 2 > canvas.width && xv > 0) {            // if the ball x value PLUS half of the ball size is MORE than the CANVAS WIDTH and the velocity MORE than 0(means it is travelling in a POSITIVE direction), the X velocity will be set at a minus. 
        xv = -xv; // want to switch the x velocity to a minus so that it will go the other way in the x direction. 
    }

    if (by - bs / 2 < 0 && yv < 0) {            // if the ball y value minus half of the ball size is less than 0 and the velocity less than 0, the velocity will be set at a minus. 
        yv = -yv; // want to switch the y velocity to a minus so that it will go the other way in the y direction. 
    }

    if (by + bs / 2 > canvas.height && yv > 0) {            // if the ball y value PLUS half of the ball size is MORE than the CANVAS HEIGHT (travelling downwards) and the velocity (yv) MORE than 0, the Y velocity will be set at a minus. 
        yv = -yv; // want to switch the x velocity to a minus so that it will go the other way in the x direction. 
    }

    // draw background and ball
    context.fillStyle = "black"; // fillStyle needs to come BEFORE fillRect. 
    context.fillRect(0, 0, canvas.width, canvas.height);   // fillRect - first two values are x and y positions, second two are width and height measurements. 
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