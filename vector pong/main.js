new p5();

/**
 * NOTE:
 * player 1 is by definition on the right side of the game
 * and player 2 on the left. Almost all methods are based upon this convention.
 */


//CANVAS PROPERTIES
const canvasWidth = window.innerWidth - 100;
const canvasHeight = window.innerHeight - 50;

//GAME CONSTANTS
const playerWidth = 30;
const playerHeight = 80;
const initialBallVelocityX = -4;
const initialBallVelocityY = 4;
const standardPlayerVelocityX = 8;
const standardPlayerVelocityY = 6;
const playerHeightDecrementFactor = 2;


//GAME VARIABLES
var score1 = 0, score2 = 0;
var bounces = 0;


//GAME OBJECTS

//player bats
var p1 = new Player(createVector(canvasWidth-30, canvasHeight/2), playerWidth, playerHeight, "green", 1);
var p2 = new Player(createVector(0, canvasHeight/2), playerWidth, playerHeight, "purple", 2);

//ball
var ball = new Ball(createVector(canvasWidth/2, canvasHeight/2), 20);
ball.velocity = createVector(initialBallVelocityX, initialBallVelocityY);

//sound objects
var blop = document.getElementById("blop"); //collision sound
var glass = document.getElementById("glass"); //barrier break
var sF = document.getElementById("stealthyFucker"); //stealthy fucker get (donny)
var fuckenDruggo = document.getElementById("fuckenDruggo"); //you fucken druggo (sassy)
var holyFuck = document.getElementById("holyFuck"); // holy fuck (Quinton)
var holyShit = document.getElementById("holyShit"); // holy shit (Quinton)
var mmmh = document.getElementById("mmmh"); // mmmmm *exhale* (Lez)
var fuckenPussy = document.getElementById("fuckenPussy"); //fucken pussy (donny)
var weAteThem = document.getElementById("weAteThem"); //we've already ate them (lez)
var ohNo = document.getElementById("ohNo");
var fYea = document.getElementById("fYea");
var choomah1 = document.getElementById("choomah1");
var choomah2 = document.getElementById("choomah2");

//image objects, to be preloaded in the setup function
var winnieblues;
var stealthyFucker;
var tripperSnipper;
var centerBong;
var choomah;

//preloading images
function preload() {
    winnieblues = loadImage("./graphics/winnie blue's.png");
    centerBong = loadImage("./graphics/center bong.png");
    tripperSnipper = loadImage("./graphics/tripper sniper.png");
    stealthyFucker = loadImage("./graphics/stealthy fucker.png");
    choomah = loadImage("./graphics/choomah.png");
}

//setting up items array
var items = [];
var item;
var intervalID;

//the following is an array of intervals for possible uses throughout the game. When a player scores
//all intervals are cleared
var intervals = [];

//setup
function setup(){
    stroke(150);
    strokeWeight(2);
    createCanvas(canvasWidth,canvasHeight);
    //filling the items array with an item object of each kind
    Item.initializeArray(items);
    //selecting a random item from the above array and placing it in the item variable. This will appear on the canvas
    item = random(items);
    //setting the item to be refreshed every 10 seconds with a new random one
    intervalID = setInterval(function () {
        item = random(items);
    }, 10000);
}


//game loop
function draw() {

    //setting up background
    background(0);
    Background();

    //drawing the bong
    imageMode(CENTER);
    image(centerBong, canvasWidth/2, canvasHeight/2, centerBong.width/2.5, centerBong.height/2.5);

    //checking for keyboard events
    Keyboard();

    //checking for collisions
    collisionDetection();

    //drawing the game objects
    if(item){
        item.show();
    }
    ball.show();
    p1.show();
    p2.show();

    //moving the game objects
    ball.move();
    p2.move();
    p1.move();


}
